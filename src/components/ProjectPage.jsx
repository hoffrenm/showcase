import ProjectFeatures from "./project/ProjectFeatures";
import ProjectHeader from "./project/ProjectHeader";
import ProjectOverview from "./project/ProjectOverview";
import ProjectScreenshots from "./project/ProjectScreenshots";
import ProjectTechnologies from "./project/ProjectTechnologies";

const ProjectPage = ({ project, setProject }) => (
  <div>
    <ProjectHeader
      setProject={setProject}
      title={project.name}
      description={project.description}
      link={project.github}
    />
    <ProjectOverview overview={project.overview} />

    <ProjectScreenshots screenshots={project.screenshots} />

    <ProjectFeatures
      features={project.features}
      contributions={project.contributions}
    />
    <ProjectTechnologies technologies={project.technologies} />
  </div>
);

export default ProjectPage;
