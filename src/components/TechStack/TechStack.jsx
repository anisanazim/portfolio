import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'

import {
  SiDocker,
  SiGithub,
  SiCloudinary,
  SiVercel,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiPostgresql,
  SiMysql,
  SiAmazondynamodb,
  SiRedis,
  SiTableau,
  SiProbot,
  SiJupyter,
  SiGoogledatastudio,
  SiGooglecloud
} from 'react-icons/si'
import { FaAws, FaRocket,FaRProject, FaDatabase, FaCloud, FaJava, FaCode } from 'react-icons/fa'
import { GiBrain, GiBrainStem } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import { RiRobot2Fill } from 'react-icons/ri'
import { TbBrandPython } from 'react-icons/tb'
import { LuBrainCircuit } from 'react-icons/lu'
import { PiGraph, PiChartScatterBold } from 'react-icons/pi'
import { MdScatterPlot } from 'react-icons/md'


function TechStack() {
  // Tech Stack data organized by categories
  const techCategories = useMemo(() => [
    {
      id: 1,
      title: "Programming Languages",
      icon: FaCode,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      technologies: [
        { name: "Python", icon:SiPython , level: "Expert", color: "#ED8B00" },
        { name: "Java", icon: FaJava, level: "Advanced", color: "#ED8B00" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Intermediate", color: "#ED8B00" },
        { name: "Go", icon: FaCode, level: "Proficient", color: "#ED8B00" },
        { name: "SQL", icon: SiMysql, level: "Expert", color: "#ED8B00" },
        { name: "C/C++", icon: SiCplusplus, level: "Advanced", color: "#ED8B00" },
        { name: "TypeScript", icon: SiTypescript, level: "Proficient", color: "#ED8B00" }
      ]
    },
    {
      id: 2,
      title: "AI / Generative AI",
      icon: RiRobot2Fill,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      technologies: [
        { name: "Natural Language Processing", icon: GiBrainStem, level: "Advanced", color: "#61DAFB" },
        { name: "Retrieval-Augmented Generation (RAG)", icon: GiBrain, level: "Proficient", color: "#61DAFB" },
        { name: "Agentic AI", icon: RiRobot2Fill, level: "Proficient", color: "#61DAFB" },
        { name: "Prompt Engineering", icon: FaCode, level: "Proficient", color: "#61DAFB" },
        { name: "Fine-tuning & LoRA/QLoRA", icon: GiBrain, level: "Proficient", color: "#61DAFB" },
        { name: "LLM APIs & Tool Calling", icon: RiRobot2Fill, level: "Proficient", color: "#61DAFB" },
        { name: "PyTorch", icon: SiPytorch, level: "Expert", color: "#06B6D4" },
        { name: "TensorFlow", icon: SiTensorflow, level: "Advanced", color: "#06B6D4" },
        { name: "Hugging Face Transformers", icon: FaCode, level: "Proficient", color: "#06B6D4" }
      ]
    },
    {
      id: 3,
      title: "Frameworks & Libraries",
      icon: FaCode,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      technologies: [
        { name: "LangGraph", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "LangChain", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "LlamaIndex", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "MCP", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "Claude Agents SDK", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "FastAPI", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "DeepEval & RAGAS", icon: FaCode, level: "Proficient", color: "#47A248" },
        { name: "TensorRT-LLM", icon: FaCode, level: "Proficient", color: "#47A248" }
      ]
    },
    {
      id: 4,
      title: "Cloud & MLOps",
      icon: FaCloud,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      technologies: [
        { name: "AWS (SageMaker, Bedrock, EKS, Lambda, Fargate)", icon: FaAws, level: "Proficient", color: "#10A37F" },
        { name: "Docker", icon: SiDocker, level: "Intermediate", color: "#10A37F" },
        { name: "Kubernetes", icon: FaCloud, level: "Proficient", color: "#10A37F" },
        { name: "MLflow", icon: FaCode, level: "Proficient", color: "#10A37F" }
      ]
    },
    {
      id: 5,
      title: "Databases & Vector Retrieval",
      icon: FaDatabase,
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      technologies: [
        { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", color: "#CC785C" },
        { name: "MySQL", icon: SiMysql, level: "Expert", color: "#CC785C" },
        { name: "FAISS", icon: FaDatabase, level: "Proficient", color: "#CC785C" },
        { name: "SQL Server", icon: SiMysql, level: "Proficient", color: "#CC785C" }
      ]
    },
    {
      id: 6,
      title: "Software Engineering & Developer Tools",
      icon: FaCode,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      technologies: [
        { name: "REST APIs", icon: FaCode, level: "Advanced", color: "#26C6DA" },
        { name: "OAuth 2.0", icon: FaCode, level: "Proficient", color: "#26C6DA" },
        { name: "Microservices", icon: FaCode, level: "Advanced", color: "#26C6DA" },
        { name: "Kafka", icon: FaCode, level: "Proficient", color: "#26C6DA" },
        { name: "CI/CD", icon: FaCode, level: "Proficient", color: "#26C6DA" },
        { name: "Git & GitHub", icon: SiGithub, level: "Advanced", color: "#26C6DA" },
        { name: "Linux", icon: FaCode, level: "Proficient", color: "#26C6DA" },
        { name: "Jira, Agile & Scrum", icon: FaCode, level: "Proficient", color: "#26C6DA" },
        { name: "Claude Code, Codex & GitHub Copilot", icon: FaCode, level: "Proficient", color: "#26C6DA" }
      ]
    }
  ], [])

  // Project highlights using tech stack
  const projectHighlights = useMemo(() => [
    {
      id: 1,
      name: "CodeHub Platform",
      description: "Full-stack collaboration platform with real-time features",
      techUsed: ["Java 23", "Spring Boot", "React", "WebSocket", "MariaDB"],
      highlight: "Real-time code collaboration with 70+ language support"
    },
    {
      id: 2,
      name: "NatureGrain E-commerce",
      description: "Complete e-commerce solution with admin dashboard",
      techUsed: ["Spring Security", "React", "MySQL", "Cloudinary"],
      highlight: "JWT authentication with comprehensive admin panel"
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "Modern responsive portfolio with 3D animations",
      techUsed: ["React 19", "Three.js", "TailwindCSS 4", "Framer Motion"],
      highlight: "Performance-optimized with engaging user experience"
    }
  ], [])

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400'
      case 'Advanced': return 'text-blue-400'
      case 'Intermediate': return 'text-yellow-400'
      case 'Proficient': return 'text-purple-400'
      default: return 'text-slate-400'
    }
  }

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-slate-300">
                Technology Stack
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">Technologies</span> & Tools
            </motion.h1>

            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive overview of the technologies, frameworks, and tools I use to build 
              modern, scalable applications. From backend development to cloud deployment.
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  className={`glass-effect rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      return (
                        <motion.div
                          key={techIndex}
                          className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            x: 5,
                            backgroundColor: "rgba(51, 65, 85, 0.4)"
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <TechIcon 
                              className="w-5 h-5" 
                              style={{ color: tech.color }}
                            />
                            <span className="font-medium text-slate-200">
                              {tech.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${getLevelColor(tech.level)}`}>
                            {tech.level}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>

 
          {/* Call to Action */}
          <motion.div
            className="text-center glass-effect rounded-3xl p-12 border border-slate-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-white text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Let's Build Something Amazing
            </h3>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to leverage these technologies for your next project? 
              Let's discuss how we can create innovative solutions together.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TechStack
