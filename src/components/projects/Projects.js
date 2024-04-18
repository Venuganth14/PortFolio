import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import jobarmer from "../../assets/images/jobarmer.jpg"
import courier from "../../assets/images/1courier.png"
import contract from "../../assets/images/contractplan.jpg"
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="JOB ARMER"
          des=" An innovative project providing a solution to streamline job searching and recruitment processes, ensuring efficiency and ease of use."
          src={jobarmer}
        />
        <ProjectsCard
          title="1Courier"
          des=" A project focused on optimizing and enhancing courier services, aiming to provide a seamless experience for both senders and recipients."
          src={courier}
        />
        <ProjectsCard
          title="Contract Plan"
          des="This project involves the development of a platform designed to simplify and manage contractual agreements, ensuring clarity and transparency."
          src={contract}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" A creative endeavor replicating the essence of popular social media platforms, exploring and implementing various features in a unique way."
          src={projectThree}
        />
        <ProjectsCard
          title="Gatepass System"
          des="Digital tool designed to manage and track entry and exit permissions for individuals or vehicles of SLT"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A communication-focused application designed to facilitate seamless and interactive conversations, promoting connectivity in a user-friendly interface."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects