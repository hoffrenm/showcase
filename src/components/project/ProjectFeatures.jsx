const ProjectFeatures = ({ features, contributions }) => {
  return (
    <section className="flex flex-row">
      {features && (
        <div className="container bg-gray-50 mx-auto p-8 pb-12">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <ul class="space-y-1 list-disc list-inside">
            {features.map((feature) => (
              <li className="font-mono text-[18px]">{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {contributions && (
        <div className="container bg-slate-200 mx-auto p-8 pb-12">
          <h2 className="text-4xl font-bold mb-8">My contributions</h2>
          <ul class="space-y-1 list-disc list-inside">
            {contributions.map((feature) => (
              <li className="font-mono text-[18px]">{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ProjectFeatures;
