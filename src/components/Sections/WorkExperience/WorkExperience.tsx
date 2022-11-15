import { workExperience } from "../../../data/personalData";
import { TimeLine } from "../../Primitives/TimeLine/TimeLine";
import "./WorkExperience.css";

export const WorkExperience = () => {
  const workItems = workExperience.map(work => {
    return {
      startDate: work.start,
    endDate: work.end,
    icons: work.icons,
    title: work.title,
    subTitle: work.company,
    description: work.description
    }
  })

  return (
    <div className="work-exp-container">
      <div className="title">
        <strong>WORK EXPERIENCE</strong>
      </div>
      <div className="title-line" />
      <TimeLine items={workItems} />
    </div>
  );
};