import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import { FaDownload } from 'react-icons/fa'; // Import the download icon

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const handleDownloadCV = () => {
    // Implement your download logic here
    // For example, create a link and trigger a click event
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/1gZm1sgO13ofOCiIlM6Mrm0Zx1Jy9sIbz/view?usp=sharing'; // Replace with the actual path to your CV
    downloadLink.download = 'Venuganth_Arunthavarajah_CV.pdf'; // Replace with the desired file name
    downloadLink.target = '_blank'; // Open in a new tab
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) 
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={handleDownloadCV}
            className="border-transparent resumeLi"
          >
            <FaDownload className="mr-2" /> Download CV
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
