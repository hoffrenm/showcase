import ProjectCard from "./ProjectCard";

const SubsectionL = ({ title, intro, orgId, projects }) => {
  return (
    <div>
      <div className="transform transition-all duration-500 flex justify-end">
        <div className="flex items-center justify-between w-full bg-slate-900 text-amber-500">
          <p className="truncate text-xl tracking-tight font-semibold px-8 py-3 sm:text-2xl sm:tracking-widest">
            {title}
          </p>
          <div className="border-solid  border-t-slate-900 border-t-58 border-r-58 border-r-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center px-8 py-6 bg-slate-200 transform transition-all duration-500">
          <p className="text-xl/8 font-normal text-justify">{intro}</p>
        </div>

        <div className="grid grid-cols mx-auto place-content-evenly gap-4 p-2 py-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubsectionL;
