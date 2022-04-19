import React from "react";
import Skillsdata from "../../data/Skillsdata.js";
import "../Styles/Experience.css";

function Skills_and_others() {
  return (
    <div className="Skills__container--box">
      {Skillsdata.map((item) => {
        return (
          <div key={item.id} className="objectname">
            <h2>{item.title}</h2>
            <p className="Experience__container--text">{item.listOne}</p>
            <p className="Experience__container--text">{item.listTwo}</p>
            <p className="Experience__container--text">{item.listThree}</p>
            <p className="Experience__container--text">{item.listFour}</p>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Skills_and_others;
