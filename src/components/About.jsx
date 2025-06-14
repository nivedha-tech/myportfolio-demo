export default function About() {
  const skills = [
    'Python',
    'C Programming',
    'Java',
    'HTML',
    'CSS',
    'Javascript',
    'PostgreSQL',
    'MongoDB',
    'Power BI',
    'Reactjs',
    'Figma',
    'Canva & Gimp',
    'UI/UX Design',
    'Microsoft Suites',
    'Machine Learning',
    'Cloud Computing',
    'Postman',
    'Advanced Java',
    'MERN Stack',
    'Mobile App development',
    'Manual Testing',
    'Automation Testing'
    
  ]

  return (
    <section id="about" className="pt-8 pb-12 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">About Me</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
🎓Hi, I'm Nivedha K, a passionate and curious learner driven by technology and ideas !. 
With a background in Computer Applications, Eager to apply my technical and problem-solving skills in a dynamic organization, contribute to real-world projects, and grow as an IT professional.
            </p>
            <p className="text-gray-600 leading-relaxed">
🚀Quick learner with a proactive approach to challenges and a commitment to continuous improvement.
Seeking an opportunity where I can leverage my creativity, adaptability, and strong communication skills to contribute to innovative solutions, collaborate with diverse teams, and build a successful career in the tech industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
💻When I'm not coding, you'll find me learning new frameworks or building something cool for fun.
               I'm excited about the endless possibilities in tech and always ready for the next challenge!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-6">Technical Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
