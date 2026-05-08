import React from 'react';
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';
import RadialGradientBackground from '../Backgrounds/RadialGradientBackground';
import FadeIn from '../Animations/FadeIn';
import { Code2, Download, Sparkles } from 'lucide-react';
import { ABOUT_STATS, PERSONAL_INFO } from '../../utilities/constants';

const About = () => {
    // Skill
    const skill = [
        {name : "React.js", icon: SiReact, color: '#61DAFB'},
        {name : "Next.js", icon: SiNextdotjs, color: '#000000'},
        {name : "Redux", icon: SiRedux, color: '#61DAFB'},
        {name : "Tailwind CSS", icon:SiTailwindcss, color: '#06B6D4'},
        {name : "Node.js", icon:SiNodedotjs, color: '#339933'},
        {name : "MongoDB", icon: SiMongodb, color: '#47A248'},
    ]
    return <section id="about" className='relative py-10 bg-black overflow-hidden'>
        <RadialGradientBackground variant='about'>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Main Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                    {/* Left Column Content */}
                    <div className='flex flex-col gap-12'>
                        <div className='flex flex-col gap-8'>
                            <FadeIn delay={60}>
                                <div className='inline-flex gap-2.5 items-center px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                    <Code2 className='w-4 h-4 text-primary'></Code2>
                                    <span className='text-sm text-primary font-medium'>Full-Stack Developer</span>
                                    <Sparkles className='w-4 h-4 text-primary'></Sparkles>
                                </div>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>Crafting Digital Experiences that Matter</h2>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <div className='flex flex-col gap-4'>
                                    {PERSONAL_INFO.bio.map((paragraph, idx)=> 
                                    (
                                        <p key={idx} className='text-base text-white/70 leading-relaxed'>{paragraph}</p>
                                    )
                                    )}
                                </div>
                            </FadeIn>
                        </div>
                        <FadeIn delay={300}>
                            <div className='grid grid-cols-2 lg:grid-cols-3  gap-8 pl-3'>
                                {ABOUT_STATS.map((stat, idx) =>(
                                    <div key={idx} className='relative'>
                                        <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                                        <div className="text-3xl font-normal text-white mb-2 font-mono ">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-white/60 leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={400}>
                            <button onClick={()=>window.open(PERSONAL_INFO.resume, '_blank')} className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'>
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300'></Download>
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </RadialGradientBackground>
    </section>
};

export default About;