import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "Kings Engineering College",
    degree: "Bachelor of Engineering",
    score: "CGPA 7.90",
    year: "2021 - Present",
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
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-primary text-sm font-medium tracking-wider uppercase">
            Get to know me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-cyan/20 rounded-2xl blur-xl" />
              <div className="relative bg-bg-card rounded-2xl p-8 border border-white/5">
                <h3 className="font-display text-2xl font-bold mb-4 text-accent-cyan">
                  My Story
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  I'm a passionate Frontend Developer with a keen eye for design and 
                  a love for creating seamless user experiences. My journey in web 
                  development started with curiosity and has evolved into a deep 
                  appreciation for clean, efficient code.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I specialize in building responsive web applications using modern 
                  technologies. When I'm not coding, you'll find me exploring new 
                  technologies, contributing to open-source projects, or honing 
                  my skills through continuous learning.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "Location", value: "Chennai, India" },
                    { label: "Education", value: "B.E. Computer Science" },
                    { label: "Email", value: "cvvignesh1620@gmail.com" },
                    { label: "Instagram", value: "@dhvi___1620" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-bg-secondary rounded-xl">
                      <p className="text-text-muted text-sm">{item.label}</p>
                      <p className="text-text-primary font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              Education <span className="text-accent-primary">&</span> Background
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 bg-bg-card rounded-xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                      {edu.institution}
                    </h4>
                    <span className="text-accent-primary text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-2">{edu.degree}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-accent-emerald/10 text-accent-emerald rounded-full text-sm font-medium">
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
