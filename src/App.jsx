import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Marqueee from "./components/Marqueee";
const App = () => {
  return (
    <div className="w-full min-h-screen  text-slate-200 bg-zinc-900">
      <Nav />
      <LandingPage />
      <Marqueee />
    </div>
  );
};

export default App;
