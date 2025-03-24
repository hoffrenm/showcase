import ProjectFeatures from "./project/ProjectFeatures";
import ProjectHeader from "./project/ProjectHeader";
import ProjectOverview from "./project/ProjectOverview";
import ProjectScreenshots from "./project/ProjectScreenshots";
import ProjectTechnologies from "./project/ProjectTechnologies";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../../projects.json";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const { orgId, id } = useParams();

  useEffect(() => {
    const projectExists =
      projects
        .map((item) => item.projects)
        .flat()
        .find((item) => item.name.toLowerCase().replace(/ /g, "") == id) ||
      false;

    if (!projectExists) navigate("/showcase/", { replace: true });

    setProject(projectExists);
  }, [orgId, id]);

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
