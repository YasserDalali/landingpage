import React from "react";
import Marquee from "react-fast-marquee";

export default function Marqueeribbons() {


  return (
    <div className="relative min-h-44 my-whitespacey text-2xl font-bold md:text-4xl">
        <div className="rotate-6 scale-105 md:scale-125 ">
      <Marquee  speed={100} autoFill={true}
        pauseOnHover={true}
        direction="right"
        className="absolute bottom-0 w-full  blur-sm -z-10 bg-primary text-white p-12"
      >
        {"  "} FREE SHIPPING IN THE US * {"  "}
      </Marquee>
      </div>

      <div className="-rotate-6 scale-105 md:scale-125">
 
      <Marquee speed={100} autoFill={true}
        pauseOnHover={true}
        className=" absolute bottom-0 w-full bg-indigo-200 z-10 text-white p-12"
      >
                {" * "}FREE SHIPPING IN THE US{"  "}
      </Marquee>
      </div>
    </div>
  );
}
