import React from "react";
import { Button } from "../ui/button";
import { IconMailFast } from "@tabler/icons-react";
import { SocialIcons } from "../ui/SocialIcons";
import heroData from "../../../public/data/Hero.json";
import type { HeroDataType } from "@/types/Hero";

export const Footer = () => {
  const data = heroData as HeroDataType;
  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-foreground text-2xl md:text-3xl font-semibold">
            Get in Touch
          </h2>
        </div>
        <div>
          <p className="font-light text-secondary-foreground text-base leading-7">
            Have an opportunity or idea ? Let’s Talk
          </p>
        </div>
        <div>
          <a href={`mailto:${data.mail}`}>
            <Button variant="outline" size="sm">
              Say Hello
              <IconMailFast stroke={1.5} size={32} />
            </Button>
          </a>
        </div>
        <SocialIcons links={data.socialLinks} />
        <div className="flex gap-2">
          <span className="font-light text-foreground text-base leading-7">
            Designed & built by
          </span>
          <span className="font-bold text-primary-foreground text-base leading-7">
            {data.firstName} {data.lastName}
          </span>
        </div>
      </div>
    </div>
  );
};
