"use client";
import { TypeAnimation } from "react-type-animation";

const LogoAnimate = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "ub Tech",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          // Same substring at the start will only be typed out once, initially
          "",
          1000 // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};
export default LogoAnimate;
