import ProjectCard from "./ProjectCard";

const SubsectionL = ({ title, intro, orgId, projects }) => {
  return (
    <div>
      <div className="flex transform justify-end">
        <div className="flex items-center w-full bg-slate-900 drop-shadow-lg text-white">
          <p className="truncate px-8 py-2 text-2xl tracking-wider">{title}</p>
        </div>
        <div className="justify-end border-solid border-t-slate-900 border-t-50 border-r-50 border-r-white"></div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center px-8 py-6 bg-slate-200 transform transition-all duration-500">
          <p className="text-xl font-normal text-justify">{intro}</p>
        </div>

        <div className="grid grid-cols mx-auto gap-4 p-2 py-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} orgId={orgId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubsectionL;
