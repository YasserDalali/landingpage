import React from "react";
import Card from "../elements/Card";

export default function Benefits() {
  return (
    <article className="md:px-whitespacex py-whitespacey">
      <h2 className="text-center text-4xl font-serif mb-7">
        A US number, <br></br> with peace of mind.
      </h2>
      <p className="text-center text-accent mb-7">Get started in 72 Seconds. <br /> Activate from anywhere worldwide.</p>

      <Card
        title="Fast"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-indigo-100"
      />
      <Card
        title="Easy"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-blue-100"
      />
      <Card
        title="Safe"
        desc="lorem impsum dolor sit amet consectetur adipisicing elit"
        color="bg-pink-100"
      />
    </article>
  );
}
