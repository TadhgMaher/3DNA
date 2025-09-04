import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 font-playfair">
          3DNA Design
        </h1>
      </div>
    </section>
  );
};

export default Hero;
