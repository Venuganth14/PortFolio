import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="border-l-6 border-l-black border-opacity-30 pl-4">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="Sri Lanka Institute of Information Technology "
            result="3.015"
            des="Information Technology graduate skilled in system analysis, software development, and IT management, dedicated to driving innovation and solving complex challenges. Passionate about leveraging technology for efficient business solutions."
          />
        </div>
      </div>
      {/* part Two */}
      <div className="border-l-6 border-l-black border-opacity-30 pl-4">
        <div className="py-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm mt-12 text-designColor tracking-[4px]">2017 - 2019</p>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GCE Advanced Levels"
            subTitle="Wesley High School"
            result="Technology Stream"
            des="Completed General Certificate of Education Advanced Level (GCE A-levels) with a focus on Engineering Technology, supplemented with proficiency in Information Technology."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
