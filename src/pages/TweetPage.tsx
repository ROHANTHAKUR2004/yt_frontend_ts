import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Heart, Share2, Edit2, Trash2 } from 'lucide-react'
import Navbar from './Navbar'

interface Tweet {
  id: number;
  content: string;
  author: string;
  timestamp: string;
}

export default function TweetPage() {
  const [tweets, setTweets] = useState<Tweet[]>([
    { id: 1, content: "Hello, Twitter!", author: "John Doe", timestamp: "2 hours ago" },
    { id: 2, content: "React is awesome!", author: "Jane Smith", timestamp: "1 hour ago" },
  ]);
  const [newTweet, setNewTweet] = useState("")
  const [editingTweet, setEditingTweet] = useState<Tweet | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTweet.trim()) {
      const tweet: Tweet = {
        id: tweets.length + 1,
        content: newTweet,
        author: "Current User",
        timestamp: "Just now"
      };
      setTweets([tweet, ...tweets])
      setNewTweet("")
      // TODO: Integrate with create tweet API
    }
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingTweet && editingTweet.content.trim()) {
      setTweets(tweets.map(t => t.id === editingTweet.id ? editingTweet : t))
      setEditingTweet(null)
      // TODO: Integrate with update tweet API
    }
  }

  const handleDelete = (id: number) => {
    setTweets(tweets.filter(t => t.id !== id))
    // TODO: Integrate with delete tweet API
  }

  return (
    <div>
    <Navbar></Navbar>
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
          {tweets.map((tweet) => (
            <Card key={tweet.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${tweet.author}&backgroundColor=random`} />
                    <AvatarFallback>{tweet.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{tweet.author}</p>
                    <p className="text-sm text-gray-400">{tweet.timestamp}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {editingTweet?.id === tweet.id ? (
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
                      onClick={() => handleDelete(tweet.id)}
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
  )
}