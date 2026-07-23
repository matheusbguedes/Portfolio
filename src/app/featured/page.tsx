import { FeaturedCard } from "@/components/featured-card";
import { FeaturedTimeline } from "@/components/featured-timeline";
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
        <FeaturedTimeline>
          {DATA.featured.map((featured) => (
            <FeaturedCard
              key={featured.title}
              title={featured.title}
              description={featured.description}
              image={featured.image}
              date={featured.date}
            />
          ))}
        </FeaturedTimeline>
      </div>
    </section>
  );
}
