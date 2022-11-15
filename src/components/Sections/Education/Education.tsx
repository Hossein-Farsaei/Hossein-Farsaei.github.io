import { education } from "../../../data/personalData";
import { TimeLine } from "../../Primitives/TimeLine/TimeLine";
import "./Education.css"

export const Education = () => {
  const certificates = education.map(certificate => {
    return {
      startDate: certificate.start,
    endDate: certificate.end,
    icons: certificate.icons,
    title: certificate.level + " - " + certificate.title,
    subTitle: certificate.producer,
    description: certificate.additionalData ?? ""
    }
  })

  return (
    <div className="education-container">
      <div className="title">
        <strong>Education</strong>
      </div>
      <div className="title-line" />
      <TimeLine items={certificates} />
    </div>
  );
}