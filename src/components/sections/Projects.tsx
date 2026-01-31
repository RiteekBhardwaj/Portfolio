import React from "react";
import Card from "../ui/Card";
import { Button } from "../ui/button";
import { IconLibrary } from "@tabler/icons-react";
import type { ProjectDataType } from "@/types/Projects";
import projectData from "../../../public/data/Projects.json";
import Link from "next/link";
import Reveal from "../Reveal";

const featured_projects = (projectData as ProjectDataType[]).filter(
  (p) => p.featured,
);

export const Projects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col gap-8">
        <Reveal delay={120}>
          <div className="text-center">
            <h2 className="text-foreground text-2xl md:text-3xl font-semibold">
              Projects
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,300px))] gap-8 justify-center">
          {featured_projects.map((project) => (
            <Reveal
              key={project.id}
              delay={120}
              className="h-full rounded-xl overflow-hidden bg-card"
            >
              <Card project={project} />
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Reveal delay={120}>
            <Link href={"/projects-archive"}>
              <Button variant="outline" size="sm">
                View Archive
                <IconLibrary />
              </Button>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
