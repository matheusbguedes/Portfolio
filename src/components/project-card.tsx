"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  href: string;
  technologies?: readonly string[];
}

export function ProjectCard({
  title,
  description,
  image,
  href,
  technologies,
}: Props) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    margin: "0px 0px -15% 0px",
  });

  return (
    <li ref={ref} className="list-none py-8 md:py-10">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          initial={false}
          animate={
            isInView
              ? { scale: 1.03, opacity: 1 }
              : { scale: 1, opacity: 0.85 }
          }
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
          className="group flex origin-center flex-col gap-4 px-1 md:px-2"
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
              <h3 className="inline-flex items-center gap-2 text-lg font-bold">
                {title}
                <ArrowUpRight className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </h3>
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </motion.div>
      </Link>
    </li>
  );
}
