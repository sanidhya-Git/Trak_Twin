import React from "react";



import { PhoneIcon } from "../../assets/icons";
import { LuMail } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import faq from "../../assets/t2.pdf";




const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10">
      <div className="footer-top">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Brand Section */}
          <div className="footer-brand space-y-4">
            <a href="#" className="logo inline-block">
              <img src={logo} alt="Trak Twin logo" className="w-40" />
            </a>
            <p className="footer-text text-gray-400">
              Trak Twin enhances solo travel with AI-driven matching, tailored itineraries, real-time updates, pre-trip connections, and a vibrant travel community.
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-contact space-y-4">
            <h4 className="contact-title text-lg font-semibold">Contact Us</h4>
            <p className="contact-text text-gray-400">Feel free to contact and reach us!</p>
            <ul className="space-y-2">
              <li className="contact-item flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-blue-500" />
                <a href="tel:+919785701319" className="contact-link hover:text-blue-400">
                  +91 9785701319
                </a>
              </li>
              <li className="contact-item flex items-center space-x-2">
                <LuMail className="w-5 h-5 text-blue-500" />
                <a href="mailto:traktwin@gmail.com" className="contact-link hover:text-blue-400">
                  traktwin@gmail.com
                </a>
              </li>
              <li className="contact-item flex items-center space-x-2">
                <FaQuestion className="w-5 h-5 text-blue-500" />
                <a href="#FAQ" className="contact-link hover:text-blue-400">
                  FAQ'S
                </a>
              </li>              
              <li className="contact-item flex items-center space-x-2"> 
                <MdPrivacyTip className="w-5 h-5 text-blue-500" />               
                <a href={faq} target="_blank" rel="noopener noreferrer" className="contact-link hover:text-blue-400">
                  Privacy and Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="footer-map">
            <h4 className="text-lg font-semibold">Our Location</h4>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1227315718415!2d75.81574347507417!3d26.8678414766739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b51669dee9%3A0x3708a6ae96453829!2sBhamashah%20Techno%20Hub!5e0!3m2!1sen!2sin!4v1731066236773!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom border-t border-gray-700 mt-10 pt-4">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            &copy; 2025 Trak Twin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
