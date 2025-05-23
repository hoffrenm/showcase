const ProjectScreenshots = ({ screenshots }) => {
  return (
    <section className="pt-8 pb-16 bg-gray-50">
      <div className="mx-auto px-8">
        <h2 className="text-4xl font-bold mb-8">Screenshots</h2>

        <div className="grid flex-wrap sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-around">
          {screenshots ? (
            screenshots.map((img, index) => (
              <a href={img} target="_blank" key={index}>
                <img
                  className="transition-all duration-300 rounded-lg shadow-lg border hover:scale-200 object-contain max-h-100"
                  src={img}
                  alt="Screenshot"
                />
              </a>
            ))
          ) : (
            <p>Screenshots coming soon!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectScreenshots;
