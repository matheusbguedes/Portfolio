import { CourseCard } from "@/components/course-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Courses() {
  return (
    <section id="courses">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 mb-2 text-sm">
                Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Passion for Learning
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Throughout my journey as a developer, I have completed over{" "}
                {DATA.courses.length} courses, continuously seeking to refine my
                skills and broaden my horizons.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.courses.map((course, id) => (
              <BlurFade
                key={course.title + course.dates}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <CourseCard
                  title={course.title}
                  organization={course.organization}
                  dates={course.dates}
                  image={course.image}
                  links={course.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
