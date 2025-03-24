import Project from "./ProjectCard";

const SubsectionL = ({ title, orgId, projects }) => {
  return (
    <>
      <div className="transform transition-all duration-500 flex justify-end py-8">
        <div className="flex items-center w-full bg-slate-800 drop-shadow-lg text-white">
          <p className="truncate px-8 py-2 text-2xl">{title}</p>
        </div>
        <div className="justify-end border-solid border-t-slate-800 border-t-50 border-r-50 border-r-white"></div>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap p-6 gap-8 transform transition-all duration-500">
        <>
          {projects.map((project, index) => (
            <Project key={index} project={project} orgId={orgId} />
          ))}
        </>
      </div>
    </>
  );
};

export default SubsectionL;

/* 

*/
