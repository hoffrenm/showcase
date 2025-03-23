import SubsectionR from "../components/SubsectionR";
import SubsectionL from "../components/SubsectionL";
import projects from "../../projects.json";
import { useState } from "react";
import ProjectPage from "../components/ProjectPage";

const Projects = () => {
  console.log(projects[2]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="transform transition-all duration-500 w-1/2 min-w-140 text-black ">
      {selectedProject ? (
        <ProjectPage
          project={selectedProject}
          setProject={setSelectedProject}
        />
      ) : (
        <div className="transform transition-all duration-500 text-black shadow-xl">
          <h2 className="p-8 text-5xl font-bold">Projects</h2>

          <SubsectionL
            title={projects[0].title}
            projects={projects[0].projects}
            setProject={setSelectedProject}
          />

          <SubsectionR
            title={projects[1].title}
            projects={projects[1].projects}
            setProject={setSelectedProject}
          />

          <SubsectionL
            title={projects[2].title}
            projects={projects[2].projects}
            setProject={setSelectedProject}
          />

          <SubsectionR
            title={projects[3].title}
            projects={projects[3].projects}
            setProject={setSelectedProject}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
