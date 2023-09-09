import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home_container">
      <div className="home_content">
        <div className="left_content">
          <h1 className="text">Hi, I'm Deependra</h1>
          <h1 className="text">Frontend Developer.</h1>
          <p className="profession">
            Frontend Development / ReactJS / Web Designing
          </p>
          <NavLink to="/projects">
            <button className="btn">My Work</button>
          </NavLink>
        </div>

        <div>
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json"
            className="player"
            loop
            autoplay
            style={{ maxHeight: "700px", maxWidth: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
