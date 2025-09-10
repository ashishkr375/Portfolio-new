import NavLink from "../NavLink";

const Hero = () => (
  <section id="home" className="relative">
    <div className="custom-screen py-24 sm:py-32 text-gray-700">
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"></span>
          Available for freelance projects
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="md:w-3/5">
            <h1 className="font-extrabold tracking-tight text-gray-900 text-5xl sm:text-6xl md:text-7xl">
              Hi, I am <span className="text-gradient">Ashish Kumar</span> 👋
            </h1>

            <p className="mt-6 text-xl text-gray-700">
              Web Developer • Problem Solver • Tech Enthusiast
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Computer Science Engineering student at NIT Patna passionate about web development and blockchain technology. Skilled in multiple programming languages with a focus on problem-solving through Data Structures and Algorithms.
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm">
              <NavLink href="#contact" className="btn-primary">
                <span>Let's work together</span>
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </NavLink>
              <NavLink href="/assets/Ashish_Kumar_Resume.pdf" className="btn-ghost">
                <span>Download Resume</span>
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
              </NavLink>
            </div>

            <div className="mt-8 flex items-center gap-4 text-gray-600">
              <a href="https://linkedin.com/in/ashish-kumar-nitp" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 backdrop-blur hover:bg-white">
                <svg className="h-5 w-5 text-gray-500 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/ashishkr375" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 backdrop-blur hover:bg-white">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="mailto:ashishk.dd22.cs@nitp.ac.in" className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 backdrop-blur hover:bg-white">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-red-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <span className="text-sm font-medium">Email</span>
              </a>
              <a href="https://ashishk.vercel.app/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-3 py-2 backdrop-blur hover:bg-white">
                <svg className="h-5 w-5 text-gray-600 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00-.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" /></svg>
                <span className="text-sm font-medium">Website</span>
              </a>
            </div>
          </div>

          <div className="md:w-2/5 mt-12 md:mt-0">
            <div className="relative">
              <div className="relative rounded-2xl bg-white p-1">
                <img src="/profile.jpg" alt="Ashish Kumar" className="rounded-xl shadow-xl w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-3 shadow-lg rounded-xl">
                <p className="font-semibold text-gray-800">
                  <span className="block text-xs text-gray-500">Based in</span>
                  Patna, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
