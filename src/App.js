import "./index.css";
import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Cta from "./components/sections/Cta";
import { useInView } from "react-intersection-observer";
import Marquee from "./components/elements/Marquee";

function App() {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div className="font-minor overflow-hidden">
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />


        <article
          ref={benefitsRef}
          className={`md:px-44 ${
            benefitsInView ? "motion-preset-slide-up" : "opacity-0"
          }`}
        >
          <Benefits />
        </article>


        <article
          ref={ctaRef}
          className={`md:px-44 ${
            ctaInView ? "motion-preset-shrink" : "opacity-0"
          }`}
        >
          <Cta />
        </article>


        <article>
            <Marquee />
        </article>
      </main>
    </div>
  );
}

export default App;
