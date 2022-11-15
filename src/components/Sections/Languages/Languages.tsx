import { useEffect, useState } from "react";
import { languages } from "../../../data/personalData";
import "./Languages.css";

export const Languages = () => {
  const triggerBottom = window.innerHeight * 0.9;

  const [scroll, setScrolling] = useState<number>(0);

  document.querySelectorAll(".App")[0]?.addEventListener("scroll", () => {
    setScrolling(scroll + 1);
  });

  useEffect(() => {
    const items = document.querySelectorAll(".language-row") ?? [];
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;
      if (itemTop < triggerBottom && itemBottom > 50) {
        item.querySelectorAll(".language").forEach((lang) => {
          lang.classList.add("language-show");
        });
        document.querySelectorAll(".piechart").forEach((pie) => {
          pie.classList.add("pie");
        });
        document.querySelectorAll(".piechart").forEach((pie) => {
          pie.classList.add("animate");
        });
      } else {
        item.querySelectorAll(".language").forEach((lang) => {
          lang.classList.remove("language-show");
        });
        document.querySelectorAll(".piechart").forEach((pie) => {
          pie.classList.remove("pie");
        });
        document.querySelectorAll(".piechart").forEach((pie) => {
          pie.classList.remove("animate");
        });
      }
    });
  }, [scroll, triggerBottom]);

  return (
    <div className="languages-container">
      <div className="title">
        <strong>Languages</strong>
      </div>
      <div className="title-line" />
      <div className="language-row flex flex-align-center flex-justify-center">
        {languages.map((language) => {
          const styleValue = { "--p": language.level } as React.CSSProperties;
          return (
            <div key={language.level} className="language flex flex-column flex-align-center flex-justify-center">
              <div className="piechart" style={styleValue}>
                {language.levelTitle}
              </div>
              <p>{language.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**<div className="language-container"></div>

        <div className="pie" style={style}>
          A1
        </div>
        <div className="pie animate"> 80%</div> */
