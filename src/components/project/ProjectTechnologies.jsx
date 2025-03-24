const ProjectTechnologies = ({ technologies }) => (
  <section className="py-8 h-max bg-slate-200">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Technologies used</h2>
      <div className="flex justify-center space-x-8 gap-8">
        <div className="flex flex-row border-t-2 border-stone-200 p-2 justify-evenly">
          {technologies.map((logo) => (
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
        {/* Add more technologies as needed */}
      </div>
    </div>
  </section>
);

export default ProjectTechnologies;
