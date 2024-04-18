import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer "
            subTitle="DGateway Innovations Pvt Ltd -  (Dec 2023 - present)"
            result="Sri Lanka"
            des="Contributed to a dynamic software development environment, emphasizing the growing demand for highly qualified professionals."
          />
          <ResumeCard
            title="Associate Software Engineer "
            subTitle="Srilanka Telecom -  (June 2023 - Dec 2023)"
            result="Sri Lanka"
            des="Acquired hands-on experience and training in full-stack development, contributing to the dynamic work environment and gaining insights into various sectors of the tech industry."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Jan 2023 - June 2023</p>
          <h2 className="text-4xl font-bold">Intern Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Srilanka Telecom"
            result="Sri Lanka"
            des="Acquired hands-on experience and training in full-stack development, contributing to the dynamic work environment and gaining insights into various sectors of the tech industry."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
