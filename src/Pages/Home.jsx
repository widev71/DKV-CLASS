import React, { useEffect } from 'react';
import BoxClassIg from "../components/BoxClassIg";
import BoxTextAnonim from "../components/BoxTextAnonim";
import Navbar from "../components/Navbar";

const backgrounds = [
  "url('/Images/background1.jpg')",
  "url('/Images/background2.jpg')",
  "url('/Images/background3.jpg')"
];

let currentIndex = 0;

function changeBackground() {
  const homeElement = document.getElementById('Home');
  if (homeElement) {
    homeElement.style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }
}

const Home = () => {
  useEffect(() => {
    // Initial background set
    changeBackground();
    // Change background every minute (6000 milliseconds)
    const intervalId = setInterval(changeBackground, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white px-[10%]" id="Home">
      <Navbar />
      <div className="lg:hidden">
        <div className="font-bold text-5xl text-center py-20 ">XII DKV</div>
        <div
          className="border-2 flex justify-between px-10 text-4xl font-bold py-2 relative"
          id="TotalSiswa">
          <div id="AngkaGradientBlue" className="flex items-center justify-center ">
            17
          </div>
          <div className="">
            <span id="AngkaGradientBlue" className="text-5xl">
              1
            </span>
            <span id="AngkaGradientPink" className="text-5xl">
              9
            </span>
          </div>
          <div id="AngkaGradientPink" className="flex items-center justify-center">
            02
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5">
          <div className="grid gap-2 md:gap-0 md:grid-cols-1">
            <BoxClassIg />
          </div>
          <div className="grid gap-2 md:gap-0 md:grid-cols-1">
            <BoxTextAnonim />
          </div>
        </div>
      </div>

      {/* Dekstop */}
      <div className="hidden lg:block">
        <div className="flex justify-center items-center flex-col h-[100vh]">
          <h5 className="text-[1.4rem] font-semibold">Hi, Everyone!</h5>
          <h1 className="text-7xl font-extrabold" id="Glow">
            WELCOME
          </h1>
          <h6 className="text-sm" style={{ letterSpacing: "5px" }}>
            TO XII DKV
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
