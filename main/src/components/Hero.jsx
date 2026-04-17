import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-cyan/5" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 py-20 relative z-10 text-center">
        <div
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6 border border-accent-primary/20">
            👋 Welcome to my portfolio
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Vignesh</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-4 font-light">
            Frontend Developer
          </p>

          <p className="text-text-muted max-w-lg mx-auto mb-8">
            Passionate about building beautiful, responsive web applications 
            with modern technologies. Turning ideas into elegant digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/25"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="px-8 py-3 glass rounded-xl font-medium text-text-primary hover:text-accent-cyan transition-all duration-200"
            >
              Learn more
            </a>
          </div>

          <div className="flex gap-6 mt-10 justify-center">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"
                  />
                ),
                href: "https://linkedin.com/in/vignesh-chinnasamy-0058a7238",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                  />
                ),
                href: "https://github.com/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-text-secondary group-hover:text-accent-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-text-muted hover:text-accent-cyan transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
