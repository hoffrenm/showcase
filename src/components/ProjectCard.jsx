import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div key={project.name} className="relative cursor-pointer">
        {project.featured && (
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        )}
        <div
          onClick={() =>
            navigate(`${project.name}`.replace(/ /g, "").toLowerCase())
          }
          className="relative hover:scale-104 duration-150 ease-in-out bg-neutral-50 border rounded-md shadow-md"
        >
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold text-slate-800 pt-2 px-4">
              {project.name}
            </h4>
            <p className="text-md pt-2 pr-2">Click for more info 🡭</p>
          </div>

          <p className="text-md px-4 pb-2">{project.description}</p>

          <div className="border-t-2 border-stone-200">
            <p className="text-xs pl-2 pt-1">This project was made with</p>
            <div className="flex flex-row pb-1 justify-evenly">
              {project.logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={`/showcase/${logo}.svg`.toLowerCase()}
                    className="size-6"
                  />
                  <p className="font-light">{logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
