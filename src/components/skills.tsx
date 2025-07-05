import React from "react";

type skillsProps = {
  skillsClasses: string[];
};

export default function Skills({ skillsClasses }: skillsProps) {
  return (
    <div className="skills-container p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="skills-grid">
        {skillsClasses.map((skillClass, index) => (
          <i key={index} className={`${skillClass} skill-icon`}></i>
        ))}
      </div>
    </div>
  );
}