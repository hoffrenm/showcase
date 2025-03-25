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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const projectExists =
      projects
        .map((item) => item.projects)
        .flat()
        .find(
          (item) =>
            item.name.toLowerCase().replace(/ /g, "") == id.toLowerCase()
        ) || false;

    if (!projectExists) navigate("/", { replace: true });

    setProject(projectExists);
  }, [id]);

  return (
    <div className="w-full lg:w-3/4">
      <ProjectHeader
        title={project.name}
        description={project.description}
        link={project.github}
      />
      <ProjectOverview overview={project.overview} />
      <ProjectFeatures
        features={project.features}
        contributions={project.contributions}
      />
      <ProjectScreenshots screenshots={project.screenshots} />
      <ProjectTechnologies technologies={project.technologies} />
    </div>
  );
};

export default ProjectPage;
