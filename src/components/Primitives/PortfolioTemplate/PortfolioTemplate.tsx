//import { useState, useLayoutEffect } from "react";
import { AboutMe } from "../../Pages/AboutMe/Aboutme";
import { Portfolio } from "../../Pages/Portfolio/Portfolio";
import { ProjectProfiles } from "../../Pages/ProjectProfiles/ProjectProfiles";

/*function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}*/

export const PortfolioTemplate = (props: {
  pageId: number;
  updatePage: (pageId: number) => void;
}) => {
  //const width = useWindowSize();
  //return <span>Window size: {width}</span>;
  const template: JSX.Element =
    props.pageId === 1 ? (
      <Portfolio updatePage={(pageId: number) => props.updatePage(pageId)} />
    ) : props.pageId === 2 ? (
      <AboutMe updatePage={(pageId: number) => props.updatePage(pageId)} />
    ) : (
      <ProjectProfiles />
    );

  return <>{template}</>;
};


