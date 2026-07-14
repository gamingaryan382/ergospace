import React, { useState, useEffect } from 'react';
import { PRODUCT_DETAILS } from '../data/productDetails';
import { 
  Check, FileText, ArrowRight, ShieldCheck, Award, 
  Compass, Star, ArrowLeft, ChevronLeft, ChevronRight, Download, Send
} from 'lucide-react';

export default function ProductPage({ productId, setCurrentPage }) {
  // Normalize ID (e.g. 'feather-chair' or 'feather' -> 'feather')
  const productKey = productId ? productId.replace('-chair', '').replace('-exec', '') : 'feather';
  const product = PRODUCT_DETAILS[productKey] || PRODUCT_DETAILS.feather;

  // Active gallery image
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  // Selected Tab for Chairs: 'gallery' | 'details'
  const [activeTab, setActiveTab] = useState('gallery');
  // Selected Color Swatch (Chairs only)
  const [selectedColor, setSelectedColor] = useState(null);
  // Mouse parallax coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Brochure download simulator
  const [brochureStatus, setBrochureStatus] = useState(''); // '', 'loading', 'downloaded'

  // B2B Contact Overlay
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  // Update active states when product transitions
  useEffect(() => {
    setActiveImgIdx(0);
    setActiveTab('gallery');
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    } else {
      setSelectedColor(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId, product]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handlePrevImage = () => {
    if (!product.images || product.images.length === 0) return;
    setActiveImgIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (!product.images || product.images.length === 0) return;
    setActiveImgIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const triggerBrochureDownload = () => {
    setBrochureStatus('loading');
    setTimeout(() => {
      setBrochureStatus('downloaded');
      setTimeout(() => setBrochureStatus(''), 3000);
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsContactOpen(false);
      setFormSubmitted(false);
      setForm({ name: '', company: '', email: '', message: '' });
    }, 2000);
  };

  // Find related products (filter by type)
  const relatedProducts = Object.values(PRODUCT_DETAILS)
    .filter((p) => p.id !== product.id && p.type === product.type)
    .slice(0, 3);

  // ==========================================
  // UNIFIED PRODUCT LAYOUT RENDER
  // ==========================================
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Navigation header back link */}
      <div className="container-premium" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <button 
          onClick={() => { setCurrentPage('collection'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            fontSize: '0.85rem',
            transition: 'color 0.25s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ArrowLeft size={16} />
          <span>Back to Collections</span>
        </button>
      </div>

      {/* HEADER SECTION: Centered large title and group render banner */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-display)', fontWeight: 300, margin: '0 0 2rem 0', letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
          {product.name.split(' ')[0]}
        </h1>
        
        {/* Large group banner */}
        <div className="container-premium" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
          <img 
            src={product.bannerImg} 
            alt={`${product.name} Banner`} 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* SPLIT SECTION: Left (Image Slider & Thumbnails) | Right (Features spec table) */}
      <section className="container-premium" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', paddingBottom: '5rem', alignItems: 'start' }}>
        
        {/* Left Column: Carousel & Arrow sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 40vw, 460px)',
            backgroundColor: '#FCFCFA', // Soft studio white
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Prev arrow */}
            {product.images.length > 1 && (
              <button 
                onClick={handlePrevImage}
                style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#FFFFFF', border: '1px solid var(--border-color)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--shadow-subtle)' }}
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {/* Main active image */}
            <img 
              src={product.images[activeImgIdx]} 
              alt={product.name} 
              style={{
                height: '80%',
                objectFit: 'contain',
                display: 'block',
                filter: selectedColor && selectedColor.filter ? selectedColor.filter : 'none'
              }}
            />

            {/* Next arrow */}
            {product.images.length > 1 && (
              <button 
                onClick={handleNextImage}
                style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#FFFFFF', border: '1px solid var(--border-color)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--shadow-subtle)' }}
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>

          {/* Thumbnails row */}
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  style={{
                    width: '60px',
                    height: '60px',
                    border: activeImgIdx === idx ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Right Column: Spec features rows */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 500, marginBottom: '0.5rem', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem' }}>
            {product.name}
          </h2>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '2.5rem' }}>
            Specifications Overview
          </span>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { label: 'Backrest / Structure', value: product.specs.backrest },
              { label: 'Armrest', value: product.specs.armrest },
              { label: 'Seat / Surface', value: product.specs.seat },
              { label: 'Mechanism', value: product.specs.mechanism },
              { label: 'Material', value: product.specs.material },
              { label: 'Application Use', value: product.specs.application },
              { label: 'Base / Legs', value: product.specs.legs }
            ].map((spec, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '200px 1fr', 
                  borderBottom: '1px solid rgba(0,0,0,0.08)', 
                  padding: '1.25rem 0',
                  gap: '1rem',
                  fontSize: '0.88rem' 
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{spec.label}</div>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5 }}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* DESCRIPTION TABS: Gallery | Product Detail */}
      <section className="section-padding" style={{ backgroundColor: '#FCFCFA', borderTop: '1px solid var(--border-color)' }}>
        <div className="container-premium">
          
          {/* Tab buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid var(--border-color)', marginBottom: '3.5rem', gap: '3rem' }}>
            {[
              { id: 'gallery', label: 'Gallery' },
              { id: 'details', label: 'Product Detail' }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    paddingBottom: '1rem',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    borderBottom: isSelected ? '2px solid var(--text-primary)' : '2px solid transparent',
                    marginBottom: '-1px',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content panel */}
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            
            {activeTab === 'gallery' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {product.gallery ? product.gallery.map((gImg, idx) => (
                  <div key={idx} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                    <img src={gImg} alt={`${product.name} setup`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: '2rem' }}>
                    Gallery images details coming soon.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'details' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
                  {product.tagline}
                </p>
                {product.overview.map((para, idx) => (
                  <p key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* FLOAT ENQUIRY CTA */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setIsContactOpen(true)} className="btn-primary" style={{ padding: '1rem 2rem', borderRadius: '50px', boxShadow: 'var(--shadow-premium)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Contact Us</span>
          <Send size={15} />
        </button>
      </div>

      {/* Corporate Consultation Modal Overlay */}
      {isContactOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={() => setIsContactOpen(false)}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid var(--border-color)', padding: 'clamp(1.25rem, 5vw, 3rem)', width: '100%', maxWidth: '520px', position: 'relative', boxShadow: 'var(--shadow-premium)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsContactOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>✕</button>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Corporate Solutions</span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem', color: 'var(--text-primary)' }}>Request pricing quote</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Let us know your requirements. Our workspace consultants will respond with quote options shortly.</p>
            </div>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(235, 10, 30, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={24} /></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Enquiry Submitted</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Our consultants will reach out inside 2 hours. Thank you.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Name *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Company *</label>
                  <input type="text" required value={form.company} onChange={e => setForm({...form, company: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Email *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Message</label>
                  <textarea rows="3" value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', resize: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.85rem', marginTop: '0.5rem', cursor: 'pointer' }}>Submit Enquiry</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
