import React from "react";
import Experience from "./Experience";
import Skills from "./Skills_and_others";
import "../Styles/Body_section.css";

function Body_section() {
  return (
    <div className="body__container--box">
      <Experience />
      <Skills />
    </div>
  );
}

export default Body_section;
