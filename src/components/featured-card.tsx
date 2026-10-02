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
    <li ref={ref} className="list-none py-8 md:py-10">
      <motion.div
        initial={false}
        animate={
          isInView
            ? { scale: 1.03, opacity: 1 }
            : { scale: 1, opacity: 0.85 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="flex origin-center flex-col gap-4 px-1 md:px-2"
      >
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          draggable={false}
            className="w-full rounded-2xl border border-border/40 object-cover shadow-md transition-shadow duration-300"
          style={{
            boxShadow: isInView
              ? "0 16px 40px -12px rgba(0,0,0,0.35)"
              : undefined,
          }}
        />
        <div className="flex flex-col gap-1 px-1">
          <div className="flex flex-col gap-0.5 pb-2">
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
