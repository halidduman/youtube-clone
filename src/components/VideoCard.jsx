import millify from "millify";
import { useState } from "react";

const VideoCard = ({ video }) => {
  console.log(video);
  const [isHover, serIsHover] = useState(true);
  return (
    <div className="cursor-pointer">
      {/* Resim alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="image"
        />
      </div>
      {/* Video alt detay */}
      <div className="flex mt-5">
        {/* Sol kanal logosu */}
        <img
          className="w-14 h-14 rounded-full"
          src={video?.channelThumbnail && video?.channelThumbnail[0].url}
          alt="logo"
        />

        <div className="ml-4 flex flex-col line-clamp-2">
          {/* Baslık */}
          <h4 className="font-bold text-lg line-clamp-3">{video?.title}</h4>
          {/* Kanal adi */}
          <p className="text-gray-500 ">{video?.channelTitle}</p>
          {/* izlenme ve zaman bilgisi */}
          <div className="flex text-sm text-gray-400 mt-2">
            <p className="mr-4">{millify(video?.viewCount)} Görüntülenme</p>
            <p>{video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
