import SubsectionR from "../components/SubsectionR";
import SubsectionL from "../components/SubsectionL";
import projects from "../../projects.json";
import intros from "../../intro.json";

const Projects = () => {
  return (
    <div className="transform transition-all duration-500 w-full xl:w-3/4 text-black ">
      <div className="transform transition-all duration-500 text-black shadow-xl">
        <h2 className="p-8 text-4xl font-bold">What I have been doing</h2>

        <SubsectionL
          title={projects[0].title}
          orgId={projects[0].orgId}
          projects={projects[0].projects}
          intro={intros[0]}
        />

        <SubsectionR
          title={projects[1].title}
          orgId={projects[1].orgId}
          projects={projects[1].projects}
          intro={intros[1]}
        />

        <SubsectionL
          title={projects[2].title}
          orgId={projects[2].orgId}
          projects={projects[2].projects}
          intro={intros[2]}
        />

        <SubsectionR
          title={projects[3].title}
          orgId={projects[3].orgId}
          projects={projects[3].projects}
          intro={intros[3]}
        />
      </div>
    </div>
  );
};

export default Projects;
