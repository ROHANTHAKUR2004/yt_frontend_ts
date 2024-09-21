import { AppDispatch } from "@/Redux/store";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getallchannelvideos } from "@/Redux/Slices/Dashboard";

export default function VideoDashboard() {
  const dispatch: AppDispatch = useDispatch();

  // Select videos from Redux store
  const allvideo = useSelector(({ dash }) => dash.data);
  console.log("allthimg", allvideo)
  // Set video state based on fetched data
  const [videos, setVideos] = useState([]);
  console.log(videos)

  useEffect(() => {
    // Dispatch action to get all channel videos
    dispatch(getallchannelvideos());
  }, [dispatch]);

  // Set videos when `allvideo` updates
  useEffect(() => {
    if (allvideo && allvideo[0]?.vidoes) {
      setVideos(allvideo[0].vidoes); // Set the video array in state
    }
  }, [allvideo]);

  return (
    <div>
      <Navbar />
      <div className="container mt-8 mx-auto px-4 py-8">
        <h1 className="text-2xl text-red-700 font-bold mb-6">Recommended Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video._id} className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h2>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      <img
                        src={video.owner?.avatar || '/default-avatar.jpg'}
                        alt={`${video.owner?.name} avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-white">{video.owner?.name}</p>
                      <p className="text-xs text-white">{video.views} views • {new Date(video.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No videos available</p>
          )}
        </div>
      </div>
    </div>
  );
}


