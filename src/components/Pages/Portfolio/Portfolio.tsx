import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { contactItems } from "../../../data/StaticData";
import { Loader } from "../../Primitives/Loader/Loader";
import "./Portfolio.css";

export const Portfolio = (props: {updatePage: (pageId: number) => void;}) => {
  const [avatarImg, setAvatarImg] = useState<JSX.Element>(<Loader text="Loading Image" fontSize="20pt" />);
  useEffect(()=>{
    setAvatarImg(<img alt="avatar" src="avatar.png" className="portfolio-avatar" />)
  }, [])

  return (
    <div className="portfolio-container flex flex-align-center">
      <section className="portfolio-info flex flex-column flex-justify-center">
        <p className="portfolio-hello portfolio-info-item">Hello, I am</p>
        <p className="portfolio-name portfolio-info-item">Hossein</p>
        <p className="portfolio-position portfolio-info-item">A Front-End Developer</p>
        <section className="portfolio-contacts flex flex-justify-space-evenly">
          {contactItems.map((contactItem, index) => {
            return (
              <a
                href={contactItem.href}
                className="glass-icon flex flex-justify-center flex-align-center"
              >
                <div className="portfolio-contact-icon">{contactItem.icon}</div>
              </a>
            );
          })}
        </section>
      </section>
      <section className="portfolio-img-container flex flex-column flex-align-center flex-justify-center">
      <div className="portfolio-next-page flex flex-align-center" onClick={()=>{
        props.updatePage(2);
      }}>
          <span>KNOW MORE ABOUT ME</span>{" "}
          <FaArrowRight className="portfolio-next-page-arrow flex" />
        </div>
        {avatarImg}
        
      </section>
    </div>
  );
};
