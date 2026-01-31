import React from "react";
import {
  IconBrandLinkedin,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { SocialLinks } from "@/types/Hero";

export interface Links {
  links: SocialLinks;
}

export const SocialIcons = ({ links }: Links) => {
  return (
    <div className="flex flex-row gap-8">
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
        <IconBrandLinkedin
          stroke={1.5}
          size={32}
          className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
        />
      </a>
      <a href={links.figma} target="_blank" rel="noopener noreferrer">
        <IconBrandFigma
          stroke={1.5}
          size={32}
          className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
        />
      </a>
      <a href={links.github} target="_blank" rel="noopener noreferrer">
        <IconBrandGithub
          stroke={1.5}
          size={32}
          className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
        />
      </a>
      <a href={links.instagram} target="_blank" rel="noopener noreferrer">
        <IconBrandInstagram
          stroke={1.5}
          size={32}
          className="text-primary-foreground hover:text-foreground transition duration-500 cursor-pointer"
        />
      </a>
    </div>
  );
};
