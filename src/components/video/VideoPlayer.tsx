type PropTypes = {
  videoUrl: string;
};

function VideoPlayer({videoUrl}:PropTypes) {
  return (
    <div className="col-start-1 xl:col-end-3 col-end-4  w-full xl:mt-0   ">
      <video
        src={videoUrl}
        controls
        className="w-full h-full"
        width={100}
      />
    </div>
  );
}

export default VideoPlayer;
