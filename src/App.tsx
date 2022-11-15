import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Primitives/Header/Header";
import { PortfolioTemplate } from "./components/Primitives/PortfolioTemplate/PortfolioTemplate";
import { useState } from "react";

function App() {
  const currentPage =
    window.location.pathname === "/about_me"
      ? 2
      : window.location.pathname === "/project_profiles"
      ? 3
      : 1;
  const [pageId, setPageId] = useState<number>(currentPage);
  const [theme, setTheme] = useState<string>("light");

  function themeHandler() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function updatePage(pageId: number) {
    document.querySelectorAll(".App")[0].scroll(0,0);
    setPageId(pageId)
  }

  return (
    <div className={"App " + theme}>
      <Header
        pageId={pageId}
        onChangeTheme={themeHandler}
        theme={theme}
        updatePage={(pageId: number) => updatePage(pageId)}
      />
      <article className="article-container">
        <Routes>
          <Route
            path={"/"}
            element={
              <PortfolioTemplate
                pageId={pageId}
                updatePage={(pageId: number) => updatePage(pageId)}
              />
            }
          ></Route>
          <Route
            path={"/about_me"}
            element={
              <PortfolioTemplate
                pageId={pageId}
                updatePage={(pageId: number) => updatePage(pageId)}
              />
            }
          />
          <Route
            path={"/project_profiles"}
            element={
              <PortfolioTemplate
                pageId={pageId}
                updatePage={(pageId: number) => updatePage(pageId)}
              />
            }
          />
        </Routes>
      </article>
    </div>
  );
}

export default App;

/**
 * {loadingProjects && <h2>Loading...</h2>}
 * 
 * <ProjectList
              projectList={projects.sort((a, b) => (a.id > b.id ? 1 : -1))}
              onSelect={navigateHandler}
            />
 * 
 * <Route path={"/project"}>
            <ProjectTemplate selectedProject={projectId} url={getUrl()} />
          </Route>
          <Route path={"/aboutMe"}>
            <AboutMe />
          </Route>
 */
