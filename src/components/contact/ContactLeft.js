import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
  const githubUrl = 'https://github.com/Venuganth14'; // Replace with your GitHub URL
  const linkedinUrl = 'https://www.linkedin.com/in/venuganth-arunthavarajah-674014219/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BhEmeL%2FHS7mwmtWYQh9LBg%3D%3D'; // Replace with your LinkedIn URL
  // Add Twitter URL if needed

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Venuganth Arunthavarajah</h3>
        <p className="text-lg font-normal text-gray-400">Full Stack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
        Experienced Full Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, dedicated to delivering innovative solutions that seamlessly integrate user-centric design with efficient functionality.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 763008315</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">venuganth2001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          {/* Add Twitter icon and link if needed */}
          {/* <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a> */}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
