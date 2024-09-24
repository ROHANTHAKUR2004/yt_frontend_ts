import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal } from "lucide-react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { getcommentdata, videodetials } from "@/Redux/Slices/VideoSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import time from "@/helper/time";


type CommentType = {
  _id: string;
  content: string;
  createdAt: string;
  details: {
    avatar: string;
    fullname: string;
  };
  likes: number;
};
const getVideoFromParams = () => ({
  id: "abc123",
  title: "Next.js 13 App Router: The Full Course",
  views: "1.5M views",
  date: "3 months ago",
  channel: "Vercel",
  subscribers: "500K",
  description: "Learn how to use the new App Router in Next.js 13 with this comprehensive course.",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
});

const recommendedVideos = [
  { id: "1", title: "React 18 New Features", thumbnail:'abc' }
];



export default function Playvideo() {

  const video = getVideoFromParams();
  const {id} = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const videodetails = useSelector((state: RootState) => state.video.videodata);
  const cannelstats = useSelector((state: RootState) => state.dash.channelstats);
  const comments =  useSelector((state: RootState) => state.video.comment);
 
  useEffect(() => {
       dispatch(videodetials(id));
       dispatch(getcommentdata(id));
  }, []);

  return (

    <div>
    <Navbar></Navbar>
    <div className="container mt-8 mx-auto px-4 py-8 text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="aspect-video mb-4 relative">
            <video 
            src={videodetails.videoFile}
            poster={videodetails.thumbnail}
             controls className="w-full h-full rounded-lg shadow-lg" />
          </div>
          <h1 className="text-2xl font-bold mb-2">{videodetails.title}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage  src={cannelstats[0]?.avatar} alt={video.channel} />
                <AvatarFallback>{video.channel[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-200">{cannelstats[0]?.fullname}</p>
                <p className="text-sm text-gray-400">{cannelstats[0]?.subsInfo} Subscribers</p>
              </div>
              <Button
                variant={isSubscribed ? "outline" : "default"}
                className={`${
                  isSubscribed ? "border-gray-400 text-gray-400" : "bg-blue-500 text-white"
                } hover:bg-blue-600`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
                <ThumbsDown className="w-4 h-4 mr-2" />
                Dislike
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-8 shadow-lg">
            <p className="font-semibold mb-2 text-gray-400">{videodetails.views} views • {time(videodetails.createdAt)}</p>
            <p className="text-gray-300">{videodetails.description}</p>
          </div>
<div>
  <h2 className="text-xl font-bold mb-4">{comments.length} Comments</h2>
  <div className="mb-4">
    <Input placeholder="Add a comment..." className="bg-gray-700 text-white border-gray-600" />
  </div>
  {comments.map((comment: CommentType) => (
    <div key={comment._id} className="flex gap-4 mb-4">
      <Avatar>
        <AvatarImage src={comment.details.avatar} alt={comment.details.fullname} />
        <AvatarFallback>{comment.details.fullname[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-gray-200">
          {comment.details.fullname} 
          <span className="font-normal text-sm ml-4 text-gray-500">
             {time(comment.createdAt)}
          </span>
        </p>
        <p className="text-gray-300">{comment.content}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {comment.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ThumbsDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Reply</Button>
        </div>
      </div>
    </div>
  ))}
</div>











        </div>
        <div className="lg:w-1/3">
          <h2 className="text-xl text-red-700 font-bold mb-4">Recommended Videos</h2>
          {recommendedVideos.map((video) => (
            <div key={video.id} className="flex gap-2 mb-4">
              <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded-lg shadow-lg" />
              <div>
                <h3 className="font-semibold text-gray-200">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.channel}</p>
                <p className="text-sm text-gray-400">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
