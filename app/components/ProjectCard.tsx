interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
