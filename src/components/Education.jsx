import { useState, useEffect, useCallback } from 'react';

export default function Education() {
  const [currentCert, setCurrentCert] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

const education = [
  {
    degree: "Bachelor of Computer Applications(BCA)",
    institution: "Stella Maris College",
    duration: "2022 - 2025",
    description: "Studying core subjects like programming, database systems, web development, and software engineering, with practical exposure to real-world applications in IT.",
    image: "/assets/smc.png",
    cgpa: "67%"
  },
  {
    degree: "High School Leaving Certificate (HSLC)",
    institution: "Sri Venkateshwara Matriculation Higher Secondary School",
    duration: "2019 - 2022",
    description: "Completed higher secondary education with a specialization in Computer Science, covering programming basics, mathematics, and logical reasoning.",
    image: "/assets/svm.png",
    cgpa: "93%"
  }
];


  const certifications = [
    {
      title: "Google Cloud Computing Foundation",
      issuer: "Alison",
      date: "August 2024",
      credentialId: "Online",
    description: "Learned core concepts of cloud computing, Google Cloud services, and infrastructure.",
      image: "/assets/cloud.png"
    },
    {
      title: "Python for Machine Learning",
      issuer: "Great Learning",
      date: "August 2024",
      credentialId: "Online",
    description: "Learned Python basics, data handling, and ML libraries like NumPy and pandas.",
      image: "/assets/python.jpg"
    },
    {
      title: "Data Analytics using Power BI",
      issuer: "Syasans",
      date: "September 2024",
      credentialId: "Offline",
    description: "Explored Power BI tools for data cleaning, visualization, and dashboard creation.",
      image: "/assets/powerbi.jpg"
    },
     {
      title: "UI/UX Foundation",
      issuer: "Great Learning",
      date: "September 2024",
      credentialId: "Online",
     description: "Understood basics of user interface design and user experience principles.",
      image: "/assets/figma.png"
    },
    {
      title: "First Aid and Basic Life Support",
      issuer: "Apollo Hospital",
      date: "January 2023",
      credentialId: "Offline",
    description: "Trained in emergency response, CPR, and basic life-saving techniques.",
      image: "/assets/heal.jpg"
    },
    {
      title: "Elocution Competition",
      issuer: "Marathal Thagumo",
      date: "November 2022",
      credentialId: "Offline",
    description: "Participated in public speaking and demonstrated effective communication skills.",
      image: "/assets/sold.jpg"
    }
  ];

  const nextCert = useCallback(() => {
    setCurrentCert((prev) => (prev + 1) % certifications.length);
  }, [certifications.length]);

  const prevCert = () => {
    setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  // Auto-navigation effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextCert();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, nextCert]);

  // Handle dot click - pause auto-navigation
  const handleDotClick = (index) => {
    setCurrentCert(index);
    setIsPaused(true);
  };

  // Resume auto-navigation when mouse leaves the navigation area
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="education" className="pt-12 pb-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-3">Education</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={edu.image}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/smc.png';
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">{edu.degree}</h4>
                      <p className="text-gray-600 mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-500 mt-2 md:mt-0">{edu.duration}</span>
                    <span className="text-gray-700 font-medium mt-1">Percentage: {edu.cgpa}</span>
                  </div>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section with Carousel */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-3">Certifications</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={certifications[currentCert].image}
                      alt={`${certifications[currentCert].title} logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder.png';
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                  <h4 className="text-2xl font-semibold text-black">{certifications[currentCert].title}</h4>
                </div>
                <p className="text-gray-600 mb-3">{certifications[currentCert].issuer}</p>
                <p className="text-gray-600 mb-4">{certifications[currentCert].description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{certifications[currentCert].date}</span>
                  <span>Mode: {certifications[currentCert].credentialId}</span>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div 
              className="flex justify-center items-center mt-6 space-x-4"
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  prevCert();
                  setIsPaused(true);
                }}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous certification"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentCert === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to certification ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  nextCert();
                  setIsPaused(true);
                }}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next certification"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 