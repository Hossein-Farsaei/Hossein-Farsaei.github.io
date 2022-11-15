import { useState, useEffect } from "react";
import { projects } from "../../../data/personalData";

import "./ProjectProfiles.css";

export const ProjectProfiles = () => {
  const triggerBottom = window.innerHeight;
  const [scroll, setScrolling] = useState<number>(0);

  document.querySelectorAll(".App")[0].addEventListener("scroll", () => {
    setScrolling(scroll + 1);
  });

  useEffect(() => {
    const items = document.querySelectorAll(".project-profile-row-container");
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;
      if (itemTop < triggerBottom - 175 && itemBottom > 125) {
        item
          .querySelectorAll(".project-profile-row")[0]
          .classList.add("project-profile-visible");
        item
          .querySelectorAll(".project-profile-row")[0]
          .classList.remove("project-profile-semi-visible");
      } else if (itemTop < triggerBottom && itemBottom > 0) {
        item
          .querySelectorAll(".project-profile-row")[0]
          .classList.add("project-profile-semi-visible");
      } else {
        item
          .querySelectorAll(".project-profile-row")[0]
          .classList.remove("project-profile-visible");
        item
          .querySelectorAll(".project-profile-row")[0]
          .classList.remove("project-profile-semi-visible");
      }
    });
  }, [scroll, triggerBottom]);

  return (
    <div className="project-profiles-container">
      <section className="project-profiles-page-title">
        <p>Project Profiles</p>
      </section>
      <section className="project-profiles-timeline flex flex-column">
        {projects.map((project) => {
          return (
            <div className="project-profile-row-container">
              <div className="project-profile-row">
                <div className="project-profile-header-container">
                  <h2 className="project-profile-header">{project.name}</h2>
                </div>

                <div className="project-profile-content-container">
                  <div className="project-profile-content">
                    <div className="flex">
                      <p className="project-profile-title">Project Owner: </p>{" "}
                      <p>{project.owner}</p>
                    </div>
                    <div className="flex">
                      <p className="project-profile-title">Domain: </p>{" "}
                      <p>{project.domain}</p>
                    </div>
                    <div className="flex">
                      <p className="project-profile-title">My role: </p>{" "}
                      <p>{project.role}</p>
                    </div>
                    <div className="flex">
                      <p className="project-profile-title">Team size: </p>{" "}
                      <p>{project.teamSize}</p>
                    </div>
                    <div>
                      <span className="project-profile-title">
                        Description:
                      </span>
                      <span className="project-description">
                        {project.description}
                      </span>
                    </div>

                    <div className="flex flex-wrap project-profile-technologies">
                      {project.technologyIcons.map((icon) => {
                        return (
                          <div className="project-techs-icon-container flex flex-column flex-align-center">
                            <div className="project-techs-icon">
                              {icon.icon}
                            </div>
                            <div>{icon.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div style={{ minHeight: 100 }}></div>
    </div>
  );
};

/**{projects.map((project) => {
          return (
            <div className="project-container flex flex-column">
              <div className="project-top-part">
                <h2>{project.name}</h2>
                <div className="flex flex-align-end">
                  <h3>Developed For:</h3>
                  <h4 style={{ marginLeft: 15 }}>{project.owner}</h4>
                </div>
                <p style={{ marginTop: 15 }}>{project.description}</p>
              </div>

              <div className="flex flex-wrap">
                {project.technologyIcons.map((icon) => {
                  return (
                    <div className="tech-icons flex flex-column flex-align-center">
                      <p style={{ fontSize: "xx-large" }}>{icon.icon}</p>
                      <p>{icon.text}</p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="flex" style={{ marginTop: 10 }}>
                <h4 style={{ width: 100 }}>Team Size:</h4>
                <p>{project.teamSize}</p>
              </div>
              <div className="flex">
                <h4 style={{ width: 100 }}>Role:</h4>
                <p>{project.role}</p>
              </div>
              <div className="flex">
                <h4 style={{ width: 100 }}>Domain:</h4>
                <p>{project.domain}</p>
              </div>
            </div>
          );
        })} */
