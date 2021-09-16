import React from "react";

const Jobs = ({
  role,
  new: newRole,
  featured,
  logo,
  duration,
  location,
  position,
  id,
  company,
  level,
  postedAt,
  contract,
  languages,
  tools,
}) => {
  return (
    <div
      className={`max-w-screen-lg rounded  m-auto  p-8 shadow bg-white mb-4 my-12    ${
        featured && "border-l-4 border-primary border-black"
      }`}
    >
      <div className="flex-col md:flex md:flex-row  gap-x-4">
        <img className="-mt-16 w-20 h-20" src={logo} alt="" />
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="text-sm flex flex-col flex-wrap">
            <div className="flex py-1 gap-x-4 items-center">
              <p className="text-primary font-bold">{company}</p>
              {newRole && (
                <div className="text-xs rounded-full bg-primary text-white px-3 py-2 uppercase font-bold">
                  New!
                </div>
              )}
              {featured && (
                <div className="text-xs rounded-full bg-v-dark-cyan text-white px-3 py-2 uppercase ">
                  featured
                </div>
              )}
            </div>
            <div className="py-1">
              <h2 className="font-bold text-lg">{position}</h2>
            </div>
            <div className="flex py-1 gap-x-8 text-dark-cyan">
              <p>{postedAt}</p>
              <ul className="list-disc flex gap-x-8 ">
                <li>{contract}</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-x-4">
          <p className="p-1.5 text-xs text-primary bg-light-cyan font-bold">{role}</p>
          <p className="p-1.5 text-xs text-primary bg-light-cyan font-bold">{level}</p>

          {languages.map((langauge) => (
            <p className="p-1.5 text-xs text-primary bg-light-cyan font-bold">{langauge}</p>
          ))}
          {tools.map((tool) => (
            <p className="p-1.5 text-xs text-primary bg-light-cyan font-bold">{tool}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
