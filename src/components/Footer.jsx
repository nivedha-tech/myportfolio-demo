export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">

          {/* Social Links */}
          <div className="mt-6 flex justify-center space-x-6">

            {/* GitHub */}
            <a
              href="https://github.com/nivedha-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 
                0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
                c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756
                -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 
                1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604
                -2.665-.305-5.467-1.334-5.467-5.931 
                0-1.311.469-2.381 1.236-3.221
                -.124-.303-.535-1.524.117-3.176 
                0 0 1.008-.322 3.301 1.23
                .957-.266 1.983-.399 3.003-.404 
                1.02.005 2.047.138 3.006.404 
                2.291-1.552 3.297-1.23 3.297-1.23
                .653 1.653.242 2.874.118 3.176
                .77.84 1.235 1.911 1.235 3.221 
                0 4.609-2.807 5.624-5.479 5.921
                .43.372.823 1.102.823 2.222v3.293
                c0 .319.192.694.801.576 
                4.765-1.589 8.199-6.086 8.199-11.386 
                0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

           

            {/* Gmail – Opens Gmail Compose */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=nivedhanivedha083@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 
                14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
 {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nivedhak26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14
                c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14
                c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268
                c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 
                1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 
                12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765
                c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} Nivedha K. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
