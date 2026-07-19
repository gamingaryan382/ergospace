import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, RefreshCw, Award, Smile, X } from 'lucide-react';

export default function RecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({ height: '', duration: '', usecase: '', painpoint: '' });
  const [quizCompleted, setQuizCompleted] = useState(false);

  // B2B Quote Modal States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: '', company: '', email: '', phone: '', quantity: '5', message: '' });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setIsQuoteModalOpen(false);
      setQuoteSubmitted(false);
      setQuoteForm({ name: '', company: '', email: '', phone: '', quantity: '5', message: '' });
      resetQuiz();
    }, 2500);
  };

  const steps = [
    {
      id: 'height',
      question: 'What is your physical height range?',
      description: 'We calibrate desk ranges and headrest curves to match body profiles.',
      options: [
        { label: 'Petite / Under 5\'4\"', value: 'petite' },
        { label: 'Average / 5\'4\" to 6\'0\"', value: 'average' },
        { label: 'Tall / Above 6\'0\"', value: 'tall' }
      ]
    },
    {
      id: 'duration',
      question: 'How long do you sit at your workstation daily?',
      description: 'Longer blocks require active posture relief systems.',
      options: [
        { label: '4 to 6 Hours (Moderate sitting)', value: 'moderate' },
        { label: '6 to 10 Hours (Extended screen work)', value: 'extended' },
        { label: '10+ Hours (High intensity focus)', value: 'extreme' }
      ]
    },
    {
      id: 'usecase',
      question: 'What is your primary workspace activity?',
      description: 'We optimize desk surface zones to support hardware requirements.',
      options: [
        { label: 'Software Engineering / Coding', value: 'coding' },
        { label: 'Creative Design / Editing', value: 'design' },
        { label: 'Business Management / Writing', value: 'management' },
        { label: 'High-Performance Gaming', value: 'gaming' }
      ]
    },
    {
      id: 'painpoint',
      question: 'What is your primary physical focus area?',
      description: 'Select the biomechanical discomfort you want to eliminate.',
      options: [
        { label: 'Lower back stiffness / Lumbar compression', value: 'back' },
        { label: 'Shoulder tightness / Neck strain', value: 'neck' },
        { label: 'General focus fatigue / Decluttering needs', value: 'fatigue' }
      ]
    }
  ];

  const handleSelect = (optionValue) => {
    const key = steps[currentStep].id;
    setAnswers((prev) => ({ ...prev, [key]: optionValue }));

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({ height: '', duration: '', usecase: '', painpoint: '' });
    setCurrentStep(0);
    setQuizCompleted(false);
  };

  // Logic to determine recommended package
  const getRecommendation = () => {
    const desk = PRODUCTS.find((p) => p.id === 'zenith-desk');
    const chair = PRODUCTS.find((p) => p.id === 'astra-chair');
    const arm = PRODUCTS.find((p) => p.id === 'element-arm');
    const pad = PRODUCTS.find((p) => p.id === 'wool-pad');

    if (answers.duration === 'extreme' || answers.painpoint === 'back') {
      // Recommends The Full Flow Package (Desk + Chair + Pad)
      return {
        title: 'The Spinal Flow Suite',
        description: 'For professionals spending 10+ hours coding or designing. Incorporates dynamic spinal tracking and standing transitions to restore lumbar health.',
        items: [chair, desk, pad],
        reasons: [
          'Astra Chair adaptive lumbar matrix neutralizes lower spine compression.',
          'Zenith Standing Desk dual-motor transitions activate blood flow every 90 minutes.',
          'Merino Felt pad cushions wrists during high-intensity typing blocks.'
        ]
      };
    } else if (answers.painpoint === 'neck' || answers.usecase === 'design') {
      // Recommends The Visualist Base (Chair + Arm + Pad)
      return {
        title: 'The Design Ergonomic Studio',
        description: 'Optimized for visual editors and designers. Calibrates monitor eye line heights to eliminate cervical spine stiffness.',
        items: [chair, arm, pad],
        reasons: [
          'Element Monitor Arm floats monitor to perfect eye-level, eliminating neck tilt.',
          'Astra Chair 3D headrest cradles the neck during focus reclines.',
          'Wool felt mat anchors graphics tablets and accessories cleanly.'
        ]
      };
    } else {
      // Recommends The Focus Foundations (Desk + Chair)
      return {
        title: 'The Executive Focus Hub',
        description: 'A classic, clean foundation for writers, managers, and remote builders looking to build a high-performance office.',
        items: [chair, desk],
        reasons: [
          'Sleek solid American Oak desk matches clean luxury corporate aesthetics.',
          'Synchro-tilt chair gear matches natural body movements during phone calls and deep work.'
        ]
      };
    }
  };

  const recommendation = quizCompleted ? getRecommendation() : null;

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '90vh', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center' }}>
      <div className="container-premium" style={{ width: '100%', maxWidth: '750px' }}>
        
        {!quizCompleted ? (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '4rem 3rem',
            boxShadow: 'var(--shadow-premium)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Progress Bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              height: '4px',
              backgroundColor: 'var(--accent)',
              transition: 'width 0.4s ease-out'
            }} />

            {/* Back Button */}
            {currentStep > 0 && (
              <button 
                onClick={handleBack}
                style={{
                  background: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem'
                }}
              >
                <ArrowLeft size={14} />
                <span>Go Back</span>
              </button>
            )}

            {/* Question Text */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Question {currentStep + 1} of {steps.length}
              </span>
              
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 600,
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                {steps[currentStep].question}
              </h2>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                {steps[currentStep].description}
              </p>
            </div>

            {/* Selection Options list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-primary)',
                    border: answers[steps[currentStep].id] === opt.value ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '6px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => { if (answers[steps[currentStep].id] !== opt.value) e.currentTarget.style.borderColor = 'var(--text-secondary)'; }}
                  onMouseLeave={(e) => { if (answers[steps[currentStep].id] !== opt.value) e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={16} style={{ opacity: 0.5 }} />
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* RESULT DISPLAY CARD */
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '4rem 3rem',
            boxShadow: 'var(--shadow-premium)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(181, 142, 88, 0.15)',
                color: 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Smile size={24} />
              </div>
              
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600 }}>
                {recommendation.title}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0.5rem auto 0 auto', fontWeight: 300, lineHeight: 1.6 }}>
                {recommendation.description}
              </p>
            </div>

            {/* List of Reasons why recommended */}
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              padding: '2rem',
              marginBottom: '2.5rem'
            }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
                Why this configuration works:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {recommendation.reasons.map((reason, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 300 }}>
                    <Check size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions panel */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-primary"
                style={{ flex: 2, padding: '1.2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
              >
                <span>Request Package Quote</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={resetQuiz}
                className="btn-secondary"
                style={{ flex: 1, padding: '1.2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
              >
                <RefreshCw size={16} />
                <span>Retake Quiz</span>
              </button>
            </div>

          </div>
        )}

      </div>

      {/* B2B Quote Modal Overlay */}
      {isQuoteModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          color: 'var(--text-primary)'
        }} onClick={() => setIsQuoteModalOpen(false)}>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '3rem',
            width: '100%',
            maxWidth: '550px',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button 
              onClick={() => setIsQuoteModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={20} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                ErgoSpace Recommendation
              </span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                Request Package Quote
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Submit quote request for the recommended package: "{recommendation.title}". We will configure wholesale enterprise pricing.
              </p>
            </div>

            {quoteSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(235, 10, 30, 0.1)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Check size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Quote Request Received</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    A premium office workspace consultant will email you a proposal within 2 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={quoteForm.name} 
                    onChange={e => setQuoteForm({...quoteForm, name: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div className="responsive-two-column-grid" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Company Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={quoteForm.company} 
                      onChange={e => setQuoteForm({...quoteForm, company: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>No. of Setups *</label>
                    <input 
                      type="number" 
                      required 
                      min="1"
                      value={quoteForm.quantity} 
                      onChange={e => setQuoteForm({...quoteForm, quantity: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={quoteForm.email} 
                    onChange={e => setQuoteForm({...quoteForm, email: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Contact Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={quoteForm.phone} 
                    onChange={e => setQuoteForm({...quoteForm, phone: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Additional Requirements</label>
                  <textarea 
                    rows="2"
                    value={quoteForm.message} 
                    onChange={e => setQuoteForm({...quoteForm, message: e.target.value})}
                    placeholder={`e.g. Dimensions of office space, customization requests, etc.`}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.85rem', marginTop: '0.5rem', cursor: 'pointer' }}>
                  Submit Quote Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
