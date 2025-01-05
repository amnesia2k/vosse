import { video } from "../assets";

const Hero = () => {
  return (
    // <section
    //   id="home"
    //   className="relative h-screen flex items-center justify-center overflow-hidden"
    // >
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute w-auto min-w-full min-h-full max-w-none"
    //   >
    //     <source src="/path-to-your-video.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    //   <div className="relative z-10 text-center text-white">
    //     <h1 className="text-6xl font-bold mb-4">Vosse</h1>
    //     <p className="text-2xl">Where elegance meets innovation</p>
    //   </div>
    // </section>
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Vossé</h1>
        <p className="text-2xl">Where elegance meets innovation</p>
      </div>
    </section>
  );
};

export default Hero;
