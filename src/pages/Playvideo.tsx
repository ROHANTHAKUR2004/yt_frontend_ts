// import { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal } from "lucide-react";
// import Navbar from "./Navbar";
// import { Link, useParams } from "react-router-dom";
// import { addcomment, getcommentdata, videodetials } from "@/Redux/Slices/VideoSlice";
// import { AppDispatch, RootState } from "@/Redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import time from "@/helper/time";


// interface Video {
//   _id: string;
//   thumbnail: string;
//   title: string;
//   views: number;
//   createdAt: string;
// }

// type CommentType = {
//   _id: string;
//   content: string;
//   createdAt: string;
//   details: {
//     avatar: string;
//     fullname: string;
//   };
//   likes: number;
// };



// export default function Playvideo() {


//   const [content, setContent] = useState(''); 
//   const handleChange = (e) => {
//     setContent(e.target.value);
//   };

//   const {id} = useParams();
//   const dispatch: AppDispatch = useDispatch();
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [videos, setVideos] = useState<Video[]>([]);

//   const allvideo = useSelector((state: RootState) => state.dash.data);
//   const videodetails = useSelector((state: RootState) => state.video.videodata);
//   const cannelstats = useSelector((state: RootState) => state.dash.channelstats);
//   const comments =  useSelector((state: RootState) => state.video.comment);
 


//   useEffect(() => {
//      if (allvideo && allvideo[0]?.vidoes) {
//       setVideos(allvideo[0].vidoes);
//       }
//        dispatch(videodetials(id));
//        dispatch(getcommentdata(id)); 
//   }, [id]);

//   const handleSubmit = async(e) => {
//     e.preventDefault(); 
//     if (content.trim()) { 
//       await dispatch(addcomment({id, content }));
//       setContent(''); 
//       dispatch(getcommentdata(id));
//     }
//   };

//   return (

//     <div>
//     <Navbar></Navbar>
//     <div className="container mt-8 mx-auto px-4 py-8 text-white">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-2/3">
//           <div className="aspect-video mb-4 relative">
//             <video 
//             src={videodetails.videoFile}
//             poster={videodetails.thumbnail}
//              controls className="w-full h-full rounded-lg shadow-lg" />
//           </div>
//           <h1 className="text-2xl font-bold mb-2">{videodetails.title}</h1>
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-4">
//               <Avatar>
//                 <AvatarImage  src={cannelstats[0]?.avatar}  />
//               </Avatar>
//               <div>
//                 <p className="font-semibold text-gray-200">{cannelstats[0]?.fullname}</p>
//                 <p className="text-sm text-gray-400">{cannelstats[0]?.subsInfo} Subscribers</p>
//               </div>
//               <Button
//                 variant={isSubscribed ? "outline" : "default"}
//                 className={`${
//                   isSubscribed ? "border-gray-400 text-gray-400" : "bg-blue-500 text-white"
//                 } hover:bg-blue-600`}
//                 onClick={() => setIsSubscribed(!isSubscribed)}
//               >
//                 {isSubscribed ? "Subscribed" : "Subscribe"}
//               </Button>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
//                 <ThumbsUp className="w-4 h-4 mr-2" />
//                 Like
//               </Button>
//               <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
//                 <ThumbsDown className="w-4 h-4 mr-2" />
//                 Dislike
//               </Button>
//               <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </Button>
//               <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white">
//                 <MoreHorizontal className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//           <div className="bg-gray-800 p-4 rounded-lg mb-8 shadow-lg">
//             <p className="font-semibold mb-2 text-gray-400">{videodetails.views} views • {time(videodetails.createdAt)}</p>
//             <p className="text-gray-300">{videodetails.description}</p>
//           </div>
// <div>
//   <h2 className="text-xl font-bold mb-4">{comments.length} Comments</h2>
//               <form onSubmit={handleSubmit} className="mb-4">
//                 <Input
//                   value={content}
//                   onChange={handleChange}
//                   placeholder="Add a comment..."
//                   className="bg-gray-700 text-white border-gray-600"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
//                   Add Comment
//                 </button>
//               </form>
  
//   {comments.map((comment: CommentType) => (
//     <div key={comment._id} className="flex gap-4 mb-4">
//       <Avatar>
//         <AvatarImage src={comment.details.avatar} alt={comment.details.fullname} />
//         <AvatarFallback>{comment.details.fullname[0]}</AvatarFallback>
//       </Avatar>
//       <div>
//         <p className="font-semibold text-gray-200">
//           {comment.details.fullname} 
//           <span className="font-normal text-sm ml-4 text-gray-500">
//              {time(comment.createdAt)}
//           </span>
//         </p>
//         <p className="text-gray-300">{comment.content}</p>
//         <div className="flex items-center gap-2 mt-2">
//           <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//             <ThumbsUp className="w-4 h-4 mr-2" />
//             {comment.likes}
//           </Button>
//           <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//             <ThumbsDown className="w-4 h-4" />
//           </Button>
//           <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Reply</Button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//         <div className="lg:w-1/3">
//   <h2 className="text-xl text-red-700 font-bold mb-4">Recommended Videos</h2>
//   {videos.map((video) => (
//     <div key={video._id} className="flex gap-2 mb-4 items-center"> {/* Add items-center to align items vertically */}
//       <Link to={`/video/${video._id}`} className="flex items-center"> {/* Add flex to link to keep items together */}
//         <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded-lg shadow-lg" />
//         <div className="ml-2"> {/* Add margin left to create some space */}
//           <h3 className="font-semibold text-gray-200">{video.title}</h3>
//           <p className="text-sm text-gray-400">{cannelstats[0]?.fullname}</p>
//           <p className="text-sm text-gray-400">{video.views ? `${video.views} views` : "0 views"} • {time(video.createdAt)}</p>
//         </div>
//       </Link>
//     </div>
//   ))}
// </div>
//       </div>
//     </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal } from "lucide-react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import { addcomment, getcommentdata, videodetials } from "@/Redux/Slices/VideoSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import time from "@/helper/time";

interface Video {
  _id: string;
  thumbnail: string;
  title: string;
  views: number;
  createdAt: string;
}

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

export default function Playvideo() {
  const [content, setContent] = useState('');
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  const allvideo = useSelector((state: RootState) => state.dash.data);
  const videodetails = useSelector((state: RootState) => state.video.videodata);
  const cannelstats = useSelector((state: RootState) => state.dash.channelstats);
  const comments = useSelector((state: RootState) => state.video.comment);

  useEffect(() => {
    if (allvideo && allvideo[0]?.vidoes) {
      setVideos(allvideo[0].vidoes);
    }
    dispatch(videodetials(id));
    dispatch(getcommentdata(id));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await dispatch(addcomment({ id, content }));
      setContent('');
      dispatch(getcommentdata(id));
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="container mt-8 mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="aspect-video mb-4 relative">
              <video
                src={videodetails.videoFile}
                poster={videodetails.thumbnail}
                controls className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">{videodetails.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={cannelstats[0]?.avatar} />
                  <AvatarFallback>{cannelstats[0]?.fullname[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-200">{cannelstats[0]?.fullname}</p>
                  <p className="text-sm text-gray-400">{cannelstats[0]?.subsInfo} Subscribers</p>
                </div>
                <Button
                  variant={isSubscribed ? "outline" : "default"}
                  className={`${
                    isSubscribed ? "border-gray-400 text-gray-400" : "bg-blue-500 text-white"
                  } hover:bg-blue-600 transition`}
                  onClick={() => setIsSubscribed(!isSubscribed)}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white transition">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white transition">
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  Dislike
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white transition">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400 border-gray-400 hover:text-white transition">
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
              <form onSubmit={handleSubmit} className="mb-4">
                <Input
                  value={content}
                  onChange={handleChange}
                  placeholder="Add a comment..."
                  className="bg-gray-700 text-white border-gray-600"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 transition">
                  Add Comment
                </button>
              </form>
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
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition">
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white transition">Reply</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-xl text-red-700 font-bold mb-4">Recommended Videos</h2>
            {videos.map((video) => (
              <div key={video._id} className="flex gap-2 mb-4 items-center">
                <Link to={`/video/${video._id}`} className="flex items-center">
                  <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded-lg shadow-lg" />
                  <div className="ml-2">
                    <h3 className="font-semibold text-gray-200">{video.title}</h3>
                    <p className="text-sm text-gray-400">{cannelstats[0]?.fullname}</p>
                    <p className="text-sm text-gray-400">{video.views ? `${video.views} views` : "0 views"} • {time(video.createdAt)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
