import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Upload, Sparkles, Check, ChevronRight, RefreshCw, AlertCircle, Layout, X } from 'lucide-react';

export default function AIWorkspacePlanner() {
  // B2B Consultation Modal States
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultForm, setConsultForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultSubmitted(true);
    setTimeout(() => {
      setIsConsultModalOpen(false);
      setConsultSubmitted(false);
      setConsultForm({ name: '', company: '', email: '', phone: '', message: '' });
      setPlannerMode('select');
    }, 2500);
  };
  
  // Planner mode: 'select' | 'upload_flow' | 'questionnaire_flow' | 'results'
  const [plannerMode, setPlannerMode] = useState('select');
  
  // Questionnaire states
  const [questStep, setQuestStep] = useState(1);
  const [questAnswers, setQuestAnswers] = useState({
    dimensions: '10x10', // '8x8' | '10x10' | '12x15'
    users: 1, // 1 | 2 | 4
    type: 'home', // 'home' | 'startup' | 'corporate'
    budget: 'premium' // 'budget' | 'premium' | 'enterprise'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [plannerResult, setPlannerResult] = useState(null);

  // Extract products for recommendations
  const desk = PRODUCTS.find((p) => p.id === 'zenith-desk');
  const chair = PRODUCTS.find((p) => p.id === 'astra-chair');
  const apexDesk = PRODUCTS.find((p) => p.id === 'apex-desk');
  const nexusWorkstation = PRODUCTS.find((p) => p.id === 'nexus-bench');
  const conferenceTable = PRODUCTS.find((p) => p.id === 'summit-conference');
  const credenza = PRODUCTS.find((p) => p.id === 'vault-credenza');
  const arm = PRODUCTS.find((p) => p.id === 'element-arm');
  const pad = PRODUCTS.find((p) => p.id === 'wool-pad');

  const startQuestionnaire = () => {
    setPlannerMode('questionnaire_flow');
    setQuestStep(1);
  };

  const handleQuestSelect = (key, val) => {
    setQuestAnswers(prev => ({ ...prev, [key]: val }));
  };

  const nextQuestStep = () => {
    if (questStep < 4) {
      setQuestStep(prev => prev + 1);
    } else {
      generatePlannerResult();
    }
  };

  const prevQuestStep = () => {
    if (questStep > 1) {
      setQuestStep(prev => prev - 1);
    }
  };

  const generatePlannerResult = () => {
    setIsProcessing(true);
    setPlannerMode('results');

    setTimeout(() => {
      setIsProcessing(false);
      
      let recommendedDesk = desk;
      let recommendedChair = chair;
      let recommendedAccessories = [pad];
      let suggestedLayout = '';
      let estimatedBudget = 0;

      // Logic based on questionnaire options
      if (questAnswers.type === 'corporate') {
        recommendedDesk = conferenceTable;
        recommendedChair = chair;
        recommendedAccessories = [credenza];
        suggestedLayout = 'Boardroom Configuration: Centered layout with standard clearance zones (minimum 3.5 feet perimeter spacing from walls) to support collaborative visual displays and pop-up wiring docks.';
        estimatedBudget = conferenceTable.price + (chair.price * 8) + credenza.price;
      } else if (questAnswers.type === 'startup') {
        recommendedDesk = nexusWorkstation;
        recommendedChair = chair;
        recommendedAccessories = [arm];
        suggestedLayout = 'Startup Pod Configuration: Modular linear workspace cluster. Bench units run parallel to main windows to maximize natural lighting angles while routing trunk cabling under shared legs.';
        estimatedBudget = nexusWorkstation.price + (chair.price * 4) + (arm.price * 4);
      } else {
        // Home office setup
        if (questAnswers.budget === 'enterprise') {
          recommendedDesk = apexDesk;
          recommendedAccessories = [credenza, arm];
          suggestedLayout = 'Executive Office Layout: L-shape spatial orientation. Commands the center entry sightline while utilizing a soft leather credenza cabinet side-wall offset to hold secondary hardware and files.';
          estimatedBudget = apexDesk.price + chair.price + credenza.price + arm.price;
        } else {
          recommendedDesk = desk;
          recommendedAccessories = [arm, pad];
          suggestedLayout = 'Focus Alcove Layout: Desktop placed adjacent to lighting source with gas mounts floating the screen to prevent eye glare. The Merino wool pad acts as a quiet sound dampener.';
          estimatedBudget = desk.price + chair.price + arm.price + pad.price;
        }
      }

      setPlannerResult({
        desk: recommendedDesk,
        chair: recommendedChair,
        accessories: recommendedAccessories,
        layout: suggestedLayout,
        budget: estimatedBudget
      });
    }, 1500);
  };

  const handleSimulatedUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Transparently let the user know image processing is simulated and trigger questionnaire fallback
      alert("Note: Local AI photo layout processing is unavailable. Switching transparently to our Room Questionnaire Planner to configure your spaces accurately.");
      startQuestionnaire();
    }, 1200);
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '90vh', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', paddingBottom: '4rem' }}>
      <div className="container-premium" style={{ width: '100%', maxWidth: '750px' }}>
        
        {/* SELECT PLANNER MODE */}
        {plannerMode === 'select' && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3rem)',
            boxShadow: 'var(--shadow-premium)',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Spatial Planning
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, margin: '0.5rem 0 1rem 0' }}>
              AI Workspace Planner
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 300, maxWidth: '520px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              Configure your furniture specifications. Choose to upload a photo of your empty studio space, or proceed using our transparent layout planning questionnaire.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {/* Option A: Upload */}
              <div style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(181,142,88,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Upload size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.25rem' }}>Upload Space Photo</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Upload an image of your floor layout to simulate positioning overlays.</p>
                </div>
                <button onClick={handleSimulatedUpload} className="btn-secondary" style={{ width: '100%', padding: '0.65rem' }}>
                  <span>Select Image</span>
                </button>
              </div>

              {/* Option B: Questionnaire fallback */}
              <div style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-subtle)'
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(17,17,17,0.05)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Layout size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.25rem' }}>Layout Questionnaire</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Calibrate coordinates transparently by answering a few room specs questions.</p>
                </div>
                <button onClick={startQuestionnaire} className="btn-primary" style={{ width: '100%', padding: '0.65rem' }}>
                  <span>Start Planner</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* QUESTIONNAIRE FLOW */}
        {plannerMode === 'questionnaire_flow' && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3rem)',
            boxShadow: 'var(--shadow-premium)'
          }}>
            {/* Step indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {[1, 2, 3, 4].map((stepNum) => (
                <div 
                  key={stepNum} 
                  style={{
                    flex: 1,
                    height: '4px',
                    backgroundColor: stepNum <= questStep ? 'var(--accent)' : 'var(--border-color)',
                    transition: 'var(--transition-smooth)'
                  }}
                />
              ))}
            </div>

            {/* STEP 1: Dimensions */}
            {questStep === 1 && (
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Step 1: Select room dimensions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Small Study / Corner (8 ft x 8 ft)', val: '8x8' },
                    { label: 'Standard Office / Bedroom (10 ft x 10 ft)', val: '10x10' },
                    { label: 'Executive Chamber / Studio (12 ft x 15 ft)', val: '12x15' }
                  ].map(opt => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuestSelect('dimensions', opt.val)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-primary)',
                        border: questAnswers.dimensions === opt.val ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{opt.label}</span>
                      {questAnswers.dimensions === opt.val && <span style={{ color: 'var(--accent)' }}>Selected</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Occupants */}
            {questStep === 2 && (
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Step 2: How many active users will occupy the space?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Single occupant (Individual focus workstation)', val: 1 },
                    { label: 'Dual occupants (Co-working double desks)', val: 2 },
                    { label: 'Team Pod (4+ shared desk configurations)', val: 4 }
                  ].map(opt => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuestSelect('users', opt.val)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-primary)',
                        border: questAnswers.users === opt.val ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{opt.label}</span>
                      {questAnswers.users === opt.val && <span style={{ color: 'var(--accent)' }}>Selected</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Workspace type */}
            {questStep === 3 && (
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Step 3: What is the primary workspace style?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Home Office Workstation', val: 'home' },
                    { label: 'Startup Bench Pods', val: 'startup' },
                    { label: 'Corporate Suites & Boardrooms', val: 'corporate' }
                  ].map(opt => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuestSelect('type', opt.val)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-primary)',
                        border: questAnswers.type === opt.val ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{opt.label}</span>
                      {questAnswers.type === opt.val && <span style={{ color: 'var(--accent)' }}>Selected</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Budget */}
            {questStep === 4 && (
              <div>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Step 4: Budget range allocation
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Essential Workspaces (Standard comfort core systems)', val: 'budget' },
                    { label: 'Premium Ergonomic Upgrades (Whisper desks & high-tension mesh)', val: 'premium' },
                    { label: 'Executive Boardroom / Enterprise Solutions (Signature hardwood wood & aluminum)', val: 'enterprise' }
                  ].map(opt => (
                    <button
                      key={opt.val}
                      onClick={() => handleQuestSelect('budget', opt.val)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        textAlign: 'left',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-primary)',
                        border: questAnswers.budget === opt.val ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{opt.label}</span>
                      {questAnswers.budget === opt.val && <span style={{ color: 'var(--accent)' }}>Selected</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions panel */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', justifyContent: 'space-between' }}>
              <button 
                onClick={prevQuestStep} 
                disabled={questStep === 1}
                className="btn-secondary"
                style={{ opacity: questStep === 1 ? 0.3 : 1, padding: '0.8rem 1.5rem' }}
              >
                Back
              </button>
              <button 
                onClick={nextQuestStep} 
                className="btn-primary"
                style={{ padding: '0.8rem 1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
              >
                <span>{questStep === 4 ? 'Generate layout recommendation' : 'Next'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* RESULTS SCREEN */}
        {plannerMode === 'results' && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 3rem)',
            boxShadow: 'var(--shadow-premium)',
            textAlign: isProcessing ? 'center' : 'left'
          }}>
            {isProcessing ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
                <Sparkles size={36} className="hotspot-pulse" style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Calibrating room geometry parameters...</h3>
              </div>
            ) : (
              <div>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Recommended Layout</span>
                    <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>Your Custom Space Blueprint</h3>
                  </div>
                  <button onClick={() => setPlannerMode('select')} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', display: 'flex', gap: '0.25rem' }}>
                    <RefreshCw size={12} />
                    <span>Reset</span>
                  </button>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Layout Strategy</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                    {plannerResult.layout}
                  </p>
                </div>

                {/* Package recommendations */}
                <div style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  padding: '2rem',
                  marginBottom: '2.5rem'
                }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem' }}>Recommended Workspace Package</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Desk Component</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{plannerResult.desk.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Seating Component</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{plannerResult.chair.name} (x{questAnswers.users})</span>
                    </div>
                    {plannerResult.accessories.map((acc, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Accessory Component</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{acc.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add package action */}
                <button
                  onClick={() => setIsConsultModalOpen(true)}
                  className="btn-primary"
                  style={{ width: '100%', backgroundColor: 'var(--accent)', color: 'white', border: 'none' }}
                >
                  <span>Request Layout Consultation & Quote</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
      
      <style>{`
        .hotspot-pulse {
          animation: pulseEffect 2s infinite;
        }
        @keyframes pulseEffect {
          0% { box-shadow: 0 0 0 0 rgba(181, 142, 88, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(181, 142, 88, 0); }
          100% { box-shadow: 0 0 0 0 rgba(181, 142, 88, 0); }
        }
      `}</style>

      {/* B2B Consultation Modal Overlay */}
      {isConsultModalOpen && (
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
        }} onClick={() => setIsConsultModalOpen(false)}>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: 'clamp(1.25rem, 5vw, 3rem)',
            width: '100%',
            maxWidth: '550px',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button 
              onClick={() => setIsConsultModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={20} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                AI Room Layout Consultation
              </span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                Request Layout Review
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                A Tirupati Workspace Solutions architect will review your recommended AI room setup and draft a formal commercial proposal.
              </p>
            </div>

            {consultSubmitted ? (
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
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Request Received</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Thank you. We will call you within 2 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={consultForm.name} 
                    onChange={e => setConsultForm({...consultForm, name: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Company Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={consultForm.company} 
                    onChange={e => setConsultForm({...consultForm, company: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={consultForm.email} 
                    onChange={e => setConsultForm({...consultForm, email: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Contact Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={consultForm.phone} 
                    onChange={e => setConsultForm({...consultForm, phone: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Additional Notes / Layout Size</label>
                  <textarea 
                    rows="2"
                    value={consultForm.message} 
                    onChange={e => setConsultForm({...consultForm, message: e.target.value})}
                    placeholder={`e.g. Dimensions of office space, deadline, target budget.`}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none', resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.85rem', marginTop: '0.5rem', cursor: 'pointer' }}>
                  Submit Layout Enquiry
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
