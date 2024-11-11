import "./index.css";
import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Cta from "./components/sections/Cta";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Benefits />
        <Cta />
      </main>
    </>
  );
}

export default App;
