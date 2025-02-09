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
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
    },
    {
      question: 'What is Trak Twin?',
      answer: 'Trak Twin is a free rent management web app designed for landlords to keep track of renter information, rent payment history, and property listings.'
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
