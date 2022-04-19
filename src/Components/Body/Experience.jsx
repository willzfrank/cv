import React from "react";
import "../Styles/Experience.css";
import Experiencedata from "../../data/Experiencedata.js";

function Experience() {
  return (
    <div className="Experience__container--box">
      <h2 style={{ fontSize: "35px" }}>Experience</h2>
      {Experiencedata.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <p className="Experience__container--text">{item.location}</p>
              <p className="Experience__container--text">{item.date}</p>
            </div>
            <ul>
              <li className="Experience__container--list">{item.exone}</li>
              <li className="Experience__container--list">{item.extwo}</li>
              <li className="Experience__container--list">{item.exthree}</li>
              <li className="Experience__container--list">{item.exfour}</li>
            </ul>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Experience;
