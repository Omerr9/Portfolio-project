import React from "react";
import "./Hero.css";
import Header from "./Header";
import HeroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <div className="main-body">
      <Header />
      <div className="content">
        <img className="heroImg" src={HeroImg} alt="Hero Img" />
        <h1>Hello, I'm Omer.</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Transforming complex ideas into seamless digital experiences, I bridge
          the gap between creativity and technology. As a full-stack developer,
          I craft robust, scalable solutions from the ground up, bringing both
          the front and back end to life with precision and passion.
        </p>
        <div className="content-btns">
            <button className="btn1">Get in Touch</button>
            <button className="btn2">View Resume</button>
        </div>
      </div>
    </div>
  );
}
