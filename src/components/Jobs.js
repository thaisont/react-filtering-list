import React from "react";
import photo from "../photosnap.svg";

function Jobs() {
  return (
    <div className="max-w-screen-lg border-l-4 rounded border-primary m-auto  p-8 shadow bg-white">
      <div className="flex  gap-x-4">
        <div className="flex gap-x-4 mr-auto items-center">
          <img src={photo} alt="" />
          <div className="text-sm flex flex-col">
            <div className="flex py-1 gap-x-4 items-center">
              <p className="text-primary font-bold">Photosnap</p>
              <button className="text-xs rounded-full bg-primary text-white px-3 py-2 uppercase font-bold">
                new!
              </button>
              <button className="text-xs rounded-full bg-v-dark-cyan text-white px-3 py-2 uppercase">
                featured
              </button>
            </div>
            <div className="py-1">
              <h2 className="font-bold text-lg">Senior Frontend Developer</h2>
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
        <div className="flex items-center gap-x-4">
          <p className="p-1.5 text-primary bg-light-cyan font-bold">Frontend</p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold"> Senior</p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold"> HTML</p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold"> CSS</p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            Javascript
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
