import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[200px]" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="mb-10">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
              <div className="relative">
                <img 
                  src="/vick.jpg" 
                  alt="Vignesh Chinnasamy" 
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/20 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#030014] animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-300">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Vignesh Chinnasamy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-6 max-w-2xl mx-auto">
            A passionate <span className="gradient-text-alt font-semibold">Frontend Developer</span> crafting beautiful digital experiences
          </p>
          
          <p className="text-zinc-500 max-w-lg mx-auto mb-10">
            Transforming ideas into elegant, user-friendly web applications. 
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient" />
              <span className="absolute inset-[2px] bg-[#030014] rounded-full transition-all duration-300 group-hover:bg-transparent" />
              <span className="relative flex items-center gap-2">
                Let's Talk
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-medium text-zinc-300 glass glass-hover transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/in/vignesh-chinnasamy-0058a7238', icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
              )},
              { name: 'GitHub', href: 'https://github.com/vigneshdev1816', icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              )},
              { name: 'Instagram', href: 'https://instagram.com/dhvi___1620', icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              )},
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-xl transition-all duration-300 hover:scale-110 group"
                title={social.name}
              >
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}