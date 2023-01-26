import React from "react";
import Links from "./Links.js";

function About(props) {
  const bioInfo = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioInfo && bioInfo !== "" && 
      <p>{props.bio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
    </div>
  );
}

export default About;
