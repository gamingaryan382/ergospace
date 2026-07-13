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
  // RENDER WORKSTATION LAYOUT (AFC Reference)
  // ==========================================
  if (product.type === 'workstation') {
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

        {/* HERO SECTION: Split left copy and right lifestyle render with mouse parallax */}
        <section className="section-padding" style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
          <div className="container-premium" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Left side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  WORKSTATION SERIES
                </span>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 500, marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                  {product.name}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.6 }}>
                  {product.tagline}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => setIsContactOpen(true)} className="btn-primary" style={{ padding: '1rem 2rem' }}>
                  <span>Request Consultation</span>
                </button>
                <button onClick={triggerBrochureDownload} className="btn-secondary" style={{ padding: '0.95rem 1.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={15} />
                  <span>
                    {brochureStatus === 'loading' ? 'Preparing...' : brochureStatus === 'downloaded' ? '✓ Catalog Saved' : 'Download Catalogue'}
                  </span>
                </button>
              </div>
            </div>
            {/* Right side with parallax */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: '#FCFCFA',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                height: 'clamp(280px, 40vw, 480px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'crosshair',
                perspective: '1000px'
              }}
            >
              <img 
                src={product.images[activeImgIdx] || product.bannerImg} 
                alt={product.name} 
                style={{
                  width: '90%',
                  height: '85%',
                  objectFit: 'contain',
                  transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotateY(${mousePos.x * 8}deg)`,
                  transition: mousePos.x === 0 ? 'transform 0.5s ease-out' : 'none'
                }}
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: WORKSTATION GALLERY */}
        <section className="section-padding" style={{ backgroundColor: '#FCFCFA', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium">
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Gallery Profiles</span>
              <h2 className="editorial-title" style={{ marginTop: '0.25rem', marginBottom: 0 }}>Architectural Workspace Layouts</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              {product.gallery.map((gImg, idx) => (
                <div key={idx} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)', cursor: 'pointer' }}>
                  <img src={gImg} alt={`${product.name} View ${idx}`} style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WORKSPACE CONFIGURATIONS */}
        <section className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium">
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Flexibility</span>
              <h2 className="editorial-title" style={{ marginTop: '0.25rem' }}>Available configurations</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
              {product.configurations.map((config, idx) => (
                <div key={idx} style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#FCFCFA', transition: 'transform 0.3s ease, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-medium)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ height: '80px', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Compass size={32} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{config.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.4, margin: 0 }}>{config.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FEATURES */}
        <section className="section-padding" style={{ backgroundColor: '#FCFCFA', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium">
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Modular details</span>
              <h2 className="editorial-title" style={{ marginTop: '0.25rem' }}>Workspace Integration Features</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
              {[
                { title: 'Modular Architecture', desc: 'Add, shift, or extend desks as teams grow without changing overall spacing.' },
                { title: 'Cable Management', desc: 'Integrated under-desk wire tracks and desktop sockets feed monitors cleanly.' },
                { title: 'Premium Laminate Tops', desc: 'Scratch-proof, heat-resistant top finishes designed for heavy office use.' },
                { title: 'Acoustic Divisor Screens', desc: 'Sound-dampening felt screens limit ambient chatter and keyboard noise.' }
              ].map((feat, idx) => (
                <div key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '6px', backgroundColor: 'rgba(226, 55, 68, 0.08)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={18} />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{feat.title}</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MATERIALS & FINISHES */}
        <section className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium" style={{ maxWidth: '650px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Tailor</span>
            <h2 className="editorial-title" style={{ marginTop: '0.25rem', marginBottom: '1rem' }}>Surface Materials & Finishes</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '3rem' }}>Select a wood finish swatch to customize the workspace surface.</p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {product.materials.map((mat, idx) => (
                <button key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: mat.hex, border: '2px solid var(--border-color)', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{mat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: APPLICATIONS */}
        <section className="section-padding" style={{ backgroundColor: '#FCFCFA', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium">
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>APPLICATIONS</span>
              <h2 className="editorial-title" style={{ marginTop: '0.25rem' }}>Suitable office environments</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
              {['Corporate HQ Offices', 'Software & IT Labs', 'Agile Co-working Spaces', 'Startups & Creative Studios'].map((app, idx) => (
                <div key={idx} style={{ padding: '2.5rem 2rem', backgroundColor: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                    <Award size={20} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{app}</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.4, margin: 0 }}>Optimized floorplan fit for employee collaboration loops.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: SPECIFICATIONS */}
        <section className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="container-premium" style={{ maxWidth: '850px' }}>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Data Sheet</span>
              <h2 className="editorial-title" style={{ marginTop: '0.25rem' }}>Technical specifications</h2>
            </div>
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#FFFFFF', fontSize: '0.9rem' }}>
                <tbody>
                  {[
                    { label: 'Backrest / Structure', val: product.specs.backrest },
                    { label: 'Armrest / Worktop Edge', val: product.specs.armrest },
                    { label: 'Seat / Desk Sizes', val: product.specs.seat },
                    { label: 'Mechanism / Cable Drop', val: product.specs.mechanism },
                    { label: 'Material & Partitions', val: product.specs.material },
                    { label: 'Application Use', val: product.specs.application },
                    { label: 'Base / Steel Legs', val: product.specs.legs }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === 6 ? 'none' : '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? '#FCFCFA' : '#FFFFFF' }}>
                      <td style={{ padding: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', width: '35%' }}>{row.label}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', fontWeight: 300 }}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 8: RELATED COLLECTIONS */}
        <section className="section-padding" style={{ backgroundColor: '#FCFCFA' }}>
          <div className="container-premium">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Catalogue</span>
                <h2 className="editorial-title" style={{ marginTop: '0.25rem', marginBottom: 0 }}>Explore Related Workstations</h2>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              {relatedProducts.map((rel) => (
                <div 
                  key={rel.id}
                  onClick={() => {
                    window.history.pushState({ page: 'product', prodId: rel.id }, '', `/collection/workstations/${rel.id}`);
                    const newEvent = new CustomEvent('nav-to-chair', { detail: rel.id });
                    window.dispatchEvent(newEvent);
                  }}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '2.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-subtle)', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  <img src={rel.bannerImg} alt={rel.name} style={{ height: '140px', width: '100%', objectFit: 'cover', borderRadius: '4px', marginBottom: '1.5rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-display)', textAlign: 'center', margin: '0 0 0.5rem 0' }}>{rel.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase' }}>Explore Collection →</span>
                </div>
              ))}
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

  // ==========================================
  // RENDER CHAIR LAYOUT (Rockworth Reference)
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
