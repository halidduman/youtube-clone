import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { categories } from "../constants";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setİsLoading] = useState(true);
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  console.log(selectedCategory);

  useEffect(() => {
    const type = selectedCategory.type;
    // secilen type i belirler
    if (type === "menu") return;

    setİsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";

    api
      .get(url)
      .then((res) => setVideos(res.data?.data))
      .catch((error) => setError(error.message))
      .finally(() => setİsLoading(false));
  }, [selectedCategory]);

  // console.log(videos);
  // console.log(error);

  return (
    <VideoContext.Provider
      value={{
        videos,
        error,
        isLoading,
        selectedCategory,
        setselectedCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
