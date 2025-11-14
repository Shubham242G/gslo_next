'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion'; 
import emailjs from '@emailjs/browser';
import './bot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Moved questions outside of the component to ensure it's a stable reference
  const questions = [
    { id: 1, text: "Hi! What's your name?", type: "text", key: "name" },
    { id: 2, text: "What's your email address?", type: "email", key: "email" },
    {
      id: 3,
      text: "How can we help you?",
      type: "select",
      key: "service",
      options: [
        "NCLT",
        "Labor Law",
        "Intellectual-Property",
        "Hospitality-Law",
        "Family-Law",
        "Estate-Planning",
        "Debt-Recovery",
        "Criminal-Litigation",
        "Consumer-Law",
        "NRI services",
        "Property-Law",
        "RERA Compliance",
        "Startup advice",
        "Supreme court",
        "Writ litigation"
      ]
    },
  ];

  // Wrapped sendEmail in useCallback to prevent re-creation on every render
  const sendEmail = useCallback(() => {
    // Ensure all required answers are present before sending
    if (answers.name && answers.email && answers.service) {
      emailjs.send(
        'service_kranxad',
        'template_2gdcgwl',
        {
          name: answers.name,
          email: answers.email,
          service: answers.service
        },
        'am1VZPuktoi7yeO5J'
      ).then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    }
  }, [answers]);

  // Added all dependencies to the useEffect hook
  useEffect(() => {
    // The effect will now only run when 'answers' changes
    if (Object.keys(answers).length === questions.length) {
      sendEmail();
    }
  }, [answers, questions.length, sendEmail]);

  const handleAnswer = (answer) => {
    const q = questions[currentQuestion];
    setAnswers(prevAnswers => ({ ...prevAnswers, [q.key]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const goBack = () => {
    if (showWhatsApp) {
      setShowWhatsApp(false);
      // No need to change currentQuestion here, let the user re-answer the last question
      return;
    }
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Hi, here are my details:\nName: ${answers.name || 'N/A'}\nEmail: ${answers.email || 'N/A'}\nService: ${answers.service || 'N/A'}`;
    window.open(`https://wa.me/+918595650338?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  const renderQuestion = () => {
    if (showWhatsApp) {
      return (
        <div className="bot-whatsapp-screen">
          <h3 className="bot-title">✅ Thank you!</h3>
          <p className="bot-sub">Let’s continue this conversation on WhatsApp for a quicker response.</p>
          <button className="bot-btn-primary" onClick={handleWhatsAppRedirect}>💬 Open WhatsApp</button>
          <button className="bot-btn-secondary" onClick={goBack}>← Back</button>
          <button className="bot-btn-outline" onClick={resetChat}>🔄 Restart</button>
        </div>
      );
    }
      
    const q = questions[currentQuestion];
    if (!q) return null; // Defensive check in case currentQuestion is out of bounds

    return (
      <div className="bot-question-block">
        <div className="bot-question">{q.text}</div>
        <div className="bot-step">Question {currentQuestion + 1} of {questions.length}</div>

        {q.type !== "select" ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const input = e.target[0];
            if (input.value.trim()) {
              handleAnswer(input.value.trim());
            }
          }}>
            <input
              type={q.type}
              className="bot-input"
              placeholder={`Enter your ${q.key}`}
              defaultValue={answers[q.key] || ""}
              autoFocus
              required
            />
          </form>
        ) : (
          <div className="bot-options">
            {q.options.map((o, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(o)}
                className={`bot-option-btn ${answers[q.key] === o ? "active" : ""}`}
              >
                {o}
              </button>
            ))}
          </div>
        )}

        {currentQuestion > 0 && <button className="bot-back" onClick={goBack}>← Back</button>}
      </div>
    );
  };

  return (
    <div className="chatbot-fixed">
      {isOpen && (
        <motion.div 
            className="bot-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
        >
          <div className="bot-header">
            <span>GSLO Assistant</span>
            <button className="bot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="bot-body">{renderQuestion()}</div>
        </motion.div>
      )}

      <motion.button 
        className="bot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        💬
      </motion.button>
    </div>
  );
};

export default ChatBot;
