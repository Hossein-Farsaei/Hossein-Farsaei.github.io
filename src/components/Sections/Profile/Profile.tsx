import "./Profile.css";
import { ProfileInfo } from "../../../data/personalData";

export const Profile = (props: {updatePage: (pageId: number) => void;}) => {
  return (
    <section className="profile-container flex">
      <div className="about-me">
        <div className="basic-info-container flex flex-jusitify-center flex-align-center">
          <div className="basic-info-content">
            <div className="name">
              <strong>Hossein Farsaei</strong>
            </div>
            <div className="position">Front-End Developer</div>
          </div>
          <div className="basic-info-img">
            <img className="avatar-img" alt="avatar" src="avatar-2.png" />
            <img
              className="avatar-img noise-img"
              alt="avatar"
              src="avatar-3.png"
            />
          </div>
        </div>
        <div className="about-title-container">
          <div className="title">
            <strong>ABOUT ME</strong>
          </div>
          <div className="title-line" />
          <div className="about-me-introduction">
            {ProfileInfo}
            <p style={{ cursor: "pointer", width: "fit-content", color: "darkblue" }}
            onClick={()=>props.updatePage(3)}
            >Check my project profiles {">>"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
