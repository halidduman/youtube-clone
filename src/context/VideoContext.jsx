import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setİsLoading] = useState(true);

  useEffect(() => {
    setİsLoading(true);

    api
      .get("/home")
      .then((res) => setVideos(res.data?.data))
      .catch((error) => setError(error.message))
      .finally(() => setİsLoading(false));
  }, []);

  // console.log(videos);
  // console.log(error);

  return (
    <VideoContext.Provider value={{ videos, error, isLoading }}>
      {children}
    </VideoContext.Provider>
  );
};
