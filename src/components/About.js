import React from 'react'
// import { FaBootstrap } from 'react-icons/fa'
import resume from '../assets/deependra-resume.pdf';
import "./About.css";

const About = () => {
  return (
    <div className='about_container'>
      <p className="context">
        I'm a react web developer with 2+ years of experience in web development. I love creating responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, and Sass/Scss. 
        I enjoy creating website designs in Figma and converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects. 
        {/* Apart form this, i'm learning flutter for my final year project (FYP) */}
      </p>
      <a href={resume} download className="btn">Download My Resume</a>
      <h3 className=''>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="35" height="35"/>
        {/* <FaBootstrap className='m-2' style={{width:"35", height:"35", color: '#7a14f5'}}/> */}
        <img className='ms-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" width="30" height="35"/>
      </p>
    </div>
  )
}

export default About