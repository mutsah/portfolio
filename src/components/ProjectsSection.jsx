import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tsvakai",
    description:
      "Full-featured e-commerce platform with payment processing.",
    image: "/assets/img/project1.png",
    tags: ["React", "TailwindCSS", "SpringBoot"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Native Markets",
    description:
      "Interactive admin dashboard with data visualization and filtering capabilities.",
    image: "/assets/img/dashboard.png",
    tags: ["React", "TailwindCSS", "Node.js Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "DineHub",
    description: "A full stake restaurant reservation using React.",
    image: "/assets/img/project1.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex  justify-center flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <h3 className="text-xl font-semibold mb-1">{project.title}</h3> */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <div className="flex justify-center items-center space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}></ExternalLink>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}></Github>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            className="cosmic-button flex items-center w-fit mx-auto gap-2"
          >
            <span>Check My Github</span>
            <span>
              <ArrowRight size={16}></ArrowRight>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};
