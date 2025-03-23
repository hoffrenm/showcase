const ProjectOverview = ({ overview }) => (
  <section className="container mx-auto p-8 bg-slate-200">
    <h2 className="text-4xl font-sans font-bold mb-4">Overview</h2>
    <p className="text-xl text-black font-sans">{overview}</p>
  </section>
);

export default ProjectOverview;
