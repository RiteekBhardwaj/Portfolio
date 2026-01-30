import React from "react";
import {
  IconArrowLeft,
  IconBrandFigma,
  IconBrandGithub,
  IconWorldWww,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProjectDataType } from "@/types/Projects";
import projectData from "../../../public/data/Projects.json";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const projects = projectData as ProjectDataType[];
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10 p-5 md:p-10 w-full">
      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-10">
          <Link href={"/"} className="flex text-primary-foreground">
            <IconArrowLeft stroke={1.5} size={24} />
            <h6>Back</h6>
          </Link>
          <h1 className="text-foreground text-2xl md:text-3xl font-semibold">
            All Projects
          </h1>
        </header>
        <div>
          <Table className="">
            <TableCaption>Designed and created by Riteek Bhardwaj</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell w-25">
                  Year
                </TableHead>
                <TableHead>Project</TableHead>
                <TableHead className="hidden md:table-cell">Stack</TableHead>
                <TableHead className="text-right">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="hidden sm:table-cell font-light text-secondary-foreground text-base">
                    {project.year}
                  </TableCell>
                  <TableCell className="font-light text-foreground text-base leading-7">
                    {project.title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell overflow-hidden">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <Badge key={tech} className="mr-3">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 2 && (
                      <Badge>+{project.techStack.length - 2}</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex gap-3 justify-end">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
