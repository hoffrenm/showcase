import ProjectFeatures from "./project/ProjectFeatures";
import ProjectHeader from "./project/ProjectHeader";
import ProjectOverview from "./project/ProjectOverview";
import ProjectScreenshots from "./project/ProjectScreenshots";
import ProjectTechnologies from "./project/ProjectTechnologies";
import { useParams } from "react-router-dom";
import projects from "../../projects.json";

const ProjectPage = () => {
  const { orgId, id } = useParams();

  // Json is a database and you cant convince me otherwise
  const project = projects
    .find((item) => item.orgId.toLowerCase().replace(/ /g, "") == orgId)
    .projects.find((item) => item.name.toLowerCase().replace(/ /g, "") == id);

  return (
    <div>
      <ProjectHeader
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
};

export default ProjectPage;
