import SubsectionR from "../components/SubsectionR";
import SubsectionL from "../components/SubsectionL";
import projects from "../../projects.json";

const Projects = () => {
  return (
    <div className="transform transition-all duration-500 w-1/2 min-w-140 text-black ">
      <div className="transform transition-all duration-500 text-black shadow-xl">
        <h2 className="p-8 text-5xl font-bold">Projects</h2>

        <SubsectionL
          title={projects[0].title}
          orgId={projects[0].orgId}
          projects={projects[0].projects}
        />

        <SubsectionR
          title={projects[1].title}
          orgId={projects[1].orgId}
          projects={projects[1].projects}
        />

        <SubsectionL
          title={projects[2].title}
          orgId={projects[2].orgId}
          projects={projects[2].projects}
        />

        <SubsectionR
          title={projects[3].title}
          orgId={projects[3].orgId}
          projects={projects[3].projects}
        />
      </div>
    </div>
  );
};

export default Projects;
