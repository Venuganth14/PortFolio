import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const Media = () => {
  const githubUrl = 'https://github.com/Venuganth14'; // Replace with your GitHub URL
  const linkedinUrl = 'https://www.linkedin.com/in/venuganth-arunthavarajah-674014219/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BhEmeL%2FHS7mwmtWYQh9LBg%3D%3D'; // Replace with your LinkedIn URL

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          {/* Add Twitter icon and link if needed */}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <FaAngular />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
