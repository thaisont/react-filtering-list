import React from "react";

function Jobs({
  title,
  job,
  latest,
  featured,
  img,
  day,
  duration,
  location,
  skillOne,
  skillTwo,
  skillThree,
  skillFour,
  skillFive,
}) {
  return (
    <div className="max-w-screen-lg border-l-4 rounded border-primary m-auto  p-8 shadow bg-white">
      <div className="flex  gap-x-4">
        <div className="flex gap-x-4 mr-auto items-center">
          <img src={img} alt="" />
          <div className="text-sm flex flex-col">
            <div className="flex py-1 gap-x-4 items-center">
              <p className="text-primary font-bold">{title}</p>
              <button className="text-xs rounded-full bg-primary text-white px-3 py-2 uppercase font-bold">
                {latest}
              </button>
              <button className="text-xs rounded-full bg-v-dark-cyan text-white px-3 py-2 uppercase">
                {featured}
              </button>
            </div>
            <div className="py-1">
              <h2 className="font-bold text-lg">{job}</h2>
            </div>
            <div className="flex py-1 gap-x-8 text-dark-cyan">
              <p>{day}</p>
              <ul className="list-disc flex gap-x-8 ">
                <li>{duration}</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            {skillOne}
          </p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            {" "}
            {skillTwo}
          </p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            {" "}
            {skillThree}
          </p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            {" "}
            {skillFour}
          </p>
          <p className="p-1.5 text-primary bg-light-cyan font-bold">
            {skillFive}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
