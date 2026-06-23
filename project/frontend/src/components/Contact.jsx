import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Linkedin, Github } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import mine from '../assets/mine.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-3">Get in touch</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h2>
          <div className="h-px w-full bg-gradient-to-r from-white/18 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <img
                    src={mine}
                    alt="Sumanth Banisetti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white">Sumanth Banisetti</h3>
                  <p className="text-white/40 text-xs mt-0.5">Full-Stack Developer</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/12 border border-green-500/22 text-green-400 text-[11px] font-medium shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>

            {/* Email link */}
            <a
              href="mailto:sumanthbanisetti2354@gmail.com"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 shrink-0">
                <Mail className="w-4 h-4 text-white/45 group-hover:text-white/70 transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-white/35 mb-0.5">Email</p>
                <p className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                  sumanthbanisetti2354@gmail.com
                </p>
              </div>
            </a>

            {/* Social links */}
            <div className="space-y-2.5">
              <p className="text-xs text-white/35 font-medium tracking-[0.15em] uppercase px-1">
                Find me on
              </p>
              <a
                href="https://www.linkedin.com/in/sumanth-banisetti-19912a286/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-blue-600/8 border border-blue-500/18 hover:bg-blue-600/15 hover:border-blue-500/28 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/15 shrink-0">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium">LinkedIn</p>
                  <p className="text-xs text-white/35 truncate">sumanth-banisetti-19912a286</p>
                </div>
                <Send className="w-3.5 h-3.5 text-white/20 group-hover:text-blue-400 transition-colors duration-200 shrink-0" />
              </a>

              <a
                href="https://github.com/sumanth2354"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/18 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-white/8 shrink-0">
                  <Github className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium">GitHub</p>
                  <p className="text-xs text-white/35">sumanth2354</p>
                </div>
                <Send className="w-3.5 h-3.5 text-white/20 group-hover:text-white/55 transition-colors duration-200 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3.5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/28 focus:outline-none text-white text-sm placeholder-white/25 transition-colors duration-200"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/28 focus:outline-none text-white text-sm placeholder-white/25 transition-colors duration-200"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/28 focus:outline-none text-white text-sm placeholder-white/25 transition-colors duration-200"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/28 focus:outline-none text-white text-sm placeholder-white/25 transition-colors duration-200 resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
