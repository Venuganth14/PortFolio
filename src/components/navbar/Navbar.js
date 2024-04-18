import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { venu } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const githubUrl = 'https://github.com/Venuganth14'; // Replace with your GitHub URL
  const twitterUrl = 'https://x.com/Venuganth1?s=08'; // Replace with your Twitter URL
  const linkedinUrl = 'https://www.linkedin.com/in/venuganth-arunthavarajah-674014219/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BhEmeL%2FHS7mwmtWYQh9LBg%3D%3D'; // Replace with your LinkedIn URL

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={venu} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                Experienced Full Stack Developer with a passion for crafting robust and scalable web applications. Proficient in both front-end and back-end technologies, dedicated to delivering innovative solutions that seamlessly integrate user-centric design with efficient functionality.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
