import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <video autoPlay loop muted>
          <source src="Staircase.mp4" />
        </video>
      </div>
      {/* <div>
        <video autoPlay loop muted>
          <source src="brown slides.mp4" />
        </video>
      </div> */}
      <div className="flex gap-2">
        <img className="max-w-[50%]" src="pexelslides.jpg" alt="" />
        <div className="flex flex-col gap-2">
          <img src="Josittingdown.jpg" />
          <img src="purpleleather.jpg" />
        </div>
      </div>
      <div>
        <img src="pexelbrown.jpg" alt="" />
      </div>
      <div className="flex gap-2">
        <img className="max-w-[50%]" src="sitting.jpg" alt="" />

        <div className="max-w-[50%] flex flex-col gap-2">
          <img src="brown2.jpg" alt="" />
          <img src="DSC_8085.jpg" alt="" />
        </div>
      </div>
      <div>
        <img src="pexelcotton.jpg" alt="" />
      </div>
      <div className="flex gap-2">
        <img className="max-w-[50%]" src="standing.jpg" alt="" />

        <div className="max-w-[50%] flex flex-col gap-2">
          <img src="whiteflip.jpg" alt="" />
          <img src="DSC_8070.jpg" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
