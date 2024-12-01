import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/VideoContext";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { error, isLoading, videos } = useContext(VideoContext);
  console.log(error);
  console.log(isLoading);
  console.log(videos);

  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay />
        ) : (
          videos?.map(
            (item) => item.type === "video" && <VideoCard key={item.videoId} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
