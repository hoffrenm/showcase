const ProjectFeatures = () => (
  <section className="flex flex-row">
    <div className="container bg-gray-50 mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">Description of the first feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600">Description of the second feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600">Description of the third feature.</p>
        </div>
      </div>
    </div>
    <div className="container bg-slate-200 mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">My contribution</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">Description of the first feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600">Description of the second feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600">Description of the third feature.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectFeatures;
