import React from "react";
import "./Navbar.css";

function Navbar() {
  console.log("Navbar");
  return (
    <>
      <div className="navbar-box B">
        <div className="navbar IB">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
