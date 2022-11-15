import { useEffect, useState } from "react";
import "./TimeLine.css";

export const TimeLine = (props: {
  items: {
    startDate: string;
    endDate: string;
    icons?: JSX.Element[];
    title: string;
    subTitle?: string | JSX.Element;
    description?: string | JSX.Element;
  }[];
}) => {
  const triggerBottom = window.innerHeight * 0.95;

  const [scroll, setScrolling] = useState<number>(0);

  document.querySelectorAll(".App")[0].addEventListener("scroll", () => {
    setScrolling(scroll + 1);
  });

  useEffect(() => {
    const items = document.querySelectorAll(".time-line-item-container");
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom && itemTop > -100) {
        item
          .querySelectorAll(".left-timeline")[0]
          .classList.add("timeline-show");
        item
          .querySelectorAll(".right-timeline")[0]
          .classList.add("timeline-show");
      } else {
        item
          .querySelectorAll(".left-timeline")[0]
          .classList.remove("timeline-show");
        item
          .querySelectorAll(".right-timeline")[0]
          .classList.remove("timeline-show");
      }
    });
  }, [scroll, triggerBottom]);

  return (
    <div className="timeline-container">
      {props.items.map((item, indx) => {
        return (
          <div key={indx} className="time-line-item-container">
            <div className="left-timeline flex flex-column">
              <div>{item.startDate}</div>
              <div>{item.endDate}</div>
              <div className="left-time-line-icons flex flex-wrap">
                {item.icons!.map((icon) => {
                  return icon;
                })}
              </div>
            </div>

            <div className={"right-timeline"}>
              <strong className="timeline-title">{item.title}</strong>
              <div className="timeline-sub-title">
                <b>{item.subTitle}</b>
              </div>
              <div className="timeline-content">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
