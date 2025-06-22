import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      <div className="container z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              {" "}
              Deependra
            </span>
            <span className="ml-2 opacity-0 text-gradient animate-fade-in-delay-2">
              {" "}
              Bharti
            </span>
          </h1>

          <p className="mx-auto text-lg opacity-0 md:text-xl text-muted-foreground max-2-2xl animate-fade-in-delay-3">
            I have over 5 years of hands-on experience in web development. My
            strong motivation to learn new technologies and algorithms drives me
            forward. I thrive on the challenges of a steep learning curve, which
            continually helps me grow as a developer. I&apos;m passionate about
            exploring different technologies to enhance my skills and build
            better solutions. I believe in a fast execution culture and enjoy
            creating things from scratch. I&apos;m especially drawn to startups,
            where the learning opportunities are immense and the focus is on
            innovation. I strive to build interfaces that are not only visually
            appealing but also highly functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground"> Scroll </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
