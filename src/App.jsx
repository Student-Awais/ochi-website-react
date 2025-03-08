import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Marqueee from "./components/Marqueee";
import About from "./components/About";
import Animate from "./components/Animate";
const App = () => {
  return (
    <div className="w-full min-h-screen  text-slate-200 bg-zinc-900">
      <Nav />
      <LandingPage />
      <Marqueee />
      <About />
      <Animate />
    </div>
  );
};

export default App;
