const Video = () => {
  return (
    <div className=" w-full h-full ">
      {/* Видео арын дэвсгэр болгох */}
      <video
        className="w-full h-[70vh] object-cover"
        autoPlay
        loop
        muted
        playsInline // Мобайл төхөөрөмж дээр автомат тоглуулахад ашигтай
      >
        <source src="/original.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
