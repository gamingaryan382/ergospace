import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';

export default function WorkspaceSolutions() {
  const [activeSolution, setActiveSolution] = useState('corporate');

  const solutions = [
    {
      id: 'corporate',
      title: 'Corporate Workspaces',
      tagline: 'Scale-ready workspace ergonomics for enterprise operations.',
      description: 'We design and equip corporate headquarters across India, facilitating long-term spinal support, active flow, and cable-managed environments that elevate employee retention and physical energy levels.',
      stat: 'Reduces postural strain complaints by 40%',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      caseStudy: 'Razorpay HQ Bangalore: Deployed 450 calibrated Zenith desks and custom colorway Astra chairs to establish Bangalore’s most advanced tech workspace.'
    },
    {
      id: 'startup',
      title: 'Startup Offices',
      tagline: 'High-density, modular workstations designed for collaboration.',
      description: 'Startup pods require hyper-flexibility. Our Nexus workstation benches allow fast scaling, integrated acoustic PET screens, and daisy-chained power routing to keep tech teams in cognitive flow.',
      stat: 'Deconstructs desktop cord footprint by 90%',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      caseStudy: 'Zomato Office Pods: Installed linear bench units with shared leg components to maximize space efficiency in high-density engineering wings.'
    },
    {
      id: 'executive',
      title: 'Executive Cabins',
      tagline: 'Commanding visual prestige. Uncompromising ergonomic support.',
      description: 'Designed to project executive authority while safeguarding posture health. Renders authentic solid teak wood Apex desks, leather desk pads, and polished aluminum composite Astra executive models.',
      stat: 'Burma Teakwood & Top-Grain Italian Leather',
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80',
      caseStudy: 'CTO Workspace, Groww: Crafted custom wood configurations with internal cable management flaps and motorized pop-up hubs.'
    },
    {
      id: 'coworking',
      title: 'Co-working Spaces',
      tagline: 'Heavy-duty commercial utility for diverse daily operators.',
      description: 'Shared office layouts demand robust hardware. ErgoSpace supplies co-working networks with Class-4 lift cylinders, structural composite frames, and scratch-resistant Oak standing desks built to last.',
      stat: 'German-made mechanisms certified for 100k transitions',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=1200&q=80',
      caseStudy: 'WeWork Bangalore Hub: Provided modular setups configured for daily adjustments to fit any occupant height profile.'
    },
    {
      id: 'conference',
      title: 'Conference Rooms',
      tagline: 'Preserving collaborative flow. Motorized visual docks.',
      description: 'Meetings require focus. Our Summit boardroom tables incorporate chamfered wood surfaces, leather write zones, and flush-mounted power docks to keep screens connected and posture upright.',
      stat: 'Flush motorized connectivity panels',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      caseStudy: 'Groww Boardroom Suite: 12-meter American Walnut conference table custom-molded with integrated Universal power panels.'
    },
    {
      id: 'homeoffice',
      title: 'Home Offices',
      tagline: 'Bringing commercial-grade ergonomics into private residences.',
      description: 'Transform residential corners into high-focus zones. Our custom packages fit petite to tall body profiles, with white-glove shipping and assembly directly to your home office door.',
      stat: '30-Day Risk-Free In-Home Trial',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
      caseStudy: '5,000+ home offices upgraded across India, supporting developers, remote founders, and design leads.'
    }
  ];

  const current = solutions.find((s) => s.id === activeSolution) || solutions[0];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '1.5rem', paddingBottom: '6rem' }}>
      <div className="container-premium">
        
        {/* Editorial Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            ErgoSpace commercial
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Workspace Solutions
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '650px' }}>
            From high-density startup layouts to boardroom tables and home workspaces, we design the hardware layouts that power serious businesses.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.5rem'
        }}>
          {solutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveSolution(sol.id)}
              style={{
                background: activeSolution === sol.id ? 'var(--bg-dark)' : 'transparent',
                color: activeSolution === sol.id ? 'white' : 'var(--text-secondary)',
                border: activeSolution === sol.id ? 'none' : '1px solid var(--border-color)',
                padding: '0.65rem 1.5rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {sol.title}
            </button>
          ))}
        </div>

        {/* Main Solution Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '5rem',
          alignItems: 'center',
          animation: 'fadeIn 0.5s ease-out'
        }}>
          {/* Left Column: Visual Showcase */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid var(--border-color)',
            height: 'clamp(280px, 45vw, 450px)'
          }}>
            <img src={current.image} alt={current.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Right Column: Case Studies and Description */}
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Solutions overview
            </span>
            
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 600,
              margin: '0.5rem 0 1.25rem 0',
              lineHeight: 1.15
            }}>
              {current.title}
            </h2>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              {current.description}
            </p>

            {/* Stat callout */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--accent)',
              padding: '1.5rem',
              borderRadius: '0 8px 8px 0',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                <Sparkles size={16} />
                <span>Performance Indicator</span>
              </div>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {current.stat}
              </p>
            </div>

            {/* Case Study reference */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                B2B Deployment Study
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                {current.caseStudy}
              </p>
            </div>

            <button 
              onClick={() => alert("Simulating Workspace Solutions request. An ErgoSpace workspace planner will contact you.")}
              className="btn-primary" 
              style={{ marginTop: '2rem', width: '100%', display: 'flex', gap: '0.5rem' }}
            >
              <span>Request Solution Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
