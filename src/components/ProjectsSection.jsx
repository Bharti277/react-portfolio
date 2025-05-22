import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Live Weather App",
    description: "A beautiful live weather app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "OpenWeatherAPI"],
    demoUrl: "https://react-weather-app-live.vercel.app",
    githubUrl: "https://github.com/Bharti277/weather-app",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    // "Full-featured e-commerce platform with user authentication and payment processing.",
    // "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Redux", "Next.js"],
    demoUrl: "https://redux-ecommerce-nu.vercel.app",
    githubUrl: "https://github.com/Bharti277/redux-ecommerce",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Build React app with styled-components.",
    image: "/projects/project3.png",
    tags: ["React.JS", "TypeScript", "Styled-Components"],
    demoUrl: "https://react-styled-component-project.netlify.app",
    githubUrl: "https://github.com/Bharti277/react-styled-component-project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-lg shadow-xs group bg-card card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold"> {project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="flex items-center gap-2 mx-auto cosmic-button w-fit"
            target="_blank"
            href="https://github.com/Bharti277"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
