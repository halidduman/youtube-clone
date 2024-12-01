const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <div>
      {/* resim alanı */}
      <div>
        <img
          src={
            video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt=""
        />
      </div>
      {/* video alt detar */}
      <div></div>
    </div>
  );
};

export default VideoCard;
