import React from "react";
import { skills } from "../../../public/data/Skills.data";

export const Skills = () => {
  return (
    <div className="flex bg-card py-2 px-4 rounded-xl overflow-hidden">
      <div className="flex gap-10 w-max animate-[marquee_10s_linear_infinite] motion-reduce:animate-none">
        <div className="flex gap-10">
          {skills.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex gap-1 align-middle text-foreground items-center"
            >
              <span>
                <Icon size={16} />
              </span>
              <span className="text-xs md:text-base font-light w-max">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
