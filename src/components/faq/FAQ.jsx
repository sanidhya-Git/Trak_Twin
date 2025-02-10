import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is an AI-powered platform designed to enhance solo travel experiences by intelligently matching travellers, planning personalized itineraries, enabling real-time trip adjustments, and fostering community engagement. '
    },
    {
      question: 'How does Trak Twin work?',
      answer: 'Trak Twin uses advanced AI to match solo travellers based on shared interests, suggest optimized travel plans, and provide real-time travel support. Connecting like-minded travellers and offering AI-powered recommendations, ensures an enjoyable and safe experience. '
    },
    {
      question: ' Is Trak Twin available worldwide?',
      answer: 'Currently, Trak Twin is available in select regions. We are constantly expanding to bring our services to more destinations.'
    },
    {
      question: ' Do I need to create an account to use Trak Twin? ',
      answer: 'You must sign up to access personalized matches, AI-powered itinerary planning, and other exclusive features.'
    },
    {
      question: 'What are the benefits of a premium subscription?',
      answer: 'Premium users enjoy enhanced AI-powered matchmaking, priority travel assistance, exclusive deals, and in-depth itinerary personalization.'
    },
    {
      question: 'How does Trak Twin ensure user privacy?',
      answer: 'We follow strict data privacy policies, encrypting user information and allowing complete control over profile visibility. '
    },
    {
      question: 'Can I interact with other travelers on Trak Twin? ',
      answer: 'Yes! Our platform includes group discussions, shared itineraries, and community forums to connect with fellow travelers.'
    },
   

  ];

  return (
    <div className="faq-container" id="FAQ">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
