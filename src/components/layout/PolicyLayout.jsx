import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export const PolicyLayout = ({ children, title, toc, lastUpdated }) => {
  const [activeId, setActiveId] = useState("");
  const location = useLocation();

  // Simple scroll spy for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      toc.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is near the top of the viewport
          if (rect.top <= 150) {
            current = item.id;
          }
        }
      });
      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const navLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Captain Guidelines", path: "/guidelines" },
    { name: "Child Safety Policy", path: "/child-safety" }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1c] font-sans selection:bg-[#EF4F5F]/20 selection:text-[#EF4F5F]">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between max-w-[1400px]">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Woosh" className="h-8 object-contain"  />
            </Link>
            
            {/* Minimal Header Links similar to Zomato */}
            <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-600">
              <Link to="/" className="hover:text-[#EF4F5F] transition-colors">Home</Link>
              <a href="#" className="hover:text-[#EF4F5F] transition-colors">Safety</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="container mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row gap-8 lg:gap-16 py-10 items-start">
        
        {/* Left Sidebar (Navigation) */}
        <aside className="hidden md:block w-[240px] shrink-0 sticky top-[120px]">
          <div className="flex flex-col gap-1">
            <div className="text-gray-500 font-semibold mb-3 text-[13px] uppercase tracking-wider px-4">
              Guidelines and Policies
            </div>
            
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`px-4 py-2.5 font-medium rounded-xl transition-all border-l-4 ${
                    isActive 
                      ? "text-[#EF4F5F] bg-[#FFF0F5] border-[#EF4F5F]" 
                      : "text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            
            <div className="text-gray-500 font-semibold mt-6 mb-3 text-[13px] uppercase tracking-wider px-4">
              Products
            </div>
            <a href="#" className="px-4 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-all border-l-4 border-transparent">
              Woosh Queens App
            </a>
            <a href="#" className="px-4 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-all border-l-4 border-transparent">
              Woosh Rider App
            </a>
          </div>
        </aside>

        {/* Center Content (The Policy Text) */}
        <main className="flex-1 min-w-0 md:border-l border-gray-100 md:pl-8 lg:pl-12 pb-32">
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-8 font-medium">
             <a href="/" className="hover:text-black">Home</a>
             <span>›</span>
             <span className="text-[#EF4F5F] bg-[#FFF0F5] px-2 py-0.5 rounded-md">{title}</span>
           </div>
           
           <h1 className="text-4xl md:text-[3.5rem] font-extrabold mb-4 text-[#1c1c1c] tracking-tight">{title}</h1>
           <p className="text-gray-500 italic mb-12 text-[15px]">Last updated on {lastUpdated}</p>

           {/* The content injected here will be styled by Tailwind Prose or custom classes */}
           <div className="prose prose-lg max-w-none prose-headings:text-[#1c1c1c] prose-headings:font-bold prose-h2:text-[1.75rem] prose-h2:tracking-tight prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100 prose-h3:text-[1.25rem] prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-6 prose-li:text-gray-600 prose-li:leading-[1.8] prose-a:text-[#EF4F5F] prose-a:no-underline hover:prose-a:underline">
             {children}
           </div>
        </main>

        {/* Right Sidebar (Table of Contents) */}
        <aside className="hidden lg:block w-[280px] shrink-0 sticky top-[120px]">
           <div className="relative">
             {/* Red animated line for active state, Zomato style */}
             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 rounded-full" />
             <div 
               className="absolute left-0 w-[2px] bg-[#EF4F5F] rounded-full transition-all duration-300"
               style={{
                 height: '24px',
                 top: `${Math.max(0, toc.findIndex(t => t.id === activeId)) * 36 + 48}px` 
               }}
             />

             <h4 className="font-bold text-[#1c1c1c] mb-5 pl-5 text-[15px]">Applicability and Scope</h4>
             <ul className="flex flex-col gap-3 text-[13px] pl-5">
               {toc.map((item, idx) => (
                 <li key={idx} className="h-6 flex items-center">
                   <a 
                     href={`#${item.id}`} 
                     className={`transition-colors line-clamp-1 w-full font-medium ${
                       activeId === item.id || (!activeId && idx === 0)
                         ? "text-[#EF4F5F]" 
                         : "text-gray-500 hover:text-black"
                     }`}
                   >
                     {item.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
        </aside>

      </div>
    </div>
  )
}
