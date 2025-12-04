import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Show success message
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">Contact</h2>
          <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Profile Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-white/10">
                <img
                  src="https://via.placeholder.com/100x100/1a1a1a/666666?text=SB"
                  alt="Sumanth Banisetti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Sumanth Banisetti</h3>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Available
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Useful links:</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/sumanth-banisetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sumanthbanisetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
              <a
                href="mailto:sumanth@example.com"
                className="inline-block mt-4 text-white/70 hover:text-white transition-colors duration-200"
              >
                sumanth@example.com
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/40 outline-none transition-colors duration-200"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/40 outline-none transition-colors duration-200"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/40 outline-none transition-colors duration-200"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/40 outline-none transition-colors duration-200 resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;