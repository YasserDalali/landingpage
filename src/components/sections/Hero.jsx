import phoneimgA from "../../images/667e85887779e31a7bb1ad72_mockup-home.webp";
import phoneimgB from "../../images/667e858db6f503ce91e50e64_mockup-squad.webp";

export default function Hero() {
  const svgs = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
        clipRule="evenodd"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
        clipRule="evenodd"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
        clipRule="evenodd"
      />
    </svg>,
  ];
  const perks = [
    { svg: svgs[0], text: "Unlimited talk and text" },
    { svg: svgs[1], text: "Unlimited data" },
    { svg: svgs[2], text: "Cancel anytime" },
  ];

  return (
    <div className="flex flex-col items-center p-whitespacex ">
      <h1 className="text-center text-5xl font-serif mb-7 motion-preset-focus ">
        One global plan. <br /> No hassle.
      </h1>
      <p className="text-center text-accent mb-7 text-lg ">
        Enjoy unlimited global service for $69/mo.<br /> No roaming fees, or
        headaches.
      </p>
      <div className="relative min-h-fit p-whitespace w-full">
        <div className="w-full h-full bg-indigo-300 rounded-full blur-3xl absolute scale-75"></div>
        <img
  src={phoneimgA}
  alt="Phone mockup"
  className="w-[50%] -rotate-12 inline-block 
  motion-preset-slide-right motion-delay-75"
/>


        <img
          src={phoneimgB}
          alt="Phone mockup"
          className="w-[50%] rotate-12 inline-block motion-preset-slide-left "
        />
      </div>

      <div className="p-whitespace text-xl flex flex-col gap-2">
        {perks.map((perk, index) => {
          return (
            <div
              key={index}
              className={`font-serif flex items-center gap-2 motion-preset-slide-up ${
                index === 0
                  ? "motion-delay-200"
                  : index === 1
                  ? "motion-delay-300"
                  : "motion-delay-100"
              }`}
            >
              <span className="inline-block">{perk.svg}</span>
              {perk.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
