import React from 'react';

const SkillCard = ({ title, skills, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="text-3xl text-gray-800 mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🛠️",
      skills: ["Java", "Python", "Express", "NodeJS", "REST APIs", "GraphQL"]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["Next.js", "ReactJS", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Amazon AWS", "Firebase", "Docker"]
    },
    {
      title: "Other Technologies",
      icon: "⚙️",
      skills: ["Machine Learning", "Blockchain", "Git", "CI/CD", "Agile"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Team player", "Bias for action", "Deliver results", "Problem Solving", "Communication", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="custom-screen">
        <div className="mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I specialize in a variety of technologies and frameworks to build modern, efficient, and scalable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;