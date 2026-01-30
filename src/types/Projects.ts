export interface ProjectLinks {
  figma?: string;
  github?: string;
  preview?: string;
}

export interface ProjectDataType {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  projectImage: string;
  projectLinks: ProjectLinks;
  year: string;
  featured: boolean;
}
