import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 mb-2 text-sm">
                Projects
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Products and projects I&apos;ve built along the way — from
                ideas to shipped software.
              </p>
            </div>
          </div>
        </BlurFade>
        <ul className="mb-4 divide-y divide-dashed">
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
              technologies={project.technologies}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
