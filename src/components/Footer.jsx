export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#02000a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <a href="#home" className="text-3xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Vignesh</span>
          </a>
          
          <p className="text-zinc-500 mb-8 max-w-md">
            Building digital experiences that inspire. Let's create something amazing together.
          </p>
          
          <div className="flex items-center gap-4 mb-8">
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
              { name: 'Email', href: 'mailto:cvvignesh1620@gmail.com', icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Vignesh. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
