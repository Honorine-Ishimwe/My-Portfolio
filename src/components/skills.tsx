import React from "react";

type skillsProps = {
  skills: string[];
};

export default function Skills({ skills }: skillsProps) {
  return (
    <div className="skills-container p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg mb-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}