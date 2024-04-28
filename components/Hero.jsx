import React from "react";
import Image from "next/image";
import AnimatedLogo from "./AnimatedLogo";

const Hero = () => {
  return (
    <section className="flex px-4 justify-center xs:flex-col xs:gap-24 lg:flex-row bg-silver pb-20 mb-10">
      <div className="max-w-[850px] relative">
        <h1 className="text-secondary mb-4 mt-12">
          <span className="inline-block">C</span>
          {/* Use backticks for inline styles to avoid escaping quotes */}
          <span className="text-primary inline-block"><AnimatedLogo /></span>
        </h1>

        <p className="text-gray-700 mb-10">
          Cub Tech is a scientific club located within the men&#39;s residence of CUB1 at Bab Ezzouar. Our mission revolves around fostering a collaborative environment where knowledge sharing thrives. Through lectures, workshops, and collaborative projects, we aim to deepen understanding across various scientific disciplines, inspiring lifelong learning and a sense of camaraderie among our members.
        </p>

        {/* Fix button hover effect (assuming missing hover styles) */}
        <button className="py-4 lg:py-4 px-12 lg:px-16 text-primary cursor-not-allowed font-semibold rounded-lg bg-secondary hover:bg-secondary-hover transition-all outline-none">Join Us</button>
      </div>

      <div className="relative">
        <Image src={"/hero.png"} alt="hero" width={390} height={375} />
        <div className="absolute top-5 right-[-30px] animate-float">
          <Image src={"/think.png"} alt="think" width={80} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
