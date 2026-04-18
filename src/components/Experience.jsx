import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Expense Tracker – Money Management",
    description:
      "A practical web application designed to help users monitor and manage their daily finances efficiently. The system allows users to track income and expenses, categorize transactions, and maintain a clear overview of their financial status. It includes real-time balance updates, simple data visualization, and an intuitive interface for seamless user experience.",
    tech: ["Finance", "Expense Tracking", "JavaScript", "UI/UX"],
    color: "from-blue-500 to-cyan-500",
    year: "2026",
  },
  {
    title: "AI-Powered Knowledge Management",
    description:
      "A sophisticated system leveraging NLP and Knowledge Graphs to organize and retrieve information efficiently. Features semantic search, automatic categorization, and intelligent recommendations.",
    tech: ["NLP", "Knowledge Graphs", "Python"],
    color: "from-violet-600 to-purple-500",
    year: "2024",
  },
  {
    title: "Criminal Face Detection",
    description:
      "Real-time face detection system using computer vision for security applications. Integrates Flask backend with PostgreSQL for face matching and database management.",
    tech: ["OpenCV", "Flask", "PostgreSQL"],
    color: "from-red-500 to-orange-500",
    year: "2024",
  },
  {
    title: "Data Science Internship",
    description:
      "Comprehensive data analysis pipeline using Pandas and NumPy for processing, scikit-learn for ML models, and Tableau for visualization and reporting.",
    tech: ["Pandas", "NumPy", "scikit-learn", "Tableau"],
    color: "from-emerald-500 to-teal-500",
    year: "2023",
  },
];

const certifications = [
  { name: "Machine Learning", org: "Vcodez Innovating Ideas" },
  { name: "Data Science", org: "Prodigy Infotech" },
  { name: "Python, C++", org: "Cybernaut" },
  { name: "Smart India Hackathon", org: "Sathyabama University" },
];

export default function Experience() {
  const ref = useRef(null);
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
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase">My work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Projects & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="relative h-full group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative p-8 rounded-2xl glass glass-hover h-full transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-500 font-medium">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20 transition-colors"
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

        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            
            <div className="relative p-10 rounded-3xl glass border border-amber-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                  <p className="text-zinc-400 text-sm">Achievements and professional certifications</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{cert.name}</p>
                      <p className="text-zinc-500 text-xs">{cert.org}</p>
                    </div>
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
