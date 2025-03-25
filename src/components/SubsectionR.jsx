import ProjectCard from "./ProjectCard";

const SubsectionR = ({ title, intro, projects }) => {
  return (
    <div>
      <div className="transform transition-all duration-500 flex justify-end">
        <div className="justify-end border-solid border-t-slate-900 border-t-50 border-l-50 border-l-white"></div>

        <div className="flex justify-end items-center w-full bg-slate-900 drop-shadow-lg text-white">
          <p className="truncate px-8 py-2 text-2xl tracking-wider">{title}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="grid grid-cols  mx-auto place-content-evenly gap-4 p-2 py-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex items-center order-first xl:order-last justify-center px-8 py-12 gap-4 bg-slate-200">
          <p className="text-xl/8 font-normal text-justify">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default SubsectionR;
