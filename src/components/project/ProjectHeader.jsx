const ProjectHeader = ({ title, description, setProject }) => (
  <div className="flex flex-row items-center align-middle justify-between">
    <div className="m-4 size-20 hover:scale-105">
      <div
        onClick={() => setProject(null)}
        className="cursor-pointer align-middle "
      >
        <img src={"src/assets/arrowback.svg"} />
      </div>
    </div>
    <div
      className="relative bg-cover bg-center text-white p-8 flex items-center justify-self-center"
      style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}
    >
      <div className="bg-black p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </div>
    <div className="size-20" />
  </div>
);

export default ProjectHeader;
