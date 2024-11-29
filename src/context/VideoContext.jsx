import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("/home").then((res) => console.log(res));
  }, []);

  return <VideoContext.Provider value={{}}>{children}</VideoContext.Provider>;
};
