import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
const App = () => {
  return (
    <div className="w-full h-screen  text-slate-200">
      <Nav />
      <LandingPage />
    </div>
  );
};

export default App;
