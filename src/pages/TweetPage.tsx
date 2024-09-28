import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageCircle, Heart, Share2, Edit2, Trash2 } from 'lucide-react';
import Navbar from './Navbar';
import { AppDispatch, RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrentuser } from '@/Redux/Slices/Dashboard';
import { createtweet, deletetweet, getusertweet, updatetweet } from '@/Redux/Slices/tweetSlice';

interface Tweet {
  _id: string;
  content: string;
}

export default function TweetPage() {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.dash.currentuser);
  const tweetss = useSelector((state: RootState) => state.tweet.tweetdata);
  
  const [tw, settw] = useState<Tweet[]>([]);
  const [newTweet, setNewTweet] = useState("");
  const [editingTweet, setEditingTweet] = useState<Tweet | null>(null);

  useEffect(() => {
    dispatch(getcurrentuser());
  }, [dispatch]);

  useEffect(() => {
    if (user && user._id) {
      dispatch(getusertweet(user._id));
    }
  }, [dispatch, user]);

  useEffect(() => {

    if (tweetss && Array.isArray(tweetss) && tweetss.length > 0) {
      const formattedTweets = tweetss.map((tweet: any) => ({
        _id: tweet._id,
        content: tweet.content,
        author: tweet.details?.fullname || "Unknown Author",
        timestamp: new Date(tweet.createdAt).toLocaleString(),
        avatar: tweet.details?.avatar || ""
      }));
      settw(formattedTweets);
    }
  }, [tweetss]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newTweet.trim()) {
      await dispatch(createtweet(newTweet));
      setNewTweet(""); 

      if (user && user._id) {
        await dispatch(getusertweet(user._id));
      }
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTweet && editingTweet.content.trim()) {
     
        settw(tw.map(t => t._id === editingTweet._id ? editingTweet : t));
        
        
        const { _id, content } = editingTweet;
        console.log(_id , content);

        await dispatch(updatetweet({id : _id, content }));
        
        // Clear the editing state
        setEditingTweet(null);
    }
};

  const handleDelete = (_id: string) => {
    settw(tw.filter(t => t._id !== _id));
    dispatch(deletetweet(_id));
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-14 text-white">
        <div className="max-w-2xl mx-auto p-4">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <Textarea
                value={newTweet}
                onChange={(e) => setNewTweet(e.target.value)}
                placeholder="What's happening?"
                className="flex-grow bg-gray-800 text-white border-gray-700 focus:border-blue-500"
              />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                Tweet
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            {tw.map((tweet) => (
              <Card key={tweet._id} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={tweet.avatar} />
                      <AvatarFallback>{tweet.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{tweet.author}</p>
                      <p className="text-sm text-gray-400">{tweet.timestamp}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {editingTweet?._id === tweet._id ? (
                    <form onSubmit={handleUpdate}>
                      <Textarea
                        value={editingTweet.content}
                        onChange={(e) => setEditingTweet({ ...editingTweet, content: e.target.value })}
                        className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 mb-2"
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="submit" size="sm" className="bg-green-500 hover:bg-green-600">
                          Save
                        </Button>
                        <Button type="button" size="sm" variant="secondary" onClick={() => setEditingTweet(null)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <p className="text-white">{tweet.content}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex space-x-4 text-gray-400">
                      <Button variant="ghost" size="sm" className="hover:text-blue-400 hover:bg-gray-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-red-400 hover:bg-gray-700">
                        <Heart className="w-4 h-4 mr-2" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-green-400 hover:bg-gray-700">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-yellow-400 hover:bg-gray-700"
                        onClick={() => setEditingTweet(tweet)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-red-400 hover:bg-gray-700"
                        onClick={() => handleDelete(tweet._id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
