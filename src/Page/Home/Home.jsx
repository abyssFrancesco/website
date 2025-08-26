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
          <div className="box-d B">
            <div className="img IB">
              <img src={c} alt="" />
            </div>
            <div className="desc IB">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                beatae ratione eum cum adipisci nisi architecto autem quod
                necessitatibus, ipsum illum ab voluptatum, sint explicabo, unde
                consequuntur blanditiis praesentium. Deserunt ea ullam enim ex
                excepturi neque facere ad repellat at, pariatur, a maiores hic,
                doloribus omnis corrupti praesentium. Recusandae, delectus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
