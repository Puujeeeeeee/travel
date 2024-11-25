const Video = () => {
  return (
    <div className=" w-full h-full ">
      <video
        className="w-full h-[70vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >         
        <source src="/original.mp4" type="video/mp4" />
      </video>
    </div>
  ); 
};

export default Video;
