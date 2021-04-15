import React from "react";
import Job from "./Jobs";
import photo from "../photosnap.svg";
import manage from "../manage.svg";
import account from "../account.svg";
import myHome from "../myhome.svg";
import loopStudios from "../loop-studios.svg";
import faceIt from "../faceit.svg";
import shortly from "../shortly.svg";
import insure from "../insure.svg";
import eyeCam from "../eyecam-co.svg";
import airFilter from "../the-air-filter-company.svg";

function Cards() {
  return (
    <div>
      <Job
        title="Photosnap"
        job="Senior Fullstack developer"
        latest="new!"
        featured="featured"
        img={photo}
        day="1d ago"
        duration="Full time"
        location="USA only"
        skillOne="Front end"
        skillTwo="Senior"
        skillThree="HTML"
        skillFour="CSS"
        skillFive="Javascript"
      />

      <Job
        title="Manage"
        job="Fullstack developer"
        latest="new!"
        featured="featured"
        img={manage}
        day="1d ago"
        duration="Full time"
        location="UK only"
        skillTwo="Full stack"
        skillThree="Mid weight"
        skillFour="Python"
        skillFive="React"
      />

      <Job
        title="Account"
        job="Junior Front Developer"
        latest="new!"
        img={account}
        day="2d ago"
        duration="Part Time"
        location="Remote"
        skillOne="Front end"
        skillTwo="Junior"
        skillThree="React"
        skillFour="Sass"
        skillFive="Javascript"
      />

      <Job
        title="MyHome"
        job="Junior Front Developer"
        img={myHome}
        day="5d ago"
        duration="Contract"
        location="UK only"
        skillTwo="Frontend"
        skillThree="Junior"
        skillFour="CSS"
        skillFive="Javascript"
      />

      <Job
        title="Loop Studios"
        job="Software Engineer"
        img={loopStudios}
        day="1w ago"
        duration="Full Time"
        location="Worldwide"
        skillOne="Fulstack"
        skillTwo="Midweight"
        skillThree="Javascript"
        skillFour="Sass"
        skillFive="Ruby"
      />

      <Job
        title="FaceIt"
        job="Junior Backend Developer"
        img={faceIt}
        day="2w ago"
        duration="Full Time"
        location="USA only"
        skillTwo="Backend"
        skillThree="Junior"
        skillFour="Ruby"
        skillFive="RoR"
      />

      <Job
        title="Shortly"
        job="Junior Developer"
        img={shortly}
        day="2d ago"
        duration="Part Time"
        location="Remote"
        skillOne="Front end"
        skillTwo="Junior"
        skillThree="React"
        skillFour="Sass"
        skillFive="Javascript"
      />

      <Job
        title="Insure"
        job="Junior Front Developer"
        img={insure}
        day="2w ago"
        duration="Full Time"
        location="Remote"
        skillOne="Front end"
        skillTwo="Junior"
        skillThree="Vue"
        skillFour="Javascript"
        skillFive="Sass"
      />

      <Job
        title="Eyecam Co."
        job="Full Stack Engineer"
        img={eyeCam}
        day="3w ago"
        duration="Full Time"
        location="Worldwide"
        skillOne="Fullstack"
        skillTwo="Midweight"
        skillThree="Javascript"
        skillFour="Django"
        skillFive="Python"
      />

      <Job
        title="The Air Filter Company"
        job="Front-end Dev"
        img={airFilter}
        day="1mo ago"
        duration="Part Time"
        location="Worldwide"
        skillOne="Frontend"
        skillTwo="Junior"
        skillThree="React"
        skillFour="Sass"
        skillFive="Javascript"
      />
    </div>
  );
}

export default Cards;
