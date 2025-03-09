import React, { useEffect, useState } from "react";

const EyeAnimate = () => {
  const [rotate, setRotate] = useState(0);
  const [irisMove, setIrisMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      setIrisMove({
        x: deltaX * 0.08,
        y: deltaY * 0.08,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="animate w-full h-screen overflow-hidden">
      <div className="relative w-full bg-cover bg-center h-full bg-[url('/bgimage2.jpg')]">
        <div className="absolute gap-12 top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center relative">
            <div
              style={{
                transform: `translate(${irisMove.x}px, ${irisMove.y}px)`,
              }}
              className="w-[9vw] h-[9vw] bg-black rounded-full flex items-center justify-center relative transition-all duration-75"
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-5 absolute top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center relative">
            <div
              style={{
                transform: `translate(${irisMove.x}px, ${irisMove.y}px)`,
              }}
              className="w-[9vw] h-[9vw] bg-black rounded-full flex items-center justify-center relative transition-all duration-75"
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-5 absolute top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeAnimate;
