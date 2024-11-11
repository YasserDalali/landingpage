import React from "react";
import phone from "../../images/667ac579ffa8ca74d6093371_mockup-profile.png";
import phonePeek from "../../images/667e7ff64aba18c8b49167a1_cta-img-mobile.png";
export default function Cta() {
  return (
    <div className="p-whitespacex md:my-whitespacey w-full md:grid md:grid-cols-2 relative">
      <section className="flex flex-col self-center items-center justify-center p-14 md:h-[75%] md:pe-[40%] bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-t-3xl md:rounded-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-start">
          Get connected in 72 seconds
        </h1>

        <p className="my-4 w-full bg-blue-50 p-3 md:text-xl font-medium rounded-3xl">
          <span className="font-semibold bg-white px-2 rounded-full mr-2">
            1
          </span>
          Sign up
        </p>
        <p className="my-4 w-full bg-blue-50 p-3 md:text-xl font-medium rounded-3xl">
          <span className="font-semibold bg-white px-2 rounded-full mr-2">
            2
          </span>
          Install
        </p>
        <p className="my-4 w-full bg-blue-50 p-3 md:text-xl font-medium rounded-3xl">
          <span className="font-semibold bg-white px-2 rounded-full mr-2">
            3
          </span>
          Use
        </p>
      </section>

      <img
        src={phone}
        alt=""
        className="hidden md:block absolute top-0 left-[40%] z-10 -rotate-6 w-1/5"
      />

      <section className="pt-14 md:ps-[20%] relative text-white bg-gradient-to-tr from-primary to-black rounded-3xl -translate-y-4 md:translate-y-0">
        <h3 className="text-4xl md:text-6xl font-semibold text-center md:text-end md:pe-20">
          One plan,
          <br /> one price.
        </h3>
        <h2 className="text-6xl md:text-8xl font-semibold text-center md:text-end  md:pe-20 my-7">
          $69
        </h2>
        <img src={phonePeek} className="w-[80%] mx-auto bottom-0" alt="" />
      </section>
    </div>
  );
}
