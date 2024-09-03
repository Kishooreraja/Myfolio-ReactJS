import React, { useState } from 'react';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const [quote, setQuote] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' }); // State for toast message

  const quotes = [
    "Believe in yourself and all that you are.",
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  ];

  React.useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'k_service',
      'template_5z91872',
      e.target,
      'jsbFK2t9-s8PRrjHx'
    ).then((result) => {
        setToast({ message: 'Message sent successfully!', type: 'success' });
        setFormData({
          from_name: '',
          reply_to: '',
          subject: '',
          message: '',
        });

        setTimeout(() => {
          setToast({ message: '', type: '' }); // Hide toast after 4 seconds
        }, 4000);
    }, (error) => {
        setToast({ message: 'Failed to send message, please try again.', type: 'error' });

        setTimeout(() => {
          setToast({ message: '', type: '' }); // Hide toast after 4 seconds
        }, 4000);
    });
  };

  return (
    <div className="relative bg-black text-white py-8" id="contact">
      {toast.message && (
        <div className={`fixed top-4 right-4 p-4 text-white rounded-lg shadow-lg text-md transition-opacity duration-300 ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} ${toast.message ? 'opacity-100' : 'opacity-0'}`}>
          {toast.message}
        </div>
      )}
      <div className='mt-20'> 
      <h2 className=" text-3xl font-bold text-center mb-12">Contact Me</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={sendEmail} className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full md:w-3/4 mx-auto glass">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 text-white placeholder-gray-400 bg-transparent"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 text-white placeholder-gray-400 bg-transparent"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 rounded-lg border border-gray-300 text-white placeholder-gray-400 bg-transparent"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 text-white placeholder-gray-400 bg-transparent"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-wrap gap-6 mb-8">
            <li>
              <a href="https://www.linkedin.com/in/kishoore-raja" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className="w-12 h-12 transition-transform transform hover:scale-125" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kishooreraja" target="_blank" rel="noopener noreferrer">
                <img src={github} className="w-12 h-12 transition-transform transform hover:scale-125" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} className="w-12 h-12 transition-transform transform hover:scale-125" alt="WhatsApp" />
              </a>
            </li>
            <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kishoore25@gmail.com" target="_blank" rel="noopener noreferrer">
  <img src={email} className="w-12 h-12 transition-transform transform hover:scale-125" alt="Email" />
            </a>
            </li>
          </ul>
          <p className="text-lg italic mb-6 text-center">{quote}</p>
          <p className="text-sm text-center mt-8">&copy; 2024 Kishoore Portfolio</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
