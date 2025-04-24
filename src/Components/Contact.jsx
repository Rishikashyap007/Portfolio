import React, { useState, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, Loader, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact-me");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
  
    try {
      await emailjs.send(
        serviceId,   // replace with your Service I
        templateId,
        formData,
        publicKey    // replace with your Public Key
      );
  
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ submitting: false, submitted: true, error: null });
      toast.success("Email sent successfully!")
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
        toast.error('Failed to send email. Please try again.')
      console.error('Email sending failed:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, submitted: false, error: null });
    
//     try {
//       // This is where you would integrate with an email service
//       // For example with EmailJS, Formspree, etc.
      
//       // Example with a timeout to simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Reset form after successful submission
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setStatus({ submitting: false, submitted: true, error: null });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setStatus(prev => ({ ...prev, submitted: false }));
//       }, 5000);
//     } catch (error) {
//       setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
//     }
//   };

  return (
    <section id="contact-me" className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-60 right-40 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
              Contact Me
            </span>
          </h2>
          <div className="flex justify-center mb-16">
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto relative">
              Have a question or want to work together? Send me a message!
              <span className="block h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6 rounded-full"></span>
            </p>
          </div>
        </div>
        
        <div className={`max-w-2xl mx-auto bg-gray-800/80 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700 p-6 md:p-8 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {status.submitted ? (
            <div className="bg-blue-900/30 border border-blue-500 text-blue-300 px-4 py-3 rounded-xl mb-6 flex items-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          ) : status.error ? (
            <div className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded-xl mb-6 flex items-center">
              <span>{status.error}</span>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-blue-300 font-medium">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500/70" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900/60 text-white border border-gray-700 rounded-xl pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-blue-300 font-medium">
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500/70" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900/60 text-white border border-gray-700 rounded-xl pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-blue-300 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-900/60 text-white border border-gray-700 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Job Opportunity"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-blue-300 font-medium">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-blue-500/70" size={18} />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-900/60 text-white border border-gray-700 rounded-xl pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Hello, I'd like to discuss a project with you..."
                  required
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={status.submitting}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl w-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70"
            >
              {status.submitting ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;