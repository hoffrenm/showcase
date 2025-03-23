const ProjectOverview = ({ overview }) => (
  <section className="container mx-auto p-8 bg-slate-200">
    <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
    <p className="text-lg text-gray-700">{overview}</p>
  </section>
);

export default ProjectOverview;
