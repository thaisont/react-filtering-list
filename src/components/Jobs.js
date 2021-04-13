import React from "react";
import photo from "../photosnap.svg";

function Jobs() {
  return (
    <div className="container mx-auto border-2 p-8 shadow bg-white">
      <div className="flex  gap-x-4">
        <img src={photo} alt="" />
        <div className="text-sm flex flex-col">
          <div className="flex py-1 gap-x-4">
            <p className="text-primary font-bold">Photosnap</p>
            <p className="rounded-full bg-primary text-white">NEW!</p>
            <p>FEATURED</p>
          </div>
          <div className="py-1">
            <h2 className="font-bold">Senior Frontend Developer</h2>
          </div>
          <div className="flex py-1 gap-x-8 text-dark-cyan">
            <p>1d ago</p>
            <ul className="list-disc flex gap-x-8 ">
              <li>Full time</li>
              <li>USA only</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
