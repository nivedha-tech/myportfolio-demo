const projects = [
  {
    title: 'Chat Application',
    description: 'Developed a mobile chat application which initiate conversations and Firebase for real-time data storage.',
    image: '/assets/project1.jpeg',
    technologies: ['Java', 'Firebase' , 'XML','RecyclerView','Glide & Picasso'],

    githubLink: 'https://github.com/nivedha-tech/final-textly-app.git',
  },
  {
    title: 'Beauty Cart Online',
    description: 'Designed a makeup shopping website enhancing user engagement and experience. ',
    image: '/assets/project2.png',
    technologies: ['React JS','Props & Components','React Router DOM','State Management '],
    githubLink: 'https://github.com/nivedha-tech/React.js-Glamour-Nest.git',
  },
  {
    title: 'AI Resume Builder & Job Portal',
    description: 'Developed MERN Stack with AI-powered resume builder,admin page,job seekers page for job management',
    image: '/assets/project3.jpeg',
    technologies: ['React JS', 'Express.js', 'Mongo DB', 'Node.js','Postman'],
    githubLink: 'https://github.com/nivedha-tech/final-year-project.git',
  },
];

const programmingProjects = [
  {
    title: 'Data Analysis(Music taste and preference)',
    description: 'Conducted data analysis using machine learning to predict music tastes and enhance personalized recommendations. Built predictive models leveraging user behavior and genre trends for accurate preference insights.',
    technologies: ['Decision Tree', 'Random Forest', 'K-Nearest Neighbors', 'Naive Bayes'],
    image: '/assets/python-logo.gif',
  },
  {
    title: 'Future Leaders Ballot',
    description: 'Designed and developed a Java-based voting system with user detail collection and voter eligibility validation. Implemented real-time vote counting and instant winner announcement for fair and transparent elections.',
    technologies: ['Pointer & Management', 'Structures & Functions','Makefile','File I/O'],
    image: '/assets/c-logo.png',
  },
  {
    title: 'Two Wheeler & Four Wheeler Parking System',
    description: 'Developed a Java-based two-wheeler and four-wheeler parking system with secure login and user authentication. Implemented parking hour tracking and automated bill generation for efficient parking management.',
    technologies: ['OOPS Concept', 'Exception Handling', 'Constructors'],
    image: '/assets/java-logo.gif',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-4 pb-4 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Web Development Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">Web Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${
                      index === 0 ? 'mt-5' :
                      index === 1 ? 'mt-6' :
                      index === 2 ? 'mt-7' :
                      ''
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>          
                  <div className="flex gap-4">
         
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 font-medium flex items-center gap-1"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">Programming Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {programmingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={project.image} 
                    alt={`${project.title} logo`}
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
            
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
