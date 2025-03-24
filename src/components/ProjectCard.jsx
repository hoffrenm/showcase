import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, orgId }) => {
  const navigate = useNavigate();

  return (
    <>
      {project.logos && (
        <div
          onClick={() =>
            navigate(`${orgId}/${project.name}`.replace(/ /g, "").toLowerCase())
          }
          className="flex flex-col hover:cursor-pointer hover:scale-104 duration-150 ease-in-out bg-neutral-50 min-w-90 border border-slate-200 rounded-md shadow-md"
        >
          <h4 className="text-xl font-semibold text-slate-800 p-4">
            {project.name}
          </h4>
          <p className="px-4 pb-4">{project.description}</p>
          <div className="flex flex-row border-t-2 border-stone-200 p-2 justify-evenly">
            {project.logos.map((logo) => (
              <>
                <div className="flex flex-col items-center justify-center px-2">
                  <img
                    src={`/showcase/${logo}.svg`.toLowerCase()}
                    className="size-10"
                  />
                  <p className="font-light">{logo}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
