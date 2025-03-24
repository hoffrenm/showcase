import { useNavigate } from "react-router-dom";

const ProjectHeader = ({ title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center align-middle justify-between">
      <div className="m-4 size-20 hover:scale-105">
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer align-middle "
        >
          <img src={"/showcase/arrowback.svg"} />
        </div>
      </div>
      <div className="relative bg-cover bg-center text-white p-8 flex items-center justify-self-center">
        <div className="p-2 rounded-lg text-center">
          <h1 className="text-7xl font-bold text-slate-800">{title}</h1>
          <p className="mt-4 text-lg text-black">{description}</p>
        </div>
      </div>
      <a href={link} target="_blank">
        <div className="flex flex-row gap-2 p-2 items-center border-2 hover:bg-gray-100 border-gray-200 rounded-lg border-lg">
          <div>
            <img src={"/showcase/github.svg"} className="size-12" />
          </div>
          <div>
            <p>Check project on GitHub</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectHeader;
