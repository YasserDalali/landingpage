import React from "react";
import phonePeek from '../../images/667e7ff64aba18c8b49167a1_cta-img-mobile.png'
export default function Cta() {
  return (
    <article className="p-whitespace motion-preset-shrink ">
      <section className="p-14 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-t-xl">
        <h1 className="text-4xl font-serif text-center">Get connected in 72 seconds</h1>

        <p className="my-4 bg-blue-50 p-3 rounded-lg">
          <span className="font-semibold bg-white px-2  rounded-full mr-2">
            1
          </span>{" "}
          Sign up
        </p>
        <p className="my-4 bg-blue-50 p-3 rounded-lg">
          <span className="font-semibold bg-white px-2  rounded-full mr-2">
            1
          </span>{" "}
          Install
        </p>
        <p className="my-4 bg-blue-50 p-3 rounded-lg">
          <span className="font-semibold bg-white px-2  rounded-full mr-2">
            1
          </span>{" "}
          Use
        </p>
      </section>


      <section className="pt-14 relative text-white bg-gradient-to-tr from-primary to-black rounded-xl -translate-y-4">
        <h3 className="text-4xl font-serif text-center">One plan, <br /> one price.</h3>
        <h2 className="text-6xl font-semibold text-center my-7">$69</h2>
        <img src={phonePeek} className=" w-[80%] mx-auto bottom-0" alt="" />

      </section>
    </article>
  );
}
