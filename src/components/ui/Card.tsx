import React from "react";
import Link from "next/link";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconWorldWww,
} from "@tabler/icons-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectDataType } from "@/types/Projects";

export interface ProjectData {
  project: ProjectDataType;
}

export default function Card({ project }: ProjectData) {
  return (
    <div className="h-full">
      <div className="bg-card">
        <div>
          <div className="relative h-56">
            <Image src={project.projectImage} alt={project.title} fill />
          </div>
          <div className="absolute inset-0 h-20 bg-linear-to-b from-black/80 to transparent" />
          <div className="flex gap-5 absolute top-0 right-0 px-2 py-2 rounded-2xl m-1 bg-background/20 border-white/5">
            {project.projectLinks.figma && (
              <Link
                href={project.projectLinks.figma}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandFigma
                  stroke={1.5}
                  size={24}
                  className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
                />
              </Link>
            )}
            {project.projectLinks.github && (
              <Link
                href={project.projectLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub
                  stroke={1.5}
                  size={24}
                  className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
                />
              </Link>
            )}
            {project.projectLinks.preview && (
              <Link
                href={project.projectLinks.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWorldWww
                  stroke={1.5}
                  size={24}
                  className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col gap-3">
          <div>
            <h3 className="text-foreground text-base font-semibold">
              {project.title}
            </h3>
          </div>
          <div>
            <p className="font-light text-secondary-foreground text-sm leading-5">
              {project.description}
            </p>
          </div>
          <div className="w-full flex gap-3 overflow-hidden">
            {project.techStack.slice(0, 2).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.techStack.length > 2 && (
              <Badge>+{project.techStack.length - 2}</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
