import { Certificates } from "../../Sections/Certificates/Certificates";
import { Contacts } from "../../Sections/Contacts/Contacts";
import { Education } from "../../Sections/Education/Education";
import { Languages } from "../../Sections/Languages/Languages";
import { Profile } from "../../Sections/Profile/Profile";
import { Skills } from "../../Sections/Skills/Skills";
//import { Tuterials } from "../../Sections/Tuterials/Tuterials";
import { WorkExperience } from "../../Sections/WorkExperience/WorkExperience";
import "./AboutMe.css";

export const AboutMe = (props: { updatePage: (pageId: number) => void; }) => {
  return (
    <div className="about-me-container flex flex-column">
      <Profile updatePage={(pageId: number) => props.updatePage(pageId)}/>
      <WorkExperience />
      <Skills />
      <Education />
      <Languages />
      <Certificates />
      
      <Contacts />
    </div>
  );
};

/**
      <Tuterials />
       */