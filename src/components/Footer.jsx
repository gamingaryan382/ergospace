import React, { useState } from 'react';
import { ArrowRight, Globe, Phone, Mail, Clock, MapPin, X, Check, FileText } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12c0 2 1 3.5 2.5 3.5.3 0 .6-.1.8-.4.3-.4.3-1.1.1-1.5-.1-.2-.4-.5-.6-.7-.5-.6-.8-1.5-.8-2.4 0-2.2 1.8-4 4.2-4 2.1 0 3.8 1.5 3.8 3.5 0 2.2-1 4.2-2.7 4.2-.9 0-1.6-.7-1.4-1.6.2-.9.7-1.9.7-2.6 0-.6-.3-1.1-.9-1.1-.7 0-1.3.8-1.3 1.8 0 .6.2 1.1.2 1.1l-.8 3.5c-.2 1-.1 2.2 0 3.2.1.1.2.1.3 0 1.2-1.6 1.1-2.2 1.5-3.8l.5-2c.3.5 1.1 1 2 .1" />
  </svg>
);

export default function Footer({ setCurrentPage, setSelectedCategory }) {
  // Local B2B Consultation modal states (works globally on all pages)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', size: '10-50' });

  // Catalogue download simulator states
  const [brochureStatus, setBrochureStatus] = useState(''); // '', 'loading', 'downloaded'

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', size: '10-50' });
    }, 2500);
  };

  const triggerCatalogueDownload = () => {
    setBrochureStatus('loading');
    setTimeout(() => {
      setBrochureStatus('downloaded');
      setTimeout(() => setBrochureStatus(''), 3000);
    }, 1200);
  };

  return (
    <footer style={{
      backgroundColor: '#F8F7F5', // Warm White
      color: '#1D1D1D', // Dark Charcoal
      padding: '5rem 0 3rem 0',
      borderTop: '1px solid #E8E6E2',
      fontFamily: 'var(--font-sans)'
    }}>
      <div className="container-premium">
        
        {/* PREMIUM B2B CONTACT CTA - Sits as a clean, rounded card at the top of the footer */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E8E6E2',
          borderRadius: '16px',
          padding: '3rem',
          boxShadow: '0 8px 30px rgba(29, 29, 29, 0.02)',
          marginBottom: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '520px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 600,
              color: '#1D1D1D',
              marginBottom: '0.5rem'
            }}>
              Ready To Transform Your Workspace?
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#5E5E5E',
              lineHeight: 1.5,
              fontWeight: 300
            }}>
              Talk to our workspace specialists and discover furniture solutions tailored to your business.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem'
              }}
            >
              Request Consultation
            </button>
            <button 
              onClick={triggerCatalogueDownload}
              className="btn-secondary"
              style={{
                borderColor: '#1D1D1D',
                color: '#1D1D1D',
                padding: '1rem 2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FileText size={16} />
              <span>
                {brochureStatus === 'loading' && 'Preparing...'}
                {brochureStatus === 'downloaded' && '✓ Downloaded'}
                {brochureStatus === '' && 'Download Catalogue'}
              </span>
            </button>
          </div>
        </div>

        {/* TWO-COLUMN CONTENT LAYOUT */}
        <div style={{
          display: 'grid',
          gap: '4rem',
          marginBottom: '5rem',
          alignItems: 'start'
        }} className="footer-layout-grid">
          
          {/* LEFT COLUMN: Showroom Details & Branding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Brand Logo */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <img 
                src="/logo.jpg" 
                alt="ErgoSpace Logo" 
                style={{ 
                  height: '36px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  mixBlendMode: 'multiply' 
                }} 
              />
            </div>

            <p style={{
              color: '#5E5E5E',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: '320px'
            }}>
              Designing the physical foundation for the future of professional work. Engineered for focus, comfort, and longevity.
            </p>

            {/* Corporate Info details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', color: '#5E5E5E' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Phone size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block', color: '#1D1D1D' }}>Helplines</span>
                  <span>+91 - 95990-84008</span>
                  <span style={{ display: 'block' }}>+91 - 95990-84016</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Mail size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block', color: '#1D1D1D' }}>Email Inquiries</span>
                  <a href="mailto:contact@ergospace.in" style={{ display: 'block', color: 'inherit' }}>contact@ergospace.in (Assistance)</a>
                  <a href="mailto:response@ergospace.in" style={{ display: 'block', color: 'inherit' }}>response@ergospace.in (Bulk Sales)</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block', color: '#1D1D1D' }}>Registered Office</span>
                  <span>Plot No. 424, Sector 8, IMT Manesar, Gurugram, Haryana - 122050</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Clock size={16} style={{ color: '#8A8A8A', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontWeight: 600, display: 'block', color: '#1D1D1D' }}>Business Hours</span>
                  <span>Monday - Saturday: 10:00 AM - 6:30 PM, Sunday: Closed</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://www.instagram.com/ergospaceindia" target="_blank" rel="noopener noreferrer" style={{ color: '#8A8A8A', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}>
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.facebook.com/ergospaceindia" target="_blank" rel="noopener noreferrer" style={{ color: '#8A8A8A', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}>
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.youtube.com/ergospace" target="_blank" rel="noopener noreferrer" style={{ color: '#8A8A8A', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}>
                <YoutubeIcon size={18} />
              </a>
              <a href="https://x.com/ergospaceindia" target="_blank" rel="noopener noreferrer" style={{ color: '#8A8A8A', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}>
                <TwitterIcon size={18} />
              </a>
              <a href="https://in.pinterest.com/ergospaceindia/" target="_blank" rel="noopener noreferrer" style={{ color: '#8A8A8A', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#8A8A8A'}>
                <PinterestIcon size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Collections & Brand Navigation Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            paddingTop: '0.5rem'
          }}>
            {/* Showroom Catalog Section */}
            <div>
              <h5 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem', 
                color: 'var(--accent)' 
              }}>
                Showroom Collections
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: '#5E5E5E' }}>
                <li><button onClick={() => { if (setSelectedCategory) setSelectedCategory('All'); setCurrentPage('collection'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>All Seating</button></li>
                <li><button onClick={() => { if (setSelectedCategory) setSelectedCategory('Office Chairs'); setCurrentPage('collection'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Ergonomic Chairs</button></li>
                <li><button onClick={() => { if (setSelectedCategory) setSelectedCategory('Height Adjustable Desks'); setCurrentPage('collection'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Standing Desks</button></li>
                <li><button onClick={() => { if (setSelectedCategory) setSelectedCategory('Executive Tables'); setCurrentPage('collection'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Executive Tables</button></li>
                <li><button onClick={() => { if (setSelectedCategory) setSelectedCategory('Workstations'); setCurrentPage('collection'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Modular Workstations</button></li>
              </ul>
            </div>

            {/* Architecture Solutions */}
            <div>
              <h5 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem', 
                color: 'var(--accent)' 
              }}>
                Brand Experience
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: '#5E5E5E' }}>
                <li><button onClick={() => { setCurrentPage('spaces'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Industries Served</button></li>
                <li><button onClick={() => { setCurrentPage('experience'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Noida Experience Centre</button></li>
                <li><button onClick={() => { setCurrentPage('experience'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Gurugram Factory Hub</button></li>
              </ul>
            </div>

            {/* Corporate Profile links */}
            <div>
              <h5 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                marginBottom: '1.5rem', 
                color: 'var(--accent)' 
              }}>
                Corporate Profile
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: '#5E5E5E' }}>
                <li><button onClick={() => { setCurrentPage('about'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Our Heritage / About</button></li>
                <li><button onClick={() => { setCurrentPage('projects'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Projects & Deployments</button></li>
                <li><button onClick={() => { setCurrentPage('latest'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Articles & Insights</button></li>
                <li><button onClick={() => { setCurrentPage('market'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Market Operational Areas</button></li>
                <li><button onClick={() => { setCurrentPage('contact'); }} style={{ background: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', border: 'none', padding: 0 }}>Connect with Specialists</button></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SEGMENT: Copyright & Legal row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          borderTop: '1px solid #E8E6E2',
          paddingTop: '2.5rem',
          fontSize: '0.8rem',
          color: '#8A8A8A',
          fontWeight: 300
        }}>
          <div>
            © {new Date().getFullYear()} ErgoSpace (Tirupati Workspace Solutions Pvt Ltd). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => setCurrentPage('terms')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>Terms of Service</button>
            <button onClick={() => setCurrentPage('disclaimer')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>Disclaimer</button>
            <button onClick={() => setCurrentPage('warranty')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>Warranty Terms</button>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1D1D1D', fontWeight: 500 }}>
              <Globe size={14} />
              <span>India (English)</span>
            </span>
          </div>
        </div>

      </div>

      {/* B2B CONSULTATION CALLBACK MODAL DIALOG */}
      {isModalOpen && (
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
          padding: '1.5rem',
          color: '#1D1D1D'
        }} onClick={() => setIsModalOpen(false)}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E8E6E2',
            padding: '3rem',
            width: '100%',
            maxWidth: '520px',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#1D1D1D' }}
            >
              <X size={20} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Corporate Solutions
              </span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                Request B2B Consultation
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#5E5E5E', marginTop: '0.5rem', marginBottom: '2rem' }}>
                Brief us on your office seating or layout needs. An architectural workspace specialist will contact you.
              </p>
            </div>

            {modalSubmitted ? (
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
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Brief Received</h4>
                  <p style={{ fontSize: '0.85rem', color: '#5E5E5E', marginTop: '0.5rem' }}>
                    Thank you. We will coordinate a showroom consultation with you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5E5E5E', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #E8E6E2', borderRadius: '4px', backgroundColor: '#FAF9F7', color: '#1D1D1D', outline: 'none' }}
                  />
                </div>
                <div className="responsive-two-column-grid" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5E5E5E', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Company Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company} 
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #E8E6E2', borderRadius: '4px', backgroundColor: '#FAF9F7', color: '#1D1D1D', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5E5E5E', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Workspace Size</label>
                    <select 
                      value={formData.size} 
                      onChange={e => setFormData({...formData, size: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #E8E6E2', borderRadius: '4px', backgroundColor: '#FAF9F7', color: '#1D1D1D', outline: 'none' }}
                    >
                      <option value="10-50">10 to 50 Workstations</option>
                      <option value="50-200">50 to 200 Workstations</option>
                      <option value="200+">200+ Workstations</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5E5E5E', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #E8E6E2', borderRadius: '4px', backgroundColor: '#FAF9F7', color: '#1D1D1D', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#5E5E5E', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Contact Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #E8E6E2', borderRadius: '4px', backgroundColor: '#FAF9F7', color: '#1D1D1D', outline: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.85rem', marginTop: '0.5rem', cursor: 'pointer' }}>
                  Submit Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Media query styling for responsive architectural layout spacing */}
      <style>{`
        @media (max-width: 768px) {
          .footer-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
