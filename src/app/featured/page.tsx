import { FeaturedCard } from "@/components/featured-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Featured() {
  return (
    <section id="featured">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 mb-2 text-sm">
                Featured
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Throughout my journey as a software engineer, I have some
                featured moments that I want to share with you.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 md:ml-4 divide-y divide-dashed border-l">
            {DATA.featured.map((featured, id) => (
              <BlurFade
                key={featured.title}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <FeaturedCard
                  title={featured.title}
                  description={featured.description}
                  image={featured.image}
                  date={featured.date}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
