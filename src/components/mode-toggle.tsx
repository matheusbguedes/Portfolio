"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button-variants";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      variant="circle"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-12 [&_svg]:size-4"
      )}
    />
  );
}
