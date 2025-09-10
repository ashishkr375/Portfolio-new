import React, { useState } from 'react';

const ProjectCard = ({ title, description, technologies, year, link, achievements, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Default image pattern if no image is provided
  const gradientPattern = `bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500`;
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-48 ${!image ? gradientPattern : ''} relative overflow-hidden`}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-white font-bold text-xl">{title}</h3>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
            {year}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {achievements && (
          <div className="mb-4 mt-auto">
            <h4 className="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4 mt-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            className="mt-auto inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            View Project
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Decentralized Self-Healing Edge Server Framework (D-SEF)",
      description: "Developed an autonomous edge network with self-discovery, authentication, and load balancing between edge servers.",
      technologies: ["Python", "ECC", "Distributed Systems", "IoT", "Network Programming"],
      year: "2024",
      link: "#",
      image: "/projects/edge-server.jpg",
      achievements: [
        "Implemented Challenge-Response authentication via ECC keys, automatic peer gossip/table sync",
        "Developed ESP Simulator with failover capability"
      ]
    },
    {
      title: "Dark Pattern Detection Extension",
      description: "Led development of a browser extension detecting dark patterns on websites using machine learning model.",
      technologies: ["JavaScript", "APIs", "Machine Learning", "Artificial Intelligence", "Python"],
      year: "2023",
      link: "#",
      image: "/projects/dark-pattern.jpg",
      achievements: [
        "Trained model on 3,000+ instances of dark patterns",
        "Integrated user feedback mechanisms improving detection accuracy by 40% across diverse website designs"
      ]
    },
    {
      title: "Multi-Channel E-Commerce Fulfillment Hub",
      description: "A comprehensive full-stack platform designed to manage multiple e-commerce stores with integrated inventory, order, and shipment processes.",
      technologies: ["React.js", "Node.js", "Express.js", "Shopify API"],
      year: "2024",
      link: "#",
      image: "/projects/ecommerce.jpg",
      achievements: [
        "Achieved Top 12 Finalist position among 12,000+ teams in National E-Commerce Hackathon 2024",
        "Implemented automated tasks and centralized management system"
      ]
    },
    {
      title: "GovChain Blockchain Platform",
      description: "Built GovChain blockchain platform for transparent governance.",
      technologies: ["Solidity", "Polygon", "MERN Stack", "Web3.js", "ThirdWeb API"],
      year: "2023",
      link: "#",
      image: "/projects/blockchain.jpg",
      achievements: [
        "2nd Runner Up at Byteverse Hackathon (Blockchain)"
      ]
    }
  ];

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="custom-screen">
        <div className="mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            My Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Achievements
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <ul className="space-y-8">
                <li className="relative pl-10 group">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold transform group-hover:scale-110 transition-transform duration-300">1</div>
                  <div className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Amazon smbhav- National E-Commerce Hackathon 2024- Top 12 Finalist (12,000+ Teams)</div>
                  <p className="text-gray-600 mt-2">Developed full-stack e-commerce platform integrating Shopify, WooCommerce, and Amazon stores using React.js, Node.js, and Express.js.</p>
                </li>
                <li className="relative pl-10 group">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold transform group-hover:scale-110 transition-transform duration-300">2</div>
                  <div className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Dark Pattern Buster Hackathon (DPBH 2023)- Grand Finalist</div>
                  <p className="text-gray-600 mt-2">Created real-time dark pattern detection browser extension using HTML, CSS, JS, Python, ML with 3000+ training datasets.</p>
                </li>
                <li className="relative pl-10 group">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold transform group-hover:scale-110 transition-transform duration-300">3</div>
                  <div className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Byteverse Hackathon (Blockchain)- 2nd Runner Up</div>
                  <p className="text-gray-600 mt-2">Built GovChain blockchain platform for transparent governance using Solidity, Polygon, MERN Stack, Web3.js, and ThirdWeb API.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;