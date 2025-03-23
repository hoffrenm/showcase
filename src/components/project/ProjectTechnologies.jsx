const ProjectTechnologies = ({ technologies }) => (
  <section className="py-16 bg-slate-200">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
      <div className="flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <img
            className="w-10"
            src="/path-to-react-logo.png"
            alt="React Logo"
          />
          <span>React</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            className="w-10"
            src="/path-to-tailwind-logo.png"
            alt="Tailwind CSS Logo"
          />
          <span>Tailwind CSS</span>
        </div>
        {/* Add more technologies as needed */}
      </div>
    </div>
  </section>
);

export default ProjectTechnologies;
