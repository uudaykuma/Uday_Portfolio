import React from "react";
import "../styles/project.css";

const Projects = () => {
  return (
    <div className="project_main_div">
      <h1 className="h1-headings">Projects</h1>
      <div className="projects_div">
        <div>
          <div className="carousal_div">
            <img src="https://i.ibb.co/wW8XpGg/Screenshot-951.png" alt="" />
            <div className="sourc_div">
              <button className="source_code_btn">
                <a
                  href="https://github.com/TusharTaral/beas_Learndigital/tree/master/final"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SOURCE CODE
                </a>
              </button>
              <button className="project_blog">
                  <a href="https://uday97.hashnode.dev/google-digital-garage-clone"target="_blank"
                  rel="noreferrer">BLOG</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousal_div">
            <img src="https://i.ibb.co/6DCh4Jz/Screenshot-959.png" alt="" />
            <div className="sourc_div">
              <button className="source_code_btn">
                <a
                  href="https://github.com/abhi5iet/Ganga"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SOURCE CODE
                </a>
              </button>
              <button className="project_blog">
                  <a href="https://uday97.hashnode.dev/google-digital-garage-clone"target="_blank"
                  rel="noreferrer">BLOG</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="carousal_div">
            <img src="https://i.ibb.co/GHFfYLG/Screenshot-960.png" alt="" />
            <div className="sourc_div">
              <button className="source_code_btn">
                <a
                  href="https://github.com/Mangeshbk/Premier-League-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SOURCE CODE
                </a>
              </button>
              <button className="project_blog">
                  <a href="https://uday97.hashnode.dev/google-digital-garage-clone"target="_blank"
                  rel="noreferrer">BLOG</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
