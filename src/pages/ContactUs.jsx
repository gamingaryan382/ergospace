import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* TOP HERO BANNER */}
        <div style={{
          width: '100%',
          marginBottom: '4rem',
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
            {submitted ? (
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
                    Thank you, {formData.name}. We have logged your request. One of our layout design experts will get in touch with you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div className="responsive-two-column-grid">
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
