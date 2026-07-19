import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Check, Info, Sparkles, AlertCircle, ArrowRight, X } from 'lucide-react';

export default function WorkspaceBuilder() {
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
    }, 2500);
  };
  
  // Extract products
  const deskProduct = PRODUCTS.find((p) => p.id === 'zenith-desk');
  const chairProduct = PRODUCTS.find((p) => p.id === 'astra-chair');
  const armProduct = PRODUCTS.find((p) => p.id === 'element-arm');
  const padProduct = PRODUCTS.find((p) => p.id === 'wool-pad');

  // Builder configuration states
  const [selectedDeskFinish, setSelectedDeskFinish] = useState('American Oak'); // 'American Oak' | 'Walnut'
  const [selectedChairFinish, setSelectedChairFinish] = useState('Matte Obsidian'); // 'Matte Obsidian' | 'Champagne Gold'
  const [includeArm, setIncludeArm] = useState(true);
  const [includePad, setIncludePad] = useState(true);

  // Compute pricing
  let originalSubtotal = deskProduct.price + chairProduct.price;
  if (includeArm) originalSubtotal += armProduct.price;
  if (includePad) originalSubtotal += padProduct.price;

  // 10% discount on workspace bundles
  const discountPercent = 10;
  const bundleDiscount = Math.round(originalSubtotal * (discountPercent / 100));
  const bundleTotal = originalSubtotal - bundleDiscount;

  const handleBuildAdd = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', paddingBottom: '5rem' }}>
      <div className="container-premium">
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            ErgoSpace Customizer
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem' }}>
            Workspace Setup Builder
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto' }}>
            Design your environment. Select hardware finishes, select accessory layers, and unlock a 10% bundle discount.
          </p>
        </div>

        {/* Builder Interface */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Left Canvas: Live Workspace Preview Render */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '2rem',
            boxShadow: 'var(--shadow-premium)',
            position: 'sticky',
            top: '8rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} style={{ color: 'var(--accent)' }} />
              <span>Live Setup Preview</span>
            </h3>

            {/* Simulated visual compilation workspace canvas */}
            <div style={{
              width: '100%',
              height: '320px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '2rem'
            }}>
              {/* Workspace Mockup Room Background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#FAF9F6',
                backgroundImage: 'radial-gradient(rgba(17,17,17,0.03) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                zIndex: 1
              }} />

              {/* Dynamic Desk Surface Render */}
              <div style={{
                width: '80%',
                height: '24px',
                backgroundColor: selectedDeskFinish === 'Walnut' ? '#4A3525' : '#D2B48C', // Walnut wood vs light oak wood color
                borderRadius: '4px',
                border: '1px solid rgba(0,0,0,0.15)',
                position: 'absolute',
                bottom: '100px',
                zIndex: 3,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.4s'
              }}>
                {/* Desk Drawer Line */}
                <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} />
              </div>

              {/* Desk Legs */}
              <div style={{ position: 'absolute', bottom: '2rem', left: '18%', width: '12px', height: '70px', backgroundColor: '#222', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: '2rem', right: '18%', width: '12px', height: '70px', backgroundColor: '#222', zIndex: 2 }} />

              {/* Desk Pad */}
              {includePad && (
                <div style={{
                  width: '50%',
                  height: '6px',
                  backgroundColor: '#86868B', // Merino felt grey
                  borderRadius: '2px',
                  position: 'absolute',
                  bottom: '120px',
                  zIndex: 4,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  transition: 'opacity 0.3s'
                }} />
              )}

              {/* Floating Monitor Arm and Monitor */}
              {includeArm && (
                <div style={{
                  position: 'absolute',
                  bottom: '124px',
                  left: '42%',
                  zIndex: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'opacity 0.3s'
                }}>
                  {/* Monitor Arm Pole */}
                  <div style={{ width: '4px', height: '30px', backgroundColor: '#ccc' }} />
                  {/* Floating Screen */}
                  <div style={{
                    width: '120px',
                    height: '70px',
                    backgroundColor: '#111',
                    border: '3px solid #222',
                    borderRadius: '4px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.1)',
                    fontSize: '0.5rem'
                  }}>
                    ERGO
                  </div>
                </div>
              )}

              {/* Dynamic Chair Render (Foreground overlay) */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                zIndex: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Chair Headrest */}
                <div style={{
                  width: '40px',
                  height: '24px',
                  backgroundColor: '#1E1E1F',
                  borderRadius: '12px',
                  border: selectedChairFinish === 'Champagne Gold' ? '2px solid var(--accent)' : '2px solid #333',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'border 0.4s'
                }} />
                {/* Chair Backrest */}
                <div style={{
                  width: '56px',
                  height: '70px',
                  backgroundColor: 'rgba(30, 30, 31, 0.9)',
                  borderRadius: '8px',
                  marginTop: '4px',
                  border: selectedChairFinish === 'Champagne Gold' ? '2px solid var(--accent)' : '2px solid #333',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'border 0.4s'
                }} />
                {/* Seat Cushion */}
                <div style={{
                  width: '60px',
                  height: '12px',
                  backgroundColor: '#111',
                  borderRadius: '4px',
                  marginTop: '2px'
                }} />
                {/* Gas Cylinder & Base */}
                <div style={{ width: '6px', height: '24px', backgroundColor: '#333' }} />
                <div style={{ width: '40px', height: '6px', backgroundColor: '#222', borderRadius: '3px' }} />
              </div>

            </div>

            {/* Spec info notes */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Preview shows visual node orientation. Actual shipments contain hand-crafted American Oak wood grain and calibrated composite frames.</span>
            </div>
          </div>

          {/* Right Panel: Configurations Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Step 1: Standing Desk Finish */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  1. Zenith Standing Desk
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>₹{deskProduct.price.toLocaleString('en-IN')}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 300 }}>
                Dual-motor heavy duty columns. Select solid hardwood finish:
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['American Oak', 'Walnut'].map((fin) => (
                  <button
                    key={fin}
                    onClick={() => setSelectedDeskFinish(fin)}
                    style={{
                      flex: 1,
                      border: selectedDeskFinish === fin ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                      backgroundColor: selectedDeskFinish === fin ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                      padding: '1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {fin}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Ergonomic Chair Trim */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  2. Astra Ergonomic Chair
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>₹{chairProduct.price.toLocaleString('en-IN')}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 300 }}>
                Adaptive spinal lumbar support. Select armrest & base colorway:
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Matte Obsidian', 'Champagne Gold'].map((fin) => (
                  <button
                    key={fin}
                    onClick={() => setSelectedChairFinish(fin)}
                    style={{
                      flex: 1,
                      border: selectedChairFinish === fin ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                      backgroundColor: selectedChairFinish === fin ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                      padding: '1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {fin}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add Ons (Float Arm & Desk Pad) */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem' }}>
                3. Upgrade Accessories
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Monitor Arm */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '1.25rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input 
                      type="checkbox"
                      checked={includeArm}
                      onChange={() => setIncludeArm(!includeArm)}
                      style={{ accentColor: 'var(--accent)', scale: '1.15' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Element Gas-Spring Monitor Arm</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Adjustable screen heights</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>+ ₹{armProduct.price.toLocaleString('en-IN')}</span>
                </label>

                {/* Desk Pad */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '1.25rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input 
                      type="checkbox"
                      checked={includePad}
                      onChange={() => setIncludePad(!includePad)}
                      style={{ accentColor: 'var(--accent)', scale: '1.15' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Merino Wool Felt Desk Pad</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 300 }}>90x30cm XL non-slip mat</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>+ ₹{padProduct.price.toLocaleString('en-IN')}</span>
                </label>
              </div>
            </div>

            {/* Bundle Checkout Card */}
            <div style={{
              backgroundColor: 'var(--bg-dark)',
              color: 'white',
              padding: '2.5rem',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-premium)',
              marginTop: '1rem'
            }}>
              <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-display)', color: 'var(--accent-light)', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Workspace Summary
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Zenith Desk ({selectedDeskFinish})</span>
                  <span>₹{deskProduct.price.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Astra Chair ({selectedChairFinish})</span>
                  <span>₹{chairProduct.price.toLocaleString('en-IN')}</span>
                </div>
                {includeArm && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Element Monitor Arm</span>
                    <span>₹{armProduct.price.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {includePad && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Merino Felt Desk Pad</span>
                    <span>₹{padProduct.price.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Final Math Calculations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                  <span>Regular Subtotal</span>
                  <span style={{ textDecoration: 'line-through' }}>₹{originalSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                  <span>Bundle Discount (10%)</span>
                  <span>- ₹{bundleDiscount.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'white', marginTop: '0.5rem' }}>
                  <span>Total Investment</span>
                  <span>₹{bundleTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={handleBuildAdd}
                className="btn-primary" 
                style={{ width: '100%', backgroundColor: 'var(--accent)', color: 'white', border: 'none', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
              >
                <span>Request Setup Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

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
              onClick={() => setIsQuoteModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={20} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Enterprise Workspace Setup
              </span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                Request Bundle Quote
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Submit your customized workspace bundle (Zenith desk finish: {selectedDeskFinish}, Astra chair finish: {selectedChairFinish}, monitor arm: {includeArm ? 'Yes' : 'No'}, desk pad: {includePad ? 'Yes' : 'No'}). We will provide wholesale pricing.
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
                    A Tirupati Workspace Solutions manager will contact you with volume discount options within 2 hours.
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
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Message</label>
                  <textarea 
                    rows="2"
                    value={quoteForm.message} 
                    onChange={e => setQuoteForm({...quoteForm, message: e.target.value})}
                    placeholder={`e.g. Any custom colors or additional storage cabinets/benches needed?`}
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
