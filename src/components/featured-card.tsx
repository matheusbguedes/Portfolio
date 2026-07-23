"use client";

import { format } from "date-fns";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  date: string;
}

export function FeaturedCard({ title, description, image, date }: Props) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    margin: "0px 0px -15% 0px",
  });

  return (
    <li ref={ref} className="relative ml-6 list-none py-4 md:ml-10">
      {/* Position wrapper keeps centering; motion only scales the inner dot */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-6 z-10 flex size-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:-left-10"
      >
        <motion.span
          className="size-3 rounded-full bg-border shadow-[0_0_0_4px_hsl(var(--background))]"
          initial={{ scale: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        />
      </span>
      <motion.div
        initial={false}
        animate={
          isInView
            ? { scale: 1.03, opacity: 1 }
            : { scale: 1, opacity: 0.85 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="flex origin-center flex-col gap-3"
      >
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          draggable={false}
          className="w-full rounded-2xl object-cover shadow-md transition-shadow duration-300"
          style={{
            boxShadow: isInView
              ? "0 16px 40px -12px rgba(0,0,0,0.35)"
              : undefined,
          }}
        />
        <div className="flex flex-col">
          <div className="flex flex-col pb-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {format(date, "dd MMMM yyyy")}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    </li>
  );
}
