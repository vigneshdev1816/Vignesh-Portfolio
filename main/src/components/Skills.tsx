import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "HTML5",
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    level: 95,
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS3",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    level: 90,
    description: "Modern layouts & animations",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "from-yellow-500 to-green-500",
    level: 80,
    description: "Backend & data analysis",
  },
  {
    name: "SQL",
    icon: "🗄️",
    color: "from-purple-500 to-pink-500",
    level: 75,
    description: "Database management & queries",
  },
  {
    name: "GitHub",
    icon: "📦",
    color: "from-gray-400 to-gray-600",
    level: 85,
    description: "Version control & collaboration",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
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
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
            What I know
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative p-6 bg-bg-card rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-text-primary group-hover:text-accent-cyan transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-text-muted text-sm">{skill.description}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-text-muted text-sm">Proficiency</span>
                      <span className="text-accent-primary text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
