export default function Contact() {
  // ✅ Added email functionality like Hero.jsx
  const openEmailClient = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=nivedhanivedha083@gmail.com", "_blank");
  };

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3 text-black">Let's Connect</h2>
        <p className="text-gray-600 mb-4 max-w-md mx-auto">
          Want to collaborate or have a question? Just hit the button below and send me an email!
        </p>
        <button
          onClick={openEmailClient}
          className="group relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-300 ease-in-out transform hover:scale-105 bg-black border-2 border-black hover:bg-white hover:text-black rounded-md"
        >
          <span className="relative flex items-center gap-2">
            Click Me
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
