import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "Kings Engineering College",
    degree: "B.E. CSE (AI & DS)",
    score: "CGPA 7.90",
    year: "2021 - 2025",
  },
  {
    institution: "Sriram Matric Hr Sec School",
    degree: "Higher Secondary",
    score: "74.2%",
    year: "2019 - 2021",
  },
  {
    institution: "Oxford Matriculation School",
    degree: "Secondary Education",
    score: "52.8%",
    year: "2019",
  },
];

export default function About() {
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
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">Get to know me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur-xl" />
              <div className="relative glass rounded-3xl p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                
                <p className="text-zinc-400 leading-relaxed mb-6">
                  I'm a passionate Frontend Developer with a keen eye for design and 
                  a love for creating seamless user experiences. My journey in web 
                  development started with curiosity and has evolved into a deep 
                  appreciation for clean, efficient code.
                </p>
                
                <p className="text-zinc-400 leading-relaxed mb-8">
                  I specialize in building responsive web applications using modern 
                  technologies. When I'm not coding, you'll find me exploring new 
                  technologies, contributing to open-source projects, or honing 
                  my skills through continuous learning.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Location", value: "Chennai, India", icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    )},
                    { label: "Education", value: "B.E. CSE (AI & DS)", icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    )},
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                        <p className="text-zinc-500 text-sm">{item.label}</p>
                      </div>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />
              
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-20 transition-all duration-500"
                    style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
                  >
                    <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-[#030014] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    
                    <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <h4 className="font-semibold text-white text-lg">
                          {edu.institution}
                        </h4>
                        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm mb-3">{edu.degree}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {edu.score}
                      </div>
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
