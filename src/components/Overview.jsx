import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { services } from "../constant";
import profile from "../assets/ProfilePic.jpg";
import "./Style.css";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-center">
      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center justify-center pt-3 w-full" id="about">
        <div className="flex flex-col items-start w-full md:w-1/2 lg:pl-5 pl-4 max-w-lg">
          <h2 className={Styles.sectionHeadText}>About Me</h2>
          <hr className="lg:w-[35%] w-full mx-5" />
          <div className="text-lg text-gray-700 mt-2">
            <p>
              A dedicated MERN stack developer with a passion for building dynamic and scalable web applications. My expertise lies in MongoDB, Express.js, React, and Node.js, allowing me to develop full-stack solutions that are both powerful and efficient.
            </p>
            {isExpanded && (
              <>
                <p className="mt-2">
                  My journey into web development began with a fascination for how digital experiences are created, which quickly evolved into a career dedicated to mastering the latest technologies. Over the years, I've built a diverse portfolio of projects that showcase my ability to create responsive, user-friendly, and performant web applications.
                </p>
                <p className="mt-2">
                  I thrive on solving complex problems and am always eager to learn new skills and technologies to stay ahead in this fast-paced industry. When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and delving into the world of design. Let's collaborate to bring your ideas to life with the power of the MERN stack!
                </p>
              </>
            )}
            <button className="text-green-700 underline mt-2" onClick={toggleExpand}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-5 p-5">
          <img
            src={profile}
            alt="Profile"
            className="lg:w-[355px] lg:h-[355px] md:w-[205px] md:h-[140px] object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* My Services Section */}
      <div className="flex flex-col lg:flex-row items-center lg:pl-5 md:pr-8 justify-center lg:pt-3">
        <h2 className={Styles.sectionHeadText}>My Services</h2>
      </div>
      <hr className="lg:w-[35%] w-full mx-5" />

      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <Tilt
            key={service.title}
            className="parallax-effect-glare-scale rounded-2xl m-3"
            perspective={500}
            glareColor="fed7aa"
            glareEnable={true}
            glareMaxOpacity={0.5}
            scale={1.02}
            gyroscope={true}
          >
            <div className="p-3 flex flex-col items-center">
              <img src={service.icons} alt={service.title} className="h-[150px] w-[150px]" loading="lazy" />
              <p className="m-5 text-green-700 text-lg font-semibold">{service.title}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Overview;
