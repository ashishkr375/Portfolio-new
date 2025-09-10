import React, { useState } from 'react';

const ExperienceCard = ({ company, position, duration, location, description, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative pl-8 pb-12 border-l-2 border-gray-200 last:border-transparent last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full transform transition-transform duration-300 ${isHovered ? 'scale-150' : ''}`}></div>
      
      {/* Card */}
      <div 
        className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${isHovered ? 'transform -translate-y-1' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{company}</h3>
            <p className="text-indigo-600 font-medium">{position}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {duration}
            </span>
            <p className="text-gray-500 mt-1">{location}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {skills && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResponsibilityCard = ({ position, duration, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li 
      className="relative pl-10 py-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute left-0 top-4 w-7 h-7 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {index}
      </div>
      <div className={`transition-all duration-300 ${isHovered ? 'transform -translate-x-1' : ''}`}>
        <div className="font-semibold text-lg text-gray-800">{position}</div>
        <p className="text-indigo-600 text-sm font-medium">{duration}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const experienceData = [
    {
      company: "Ekah Retail (Child Company: Into Two)",
      position: "Web Developer Intern",
      duration: "May 2025 - Ongoing",
      location: "Remote",
      description: "Improved user experience by 25% through Theme customization initiatives, collaborating with cross-functional teams with 95% on-time delivery rate. Enhanced code maintainability by 40% and scalability by 30% using modern web technologies and industry best practices.",
      skills: ["React.js", "Node.js", "RESTful APIs", "UX/UI Optimization"]
    },
    {
      company: "NIT Patna",
      position: "Lead Web Developer",
      duration: "Aug 2023 - Present",
      location: "Patna, India",
      description: "Leading the NIT Patna web team, managing all institutional websites and expanding a secure admin portal with role-based access for 700+ faculty and staff. Enhanced website performance by 70% and implemented real-time notice/events system with API response times of 1-2ms.",
      skills: ["Next.js", "MongoDB", "Express", "Performance Optimization", "Security"]
    },
    {
      company: "LearnDost",
      position: "Lead Web Developer",
      duration: "Dec 2023 - March 2025",
      location: "Remote",
      description: "Leading the development of an innovative ed-tech platform, implementing advanced features for content management, student tracking, and AI-powered learning tools. Focusing on scalable architecture and optimal user experience.",
      skills: ["React.js", "Firebase", "Redux", "Tailwind CSS", "Education Tech"]
    }
  ];

  const responsibilityData = [
    {
      position: "Lead Web Developer, NIT Patna",
      duration: "2023 - Present",
      description: "Led web team, managing websites and expanding secure admin portal for 700+ faculty with 70% performance improvement and 1-2ms API response times."
    },
    {
      position: "Content Team Member, Training and Placement Cell, NIT Patna",
      duration: "2023 - Present",
      description: "Managed official communications, invitations, and company engagements ensuring clarity and professionalism."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="custom-screen">
        <div className="mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey includes various roles where I've gained valuable experience and contributed to meaningful projects.
          </p>
        </div>
        
        <div className="mt-12 relative">
          {/* Vertical line decoration for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 opacity-20 hidden md:block"></div>
          
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Positions of Responsibility
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <ul className="space-y-6 divide-y divide-gray-100">
                {responsibilityData.map((item, index) => (
                  <ResponsibilityCard 
                    key={index} 
                    {...item} 
                    index={index + 1}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
