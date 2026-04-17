import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AI-Powered Knowledge Management System",
    description:
      "A sophisticated system leveraging NLP and Knowledge Graphs to organize and retrieve information efficiently. Features semantic search, automatic categorization, and intelligent recommendations.",
    tech: ["NLP", "Knowledge Graphs", "Python"],
    color: "from-violet-500 to-purple-500",
    icon: "🤖",
  },
  {
    title: "Criminal Face Detection",
    description:
      "Real-time face detection system using computer vision for security applications. Integrates Flask backend with PostgreSQL for face matching and database management.",
    tech: ["OpenCV", "Flask", "PostgreSQL"],
    color: "from-red-500 to-orange-500",
    icon: "🔍",
  },
  {
    title: "Data Science Internship Project",
    description:
      "Comprehensive data analysis pipeline using Pandas and NumPy for processing, scikit-learn for ML models, and Tableau for visualization and reporting.",
    tech: ["Pandas", "NumPy", "scikit-learn", "Tableau"],
    color: "from-emerald-500 to-teal-500",
    icon: "📊",
  },
];

const certifications = [
  "Machine Learning - Vcodez Innovating Ideas",
  "Data Science - Prodigy Infotech",
  "Python, C++ - Cybernaut",
  "Smart India Hackathon - Sathyabama University",
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-secondary text-sm font-medium tracking-wider uppercase">
            My work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Projects & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}
                />
                <div className="relative p-8 bg-bg-card rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative p-8 bg-bg-card rounded-2xl border border-accent-yellow/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏆</span>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Certifications & Achievements
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-bg-secondary rounded-xl group hover:bg-accent-yellow/10 transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-accent-yellow/20 rounded-lg">
                      <svg
                        className="w-5 h-5 text-accent-yellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
