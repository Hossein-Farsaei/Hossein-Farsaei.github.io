import { certificates } from "../../../data/personalData";
import { TimeLine } from "../../Primitives/TimeLine/TimeLine";
import "./Certificates.css";

export const Certificates = () => {
  const certificateItems = certificates.map(cert => {
    return {
      startDate: cert.start,
    endDate: cert.end,
    icons: cert.icons,
    title: cert.title,
    subTitle: cert.producer,
    description: cert.additionalData ?? ""
    }
  })

  return (
    <div className="certificates-container">
      <div className="title">
        <strong>CERTIFICATES</strong>
      </div>
      <div className="title-line" />
      <div className="certificates"><TimeLine items={certificateItems} /></div>
    </div>
  );
}