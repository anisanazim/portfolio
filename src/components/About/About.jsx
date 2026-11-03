import { motion } from "framer-motion";
import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { 
  FaServer, 
  FaReact, 
  FaDatabase, 
  FaJava, 
  FaLightbulb,
  FaGraduationCap,
  FaRocket,
  FaCode,
  FaBrain
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker
} from "react-icons/si";

// Lazy load GitHubContributions component
const GitHubContributions = lazy(() => import('./GitHubContributions'));

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Use passive listener for better performance
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  // Professional Highlights - Key achievements and competencies for recruiters
  const professionalHighlights = useMemo(() => [
    {
      category: "Project Excellence",
      icon: <FaRocket />,
      achievements: [
        { 
          title: "CodeHub Platform", 
          description: "Full-stack web application with Spring Boot & React",
          impact: "End-to-end development"
        },
        { 
          title: "NatureGrain E-commerce", 
          description: "E-commerce solution with secure payment integration",
          impact: "Production deployment"
        }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Technical Excellence", 
      icon: <FaCode />,
      achievements: [
        { 
          title: "Modern Stack Mastery", 
          description: "Java Spring Boot, React 19, MySQL expertise",
          impact: "Industry-standard skills"
        },
        { 
          title: "DevOps Integration", 
          description: "Docker containerization & deployment automation",
          impact: "Production-ready"
        }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Academic Achievement",
      icon: <FaGraduationCap />,
      achievements: [
        { 
          title: "Information Technology", 
          description: "Industrial University of Ho Chi Minh City",
          impact: "Strong foundation"
        },
        { 
          title: "Continuous Learning", 
          description: "Self-driven skill development & technology adoption",
          impact: "Growth mindset"
        }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ], []);

  const experiences = useMemo(() => [
    {
      icon: <FaRocket />,
      title: "Full-Stack Development", 
      description: "Building end-to-end applications with modern tech stack"
    },
    {
      icon: <FaCode />,
      title: "Software Engineering",
      description: "Building maintainable applications, enterprise software, and robust solutions using modern development practices."
    },
    {
      icon: <FaServer />,
      title: "Backend & API Engineering",
      description: "Designing scalable backend services, REST APIs, microservices, and distributed systems."
    },
    {
      icon: <FaBrain />,
      title: "AI & LLM Engineering",
      description: "Building intelligent AI agents, LLM-powered applications, RAG pipelines, and automated workflows."
    },
    {
      icon: <FaDatabase />,
      title: "Data Engineering",
      description: "Developing data pipelines, integrating diverse data sources, and transforming complex datasets into actionable insights."
    }
  ], []);

  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate developer creating digital experiences that make a difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Avatar & About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Avatar Section */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden glass-effect p-1">
                  <img
                    src="/avatar.jpg"
                    alt="Anisa Shaik"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center glass-effect">
                  <FaCode className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center glass-effect">
                  <FaRocket className="text-white text-lg" />
                </div>
              </div>
            </motion.div>

            <div className="card">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Hello! I'm Anisa Shaik</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a <span className="text-blue-400 font-semibold">Computer Science graduate</span> who enjoys solving challenging problems and turning ideas into working software. With experience in 
                  <span className="text-green-400 font-semibold"> software engineering, backend development, and AI-driven applications</span>, I enjoy building systems that are both practical and scalable.
                </p>
                <p>
                  I've worked on everything from developing <span className="text-green-400 font-semibold">enterprise applications and backend services</span> to building 
                  <span className="text-violet-400 font-semibold"> AI agents, LLM-powered workflows, and RAG systems</span>. What I find most exciting is understanding how things work behind the scenes, solving the difficult parts, and seeing an idea evolve into something people can actually use.
                </p>
                <p>
                  Beyond coding, I'm someone who enjoys exploring new technologies, learning by building, and collaborating with people who are passionate about what they do. I'm always looking for opportunities to grow as an engineer and work on problems that have a meaningful impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Experience Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 text-3xl mb-4 flex justify-center">
                  {exp.icon}
                </div>
                <h4 className="font-semibold text-slate-100 mb-2">{exp.title}</h4>
                <p className="text-slate-400 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}

export default About;
