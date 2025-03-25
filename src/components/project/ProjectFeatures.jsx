const ProjectFeatures = ({ features, contributions }) => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2">
      {features && (
        <div className="w-full bg-gray-50 mx-auto p-8 pb-12">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <ul className="space-y-2 list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="font-mono text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      {contributions && (
        <div className="w-full bg-slate-200 mx-auto p-8 pb-12">
          <h2 className="text-4xl font-bold mb-8">My contributions</h2>
          <ul className="space-y-2 list-disc list-inside">
            {contributions.map((feature, index) => (
              <li key={index} className="font-mono text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ProjectFeatures;
