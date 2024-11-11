
import React from "react";
import Card from "../elements/Card";


export default function Benefits({ref}) {



  return (
    <div  className={`w-full md:px-whitespacex py-whitespacey`}>
      <h2 className="text-center text-4xl md:text-7xl font-semibold mb-7 md:mb-14">
        A US number, <br></br> with peace of mind.
      </h2>
      <p className="text-center md:text-2xl mb-7 md:mb-14 text-accent ">Get started in 72 Seconds. <br /> Activate from anywhere worldwide.</p>
<div className="flex flex-col md:flex-row md:justify-around ">
      <Card
        title="Fast"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-violet-100"
      />
      <Card
        title="Easy"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-blue-100"
      />
      <Card
        title="Safe"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-indigo-100"
      />
      </div>
    </div>
  );
}
