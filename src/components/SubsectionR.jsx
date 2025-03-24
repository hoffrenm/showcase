import Project from "./ProjectCard";

const SubsectionR = ({ title, orgId, projects }) => {
  return (
    <>
      <div className="transform transition-all duration-500 flex justify-end py-8">
        <div className="justify-end border-solid border-t-slate-800 border-t-50 border-l-50 border-l-white"></div>

        <div className="flex justify-end items-center w-full bg-slate-800 drop-shadow-lg text-white">
          <p className="truncate px-8 py-2 text-2xl">{title}</p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-evenly flex-wrap p-6 gap-8">
        {projects.map((project, index) => (
          <Project key={index} project={project} orgId={orgId} />
        ))}
      </div>
    </>
  );
};

export default SubsectionR;
