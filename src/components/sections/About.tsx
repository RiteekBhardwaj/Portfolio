import React from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { AboutDataType } from "@/types/About";
import aboutData from "../../../public/data/About.json";
import Reveal from "../Reveal";

export const About = () => {
  const data = aboutData as AboutDataType;
  return (
    <div id="about" className="pt-16">
      <div className="flex flex-col gap-10 md:flex-row items-center">
        {/* text */}
        <Reveal delay={120} className="md:flex-1 w-full">
          <div className="flex flex-col items-center text-center gap-5">
            <div>
              <h2 className="text-foreground text-2xl md:text-3xl font-semibold">
                About Me
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {data.aboutText.map((paragrah, i) => (
                <p
                  key={i}
                  className="font-light text-secondary-foreground text-base leading-7"
                >
                  {paragrah}
                </p>
              ))}
            </div>
            <div>
              <a
                href={data.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  View My Resume
                  <ExternalLink />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>

        {/* image */}
        <Reveal delay={120} className="md:flex-1 w-full">
          <div className="flex md:justify-end justify-center">
            <Image
              src={data.aboutImage}
              alt="Riteek Bhardwaj"
              className="rounded-2xl"
              width={246}
              height={246}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};
