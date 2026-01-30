import React from "react";
import { SocialIcons } from "../ui/SocialIcons";
import { Button } from "../ui/button";
import heroData from "../../../public/data/Hero.json";
import type { HeroDataType } from "@/types/Hero";
import Image from "next/image";
import { Skills } from "./Skills";
import Reveal from "../Reveal";

export const Header = () => {
  const data = heroData as HeroDataType;

  return (
    <header
      id="home"
      className="pt-10 w-full md:h-screen flex flex-col gap-20 md:justify-between md:pb-32"
    >
      {/* hero */}
      <Reveal delay={120}>
        <section className="flex flex-col gap-5 items-center">
          {/* profile */}
          <div className="relative h-24 w-24 min-h-24 min-w-24 overflow-hidden rounded-full">
            <Image
              src={data.profileImage}
              alt="Riteek Bhardwaj"
              width={96}
              height={96}
              className="object-cover"
              priority
            />
          </div>

          {/* text */}
          <div className="flex flex-col items-center gap-4">
            <div>
              <p className="text-base leading-7 font-light text-secondary-foreground">
                Hello I&apos;m 👋
              </p>
            </div>
            <div>
              <h1>
                <strong className="text-3xl md:text-5xl leading-tight font-extrabold flex flex-col items-center md:flex-row gap-2.5">
                  <span className="text-foreground">{data.firstName}</span>
                  <span className="text-primary-foreground">
                    {data.lastName}
                  </span>
                </strong>
              </h1>
            </div>
            <div>
              <h6>
                <strong className="text-base leading-7 font-light text-secondary">
                  {data.role}
                </strong>
              </h6>
            </div>
            <div>
              <p className="text-base leading-7 font-light text-center  text-secondary-foreground">
                {data.heroIntro}
              </p>
            </div>
          </div>

          {/* social links */}
          <SocialIcons links={data.socialLinks} />

          {/* contact btn */}
          <Button>Lets&apos;s Talk</Button>
        </section>
      </Reveal>
      <Reveal delay={120}>
        <Skills />
      </Reveal>
    </header>
  );
};
