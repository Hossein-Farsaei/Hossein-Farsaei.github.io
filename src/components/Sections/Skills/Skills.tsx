import { useState, useEffect } from "react";
import { skills } from "../../../data/personalData";
import "./Skills.css";

export const Skills = () => {

  const triggerBottom = window.innerHeight * 0.9;

  const [scroll, setScrolling] = useState<number>(0);

  document.querySelectorAll(".App")[0]?.addEventListener("scroll", () => {
    setScrolling(scroll + 1);
  });

  useEffect(() => {
    const items = document.querySelectorAll(".skill-row") ?? [];
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;
      if (itemTop < triggerBottom && itemBottom > 50) {
        item
          .querySelectorAll(".skill-progress-bar-value")[0]
          .classList.add("skill-bar-show");
      } else {
        item
          .querySelectorAll(".skill-progress-bar-value")[0]
          .classList.remove("skill-bar-show");
      }
    });
  }, [scroll, triggerBottom]);

  
  return (
    <div className="skills-container">
      <div className="title">
        <strong>Skills</strong>
      </div>
      <div className="title-line" />
      <div className="skills-info-container">
        {skills.map((skill, indx) => {
          return <div key={indx} className="skill-row flex flex-align-center">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-title">{skill.title}</span>
            <div className="skill-progress-bar-container">
              <div className="skill-progress-bar-value" style={{width: skill.knowledge + "%"}}></div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};
