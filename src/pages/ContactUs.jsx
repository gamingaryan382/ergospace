import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle, Navigation, Users } from 'lucide-react';

export default function ContactUs({ contactTab = 'general', setContactTab }) {
  const [activeTab, setActiveTab] = useState(contactTab || 'general');

  // Keep tab state synchronized if navigated externally
  useEffect(() => {
    if (contactTab) setActiveTab(contactTab);
  }, [contactTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (setContactTab) setContactTab(tab);
  };

  // General Form State
  const [generalForm, setGeneralForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setGeneralSubmitted(true);
    setTimeout(() => {
      setGeneralSubmitted(false);
      setGeneralForm({ name: '', email: '', phone: '', company: '', message: '' });
    }, 4000);
  };

  // Reseller Form State
  const [resellerForm, setResellerForm] = useState({
    fullName: '',
    companyName: '',
    address: '',
    cityState: '',
    email: '',
    phone: '',
    message: ''
  });
  const [resellerSubmitted, setResellerSubmitted] = useState(false);

  const handleResellerSubmit = (e) => {
    e.preventDefault();
    setResellerSubmitted(true);
    setTimeout(() => {
      setResellerSubmitted(false);
      setResellerForm({
        fullName: '',
        companyName: '',
        address: '',
        cityState: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* TOP HERO BANNER */}
        <div style={{
          width: '100%',
          marginBottom: '3rem',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          border: '1px solid var(--border-color)',
          backgroundColor: '#FFFFFF'
        }}>
          <img 
            src="/contact_banner.jpg" 
            alt="Collaborate with Confidence - ErgoSpace Workspace Solutions" 
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* TOGGLE TABS FOR GENERAL vs RESELLER NETWORK */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '4rem'
        }}>
          <button
            onClick={() => handleTabChange('general')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '30px',
              border: activeTab === 'general' ? '2px solid var(--accent)' : '1px solid var(--border-color)',
              backgroundColor: activeTab === 'general' ? 'var(--accent)' : 'transparent',
              color: activeTab === 'general' ? '#FFFFFF' : 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Customer & Commercial Sales
          </button>
          
          <button
            onClick={() => handleTabChange('reseller')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '30px',
              border: activeTab === 'reseller' ? '2px solid var(--accent)' : '1px solid var(--border-color)',
              backgroundColor: activeTab === 'reseller' ? 'var(--accent)' : 'transparent',
              color: activeTab === 'reseller' ? '#FFFFFF' : 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Reseller & Dealer Network
          </button>
        </div>

        {/* TAB 1: GENERAL & COMMERCIAL INQUIRIES */}
        {activeTab === 'general' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Details Card */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              padding: 'clamp(1.25rem, 5vw, 3rem)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  Customer Assistance
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <Mail size={18} color="var(--accent)" style={{ marginTop: '2px' }} />
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</span>
                      <a href="mailto:contact@ergospace.in" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>contact@ergospace.in</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <Phone size={18} color="var(--accent)" style={{ marginTop: '2px' }} />
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 600 }}>Helpline Numbers</span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', display: 'block' }}>+91 - 95990-84008</span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>+91 - 95990-84016</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  Business Inquiries
                </h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <Mail size={18} color="var(--accent)" style={{ marginTop: '2px' }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 600 }}>Corporate & Bulk Sales</span>
                    <a href="mailto:response@ergospace.in" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>response@ergospace.in</a>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <Clock size={18} color="var(--text-tertiary)" style={{ marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 600 }}>Operating Hours</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Monday - Saturday: 10:00 AM - 6:30 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              padding: 'clamp(1.25rem, 5vw, 3rem)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              {generalSubmitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '4rem 0',
                  gap: '1.5rem'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(181, 142, 88, 0.15)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem' }}>Details Submitted</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Thank you, {generalForm.name}. We have logged your request. One of our layout design experts will get in touch with you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Send a Message
                  </h3>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={generalForm.name}
                      onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="responsive-two-column-grid">
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        value={generalForm.email}
                        onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={generalForm.phone}
                        onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Company / Organization</label>
                    <input
                      type="text"
                      value={generalForm.company}
                      onChange={(e) => setGeneralForm({ ...generalForm, company: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={generalForm.message}
                      onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: RESELLER & DEALER NETWORK */}
        {activeTab === 'reseller' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Direct Reseller Contact Card */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
                  RESELLER & DEALER NETWORK
                </span>
                <h2 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 1.5rem 0' }}>
                  Direct Contact
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(181, 142, 88, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Email Representative</span>
                      <a href="mailto:Harshita@ergospace.in" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                        Harshita@ergospace.in
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(181, 142, 88, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Direct Helpline</span>
                      <a href="tel:8796742564" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                        8796742564
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Become an Authorized Dealer
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                  Apply to represent ErgoSpace seating and modular desks in your city. Submit your company details to receive catalog pricing and partnership terms.
                </p>
              </div>
            </div>

            {/* Reseller Inquiry Form */}
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              {resellerSubmitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '4rem 0',
                  gap: '1.5rem'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(181, 142, 88, 0.15)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem' }}>Application Logged</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Thank you, {resellerForm.fullName}. Your dealer application has been submitted. Our partner team will reach out to you shortly at {resellerForm.email}.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleResellerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    Reseller Partnership Form
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={resellerForm.fullName}
                      onChange={(e) => setResellerForm({ ...resellerForm, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Company Name *</label>
                    <input
                      type="text"
                      required
                      value={resellerForm.companyName}
                      onChange={(e) => setResellerForm({ ...resellerForm, companyName: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Address *</label>
                    <input
                      type="text"
                      required
                      value={resellerForm.address}
                      onChange={(e) => setResellerForm({ ...resellerForm, address: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                    />
                  </div>

                  {/* City & State */}
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>City & State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={resellerForm.cityState}
                      onChange={(e) => setResellerForm({ ...resellerForm, cityState: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="responsive-two-column-grid">
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        value={resellerForm.email}
                        onChange={(e) => setResellerForm({ ...resellerForm, email: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={resellerForm.phone}
                        onChange={(e) => setResellerForm({ ...resellerForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' }}>Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your dealership plans or client requirements..."
                      value={resellerForm.message}
                      onChange={(e) => setResellerForm({ ...resellerForm, message: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* FOUR ADDRESS BOXES (CORPORATE OFFICE & 3 MANUFACTURING UNITS) */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Locations & Facilities
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              Our Office & Manufacturing Facilities
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {/* Box 1: Corporate Office & Showroom */}
            <div style={{
              backgroundColor: '#F5F5F3',
              borderRadius: '10px',
              padding: '2.25rem',
              border: '1px solid #E5E5E0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E63946', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    CORPORATE OFFICE
                  </span>
                  <a 
                    href="https://maps.google.com/?q=Urbtech+Trade+Center+Noida+Sector+132" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Get Directions"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000000'; }}
                  >
                    <Navigation size={15} />
                  </a>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', margin: '0.75rem 0 0.5rem 0', lineHeight: 1.3 }}>
                  Corporate Office / Showroom
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  Tower IS5, Ground & 1st Floor, Urbtech Trade Center, 35, adjacent DPS School, Block B, Sector 132, Noida, Uttar Pradesh 201304
                </p>
              </div>
            </div>

            {/* Box 2: Manufacturing Unit 1 */}
            <div style={{
              backgroundColor: '#F5F5F3',
              borderRadius: '10px',
              padding: '2.25rem',
              border: '1px solid #E5E5E0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E63946', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    UNIT 1
                  </span>
                  <a 
                    href="https://maps.google.com/?q=Plot+163+Sector+6+IMT+Manesar+Gurugram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Get Directions"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000000'; }}
                  >
                    <Navigation size={15} />
                  </a>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', margin: '0.75rem 0 0.5rem 0', lineHeight: 1.3 }}>
                  Manufacturing Unit 1
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  Plot No. 163, Sector 6, IMT Manesar, Gurugram, Haryana 122051
                </p>
              </div>
            </div>

            {/* Box 3: Manufacturing Unit 2 */}
            <div style={{
              backgroundColor: '#F5F5F3',
              borderRadius: '10px',
              padding: '2.25rem',
              border: '1px solid #E5E5E0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E63946', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    UNIT 2
                  </span>
                  <a 
                    href="https://maps.google.com/?q=Plot+144+Sector+3+IMT+Manesar+Gurugram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Get Directions"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000000'; }}
                  >
                    <Navigation size={15} />
                  </a>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', margin: '0.75rem 0 0.5rem 0', lineHeight: 1.3 }}>
                  Manufacturing Unit 2
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  Plot No. 144, Sector 3, IMT Manesar, Gurugram, Haryana 122051
                </p>
              </div>
            </div>

            {/* Box 4: Manufacturing Unit 3 */}
            <div style={{
              backgroundColor: '#F5F5F3',
              borderRadius: '10px',
              padding: '2.25rem',
              border: '1px solid #E5E5E0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E63946', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    UNIT 3
                  </span>
                  <a 
                    href="https://maps.google.com/?q=Sector+7+A+Met+Yakubpur+Badli+Jhajjar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Get Directions"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      border: '1px solid rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000000'; }}
                  >
                    <Navigation size={15} />
                  </a>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111', margin: '0.75rem 0 0.5rem 0', lineHeight: 1.3 }}>
                  Manufacturing Unit 3
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
                  Plot No. 32, Street No. 04, Sector 7 A, Met Yakubpur Badli, Jhajjar, Haryana 124105
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
