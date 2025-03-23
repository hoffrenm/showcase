const ProjectScreenshots = ({ screenshots }) => {
  console.log(screenshots);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Project Screenshots</h2>

        <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-8 justify-around">
          {screenshots ? (
            screenshots.map((img) => (
              <img
                className="transition-all duration-300 rounded-lg shadow-lg object-scale-down border hover:scale-200 max-w-100"
                src={img}
                alt="Screenshot"
              />
            ))
          ) : (
            <p>No screenshots at this time</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectScreenshots;
