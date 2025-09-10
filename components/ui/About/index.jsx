import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="custom-screen">
        <div className="mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-8 pb-5 border-l-2 border-indigo-200 group hover:border-indigo-600 transition-colors duration-300">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white group-hover:bg-indigo-700 transition-colors duration-300"></div>
                <div className="absolute right-0 top-0 bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm">2027</div>
                
                <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  B.Tech. + M.Tech (Dual Degree), CSE
                </h4>
                
                <p className="text-gray-600 flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  National Institute of Technology, Patna
                </p>
                
                {/* <div className="bg-indigo-50 rounded-lg p-2 inline-block">
                  <span className="font-medium text-indigo-800">CGPA: 8.55</span>
                </div> */}
              </div>
              
              <div className="relative pl-8 pb-5 border-l-2 border-indigo-200 group hover:border-indigo-600 transition-colors duration-300">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white group-hover:bg-indigo-700 transition-colors duration-300"></div>
                <div className="absolute right-0 top-0 bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm">2022</div>
                
                <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  Senior Secondary
                </h4>
                
                <p className="text-gray-600 flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Kendriya Vidyalaya, Danapur Cantt
                </p>
{/*                 
                <div className="bg-indigo-50 rounded-lg p-2 inline-block">
                  <span className="font-medium text-indigo-800">Percentage: 86%</span>
                </div> */}
              </div>
              
              <div className="relative pl-8 border-l-2 border-indigo-200 group hover:border-indigo-600 transition-colors duration-300">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white group-hover:bg-indigo-700 transition-colors duration-300"></div>
                <div className="absolute right-0 top-0 bg-indigo-100 text-indigo-800 font-medium rounded-full px-3 py-1 text-sm">2019</div>
                
                <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  Secondary
                </h4>
                
                <p className="text-gray-600 flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Kendriya Vidyalaya, Danapur Cantt
                </p>
                
                {/* <div className="bg-indigo-50 rounded-lg p-2 inline-block">
                  <span className="font-medium text-indigo-800">Percentage: 93.6%</span>
                </div> */}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">My Passion for Coding</h3>
            <p className="text-gray-600 mb-4">
              I love solving problems and building things through code. Programming isn't just my profession—it's my passion. 
              I enjoy exploring new technologies and enhancing my skills.
            </p>
            <p className="text-gray-600">
              I'm particularly passionate about Data Structures and Algorithms (DSA), and I regularly practice solving problems on 
              platforms like LeetCode, HackerRank, and CodeForces. My proficiency in multiple programming languages has allowed me 
              to tackle complex problems with ease, and I'm always looking to improve my skills and learn new concepts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Back End Development</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'Express', 'NodeJS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Front End Development</p>
                <div className="flex flex-wrap gap-2">
                  {['Next', 'ReactJS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'HTML', 'CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Miscellaneous</p>
                <div className="flex flex-wrap gap-2">
                  {['Amazon AWS', 'Machine Learning', 'MongoDB', 'BlockChain'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {['Team player', 'Bias for action', 'Deliver results'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Mobile:</span> +91-8083285661
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span> ashishk.dd22.cs@nitp.ac.in
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">LinkedIn:</span>{" "}
                <a href="https://linkedin.com/in/ashish-kumar-nitp" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                  linkedin.com/in/ashish-kumar-nitp
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">GitHub:</span>{" "}
                <a href="https://github.com/ashishkr375" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                  github.com/ashishkr375
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Portfolio:</span>{" "}
                <a href="https://ashishk.vercel.app/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                  ashishk.vercel.app
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> Patna, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;