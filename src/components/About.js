import React from "react";
import resume from "../assets/deependra-resume.pdf";

const About = () => {
  return (
    <div className="container px-4 mx-auto my-16 max-w-screen-2xl md:px-20">
      <h1 className="mb-5 text-3xl font-bold text-center md:text-left">
        About
      </h1>
      <p className="">
        I'm a react web developer with 3+ years of experience in web
        development. I love creating responsive websites using React/Redux,
        JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. I enjoy creating
        website designs in Figma and converting UI designs into real websites.
        I've done multiple small projects to learn basics and now doing more
        complex projects.
      </p>
      <a href={resume} download className="py-5 my-4 font-bold">
        Download My Resume
      </a>
      <h3 className="">Languages and tools I use:</h3>

      <p className="flex py-6 justify-center">
        <img
          className="me-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="40"
          height="40"
        />
        <img
          className="m-2"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="vscode"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
          width="35"
          height="35"
        />
        <img
          className="m-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="sass"
          width="35"
          height="35"
        />
        <img
          className="ms-2"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="figma"
          width="30"
          height="35"
        />
      </p>
    </div>
  );
};

export default About;
