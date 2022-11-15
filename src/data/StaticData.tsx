import IMenuItems from "../interfaces/IMenuItems";
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaHashtag,
  FaLinkedinIn,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

export const MenuItems: IMenuItems[] = [
  {
    id: 1,
    page: "portfolio",
    title: "Portfolio",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    page: "aboutMe",
    title: "About Me",
    icon: <FaUser />,
  },
  {
    id: 3,
    page: "projectProfiles",
    title: "Project Profiles",
    icon: <FaHashtag />,
  },
];
/* {
    id: 4,
    page: "miniProjects",
    title: "Mini Projects",
    icon: <FaHashtag />
  }, */

export const contactItems: {
  item: string;
  title: string;
  href: string;
  icon: JSX.Element;
}[] = [
  {
    item: "E-Mail",
    title: "hossein.farsaei01@gmail.com",
    href: "mailto:hossein.farsaei01@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    item: "Linkedin",
    title: "hossein-farsaei",
    href: "https://www.linkedin.com/in/hossein-farsaei",
    icon: <FaLinkedinIn />,
  },
  {
    item: "GitHub",
    title: "h_farsaei",
    href: "https://bitbucket.org/h_farsaei/mini-tutorial-projects/src/main/",
    icon: <FaGithub />,
  },
  {
    item: "Instagram",
    title: "hossein_farsaei",
    href: "https://instagram.com/hossein_farsaei",
    icon: <FaInstagram />,
  },
  {
    item: "Twitter",
    title: "Ho3inF",
    href: "https://twitter.com/Ho3inF",
    icon: <FaTwitter />,
  },
];


