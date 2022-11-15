import { tuterials } from "../../../data/personalData";
import { TimeLine } from "../../Primitives/TimeLine/TimeLine";
import "./Tuterials.css";

export const Tuterials = () => {
  const items = tuterials.map((tuterial) => {
    return {
      startDate: tuterial.start,
      endDate: tuterial.end,
      icons: tuterial.icons,
      title: tuterial.title,
      subTitle: tuterial.producer,
      description: tuterial.additionalData ?? "",
    };
  });

  return (
    <div className="about-me-section Tuterials-container">
      <div className="title">
        <strong>TUTERIALS</strong>
      </div>
      <div className="title-line" />
      <TimeLine items={items} />
    </div>
  );
};
