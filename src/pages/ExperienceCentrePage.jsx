import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Check, Send, ShieldAlert, Award, ShieldCheck, Factory, HardHat, Compass } from 'lucide-react';

export default function ExperienceCentrePage() {
  const [bookingForm, setBookingForm] = useState({ name: '', company: '', email: '', date: '', time: '11:00', visitors: '1', message: '' });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingForm({ name: '', company: '', email: '', date: '', time: '11:00', visitors: '1', message: '' });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '8rem' }}>
      
      {/* 1. EXPERIENCE CENTRE SECTION */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container-premium">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              Physical Showrooms
            </span>
            <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              The Noida Experience Centre
            </h1>
            <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Explore our calibrated systems physically. Test the active lumbar mesh support, feel the hand-stitched leatherite finishes, and consult directly with our architectural workspace planners.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'start'
          }}>
            {/* Showroom visual & details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                border: '1px solid var(--border-color)',
                height: '350px'
              }} className="image-zoom-container">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                  alt="Noida Showroom Gallery" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="image-zoom-img"
                />
              </div>

              {/* Showroom Details card */}
              <div style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  Noida Showroom Coordinates
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', color: 'var(--text-primary)' }}>Location Address</span>
                      <span>Unit No. 102, 1st Floor, Urbtech Trade Centre, Sector 132, Noida, Uttar Pradesh - 201301</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <Phone size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', color: 'var(--text-primary)' }}>Direct Desk Line</span>
                      <span>+91 - 95990-84008 / +91 - 95990-84016</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <Clock size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', color: 'var(--text-primary)' }}>Operating Hours</span>
                      <span>Monday - Saturday: 10:00 AM - 6:30 PM (Sunday: Closed)</span>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                  <a 
                    href="https://maps.google.com/?q=Urbtech+Trade+Centre+Sector+132+Noida" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxSizing: 'border-box' }}
                  >
                    <Compass size={16} />
                    <span>Get Directions on Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Book Visit Consultation Form */}
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--shadow-premium)'
            }}>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.5rem' }}>
                Book Showroom Consultation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.5 }}>
                Reserve a private walkthrough. An architectural designer will calibrate workstation layouts and material finishes to fit your workspace requirements.
              </p>

              {bookingSubmitted ? (
                <div style={{ padding: '3rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.45rem', fontWeight: 600 }}>Showroom Visit Scheduled</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                    We have reserved your briefing. A designer will confirm the date shortly via corporate email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="responsive-two-column-grid" style={{ gap: '1.5rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.company}
                        onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Corporate Email</label>
                    <input 
                      type="email" 
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div className="responsive-two-column-grid" style={{ gap: '1.5rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Total Visitors</label>
                      <select 
                        value={bookingForm.visitors}
                        onChange={(e) => setBookingForm({ ...bookingForm, visitors: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box' }}
                      >
                        <option value="1">1 Person</option>
                        <option value="2-4">2 - 4 Persons</option>
                        <option value="5+">5+ Persons Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Workspace Project Briefing (Optional)</label>
                    <textarea 
                      rows="3"
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                      placeholder="Share details about desks count, layout needs..."
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', boxSizing: 'border-box', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', height: '54px' }}>
                    <Send size={16} style={{ marginRight: '6px' }} />
                    <span>Request Showroom Invitation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIRTUAL TOUR VIDEO SECTION */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container-premium" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Production & Design Showcase
          </span>
          <h2 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
            Experience ErgoSpace In Action
          </h2>
          
          <div style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid var(--border-color)',
            backgroundColor: '#000'
          }}>
            <iframe 
              src="https://drive.google.com/file/d/1PxkGtF7LkVJdwaK7BsTQ-Yw6B2PQBvVo/preview"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="ErgoSpace Noida Showroom & Gurugram Factory Virtual Tour"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 2. FACTORY SECTION */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '8rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container-premium">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'center'
          }}>
            {/* Factory content */}
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Factory size={16} />
                <span>Manufacturing Powerhouse</span>
              </span>
              <h2 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                The Gurugram Manufacturing Hub
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
                Backed by **Tirupati Workspace Solutions Pvt Ltd**, our state-of-the-art **1,00,000 sq. ft. manufacturing facility** in Gurgaon, Haryana handles complex steel fabrication, automated wood machining, and final component assembly with robotic precision.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '2rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>BIFMA Level 3 Quality Control</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Seating bases and height adjustment lift columns endure 100,000 continuous stress cycles under structural weights.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Automated CNC Wood Shaping</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300 }}>DESK top surfaces are cut, chamfered, and rounded using high-precision German CNC machinery for zero dimensional anomalies.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Eco-Conscious Materials & Zero-VOC</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300 }}>We paint metal parts in-house with non-toxic electrostatic powders and utilize wood board options certified with low formaldehyde limits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Visuals Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '240px', gridColumn: 'span 2' }}>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Factory CNC Precision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px' }}>
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" alt="Factory Craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px' }}>
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" alt="Factory Quality Testing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
