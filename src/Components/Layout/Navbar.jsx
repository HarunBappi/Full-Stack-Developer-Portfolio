import React, { useEffect, useState } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utilities/constants';
import { scrollToSection, useScrollSpy } from '../../Hooks/useScrollSpy';
import { Code } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScroolled, setIsScrolled] = useState(false)
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const handleNavClick = (sectionId) =>{
        scrollToSection(sectionId)
        setIsMenuOpen(false)
    }
    return (
        <div>
            <nav className={`fixed top-o left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScroolled  ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}>
                <div className=''>
                    <div className=''>
                        {/* LOGO */}
                        <div className='flex items-center gap-4'>
                            <Code className="w-6 h-6 text-primary"></Code>
                            <button onClick={()=> window.scrollTo({top:0, behavior: "smooth"})}>
                                {PERSONAL_INFO.name.split('')[0]}
                            </button>
                        </div>
                        {/* Desktop navigations */}
                        <nav className=''>
                            {NAV_LINKS.map(link => {
                                <button key={link.id} onClick={()=> handleNavClick(link.id)}
                                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? "text-white" : "text-white/70 hover:text-white"}`}>
                                    {link.label}
                                </button>
                            })}
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;