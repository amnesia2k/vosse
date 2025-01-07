import { video } from "../assets";

const Hero = () => {
  return (
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
        <h1 className="text-[#c5a880] text-3xl md:text-6xl font-bold md:mb-4">
          Vossé
        </h1>
        <p className="text-[20px] md:text-2xl">
          Where elegance meets innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;
