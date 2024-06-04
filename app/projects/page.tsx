"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/path/to/image1.jpg",
    link: "https://example.com/project1",
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
