
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shanmugamani N",
      role: "Software Test Analyst Specialist",
      company: "Fidelity National Information Services, Inc. (FIS)",
      testimonial: "I have had a pleasure working with Anisa on several projects. Anisa consistently demonstrated a willingness to go above and beyond her responsibilities and was always willing to lend a helping hand to her teammates.She is a quick learner, thorough professional, team player and more committed to her work. Her ability to collaborate and communicate is outstanding. If you are looking for someone who can advance your team's performance look no further than Anisa.",
      rating: 5,
      date: "2025"
    },
    {
      id: 2,
      name: "Traci Eberly ",
      role: "Release Train Engineer/Scrum Master/Agile Coach/SPC", 
      company: "Fidelity National Information Services, Inc. (FIS)",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial: "Anisa is an incredible Software Engineer and Team Member. I have had the pleasure of being Anisa's Scrum Master during her time at FIS and am so grateful that I had the opportunity to work with her. She has a 'can do' attitude and has put in extra effort when it has been required to meet our clients deadlines. She is thorough and extremely knowledgeable. I highly recommend Anisa to get the job done quickly, detailed and with a smile on her face.",
      rating: 5,
      date: "2024"
    },
    {
      id: 3,
      name: "Prem S",
      role: "Project Manager ",
      company: "Fidelity National Information Services, Inc. (FIS)",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial: "It was Fantastic to work with Anisa. I had been a project Manager for Anisa for the last one year.Anisa is a motivated, forward-thinking and exceptionally good Tester. She knows the product well and was involved in automation for testing. I highly recommend for her work ethics, discipline and the ability to complete the job.",
      rating: 5,
      date: "2024"
    },
    {
      id: 4,
      name: "Sharmi Sathianathan",
      role: "Software Test Analyst Specialist",
      company: "Fidelity National Information Services, Inc. (FIS)",
      // image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      testimonial: "Anisa and I worked as colleagues at FIS Global for nearly 2 years. I thoroughly enjoyed my time working with Anisa. Being a quick learner and with her exceptional grasping skills, she became a truly valuable asset to our team. I would highly recommend her for her dedication, professionalism, and ability to deliver results.",
      rating: 5,
      date: "2024"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
  <section id="testimonials" className="testimonials-section section-padding pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="testimonials-icon">💬</span>
            <span className="text-lg font-semibold text-slate-300">Testimonials</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What peers and leaders say
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here’s what colleagues and managers have said about working with me on real projects.
          </motion.p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card glass-effect rounded-2xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="testimonial-header">
                <div className="client-info">
                  <div>
                    <h3 className="client-name text-xl font-bold text-slate-100 mb-1">{testimonial.name}</h3>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="client-company text-blue-400 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
                <div className="testimonial-meta">
                  <div className="rating">{renderStars(testimonial.rating)}</div>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text text-slate-300 text-lg italic">"{testimonial.testimonial}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;