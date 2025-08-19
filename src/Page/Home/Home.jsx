import React from "react";
import "./Home.css";
import Navbar from "../../Components/NavBar/Navbar";
import c from "../Home/../../assets/c.jpg";

function Home() {
  console.log("Home");
  return (
    <>
      <div className="home-box B">
        <Navbar></Navbar>
        <div className="home IB">
          <div className="title IB">
            <h1>Hello, Francesco here</h1>
          </div>
          <div className="img">
            <img src={c} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
