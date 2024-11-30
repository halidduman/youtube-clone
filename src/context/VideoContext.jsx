import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("/home").then((res) => setVideos(res.data?.data));
  }, []);

  console.log(videos);

  return <VideoContext.Provider value={{}}>{children}</VideoContext.Provider>;
};
