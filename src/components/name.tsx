import React from "react";

type NameProps = {
  names: string;
  intro: string;
};

export default function Name({ names, intro }: NameProps) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">{names}</h1>
          <p className="">{intro}</p>
        </div>
      </div>
    </div>
  );
}