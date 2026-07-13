import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import SpacesPage from './pages/SpacesPage';
import ExperienceCentrePage from './pages/ExperienceCentrePage';

import AboutUs from './pages/AboutUs';
import Latest from './pages/Latest';
import ProjectsPage from './pages/ProjectsPage';
import ContactUs from './pages/ContactUs';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import WarrantyPolicy from './pages/WarrantyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import MarketAreas from './pages/MarketAreas';
import { Check, X, ArrowLeft } from 'lucide-react';
import { B2B_CLIENTS } from './data/products';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'collection' | 'product' | 'builder' | 'solutions'
  const [selectedProductId, setSelectedProductId] = useState('astra-chair');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Scroll to top on page transition (micro-timer ensures reliability across layouts)
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Sync state with URL path on mount
  React.useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');
    if (parts.length >= 4 && parts[1] === 'collection') {
      const id = parts[parts.length - 1];
      setCurrentPage('product');
      setSelectedProductId(id);
    } else if (path === '/collection') {
      setCurrentPage('collection');
    }
  }, []);

  // Listen to popstate (back/forward browser buttons)
  React.useEffect(() => {
    const handlePopState = (e) => {
      const path = window.location.pathname;
      const parts = path.split('/');
      if (parts.length >= 4 && parts[1] === 'collection') {
        const id = parts[parts.length - 1];
        setCurrentPage('product');
        setSelectedProductId(id);
      } else if (path === '/collection') {
        setCurrentPage('collection');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen to global custom navigation events
  React.useEffect(() => {
    const handleNavToChair = (e) => {
      setSelectedProductId(e.detail);
      setCurrentPage('product');
    };
    window.addEventListener('nav-to-chair', handleNavToChair);
    return () => window.removeEventListener('nav-to-chair', handleNavToChair);
  }, []);

  // B2B Case Study Modal State (Shared globally)
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const activeCaseStudy = B2B_CLIENTS.find(c => c.id === activeCaseStudyId);

  // Page Routing Swapper
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Homepage 
            setCurrentPage={setCurrentPage} 
            setSelectedProductId={setSelectedProductId} 
            setActiveCaseStudyId={setActiveCaseStudyId}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'collection':
        return (
          <CollectionPage 
            setCurrentPage={setCurrentPage} 
            setSelectedProductId={setSelectedProductId} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'product':
        return (
          <ProductPage 
            productId={selectedProductId} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'builder':
      case 'spaces':
        return <SpacesPage setCurrentPage={setCurrentPage} />;
      case 'solutions':
      case 'experience':
        return <ExperienceCentrePage />;

      case 'about':
        return <AboutUs setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'latest':
        return <Latest setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactUs />;
      case 'refund':
        return <RefundPolicy />;
      case 'shipping':
        return <ShippingPolicy />;
      case 'warranty':
        return <WarrantyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'market':
        return <MarketAreas />;
      default:
        return (
          <Homepage 
            setCurrentPage={setCurrentPage} 
            setSelectedProductId={setSelectedProductId} 
            setActiveCaseStudyId={setActiveCaseStudyId}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Global Navigation Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />

      {/* Main Page Layout Container */}
      <main style={{ flex: '1 0 auto', position: 'relative' }}>
        {currentPage !== 'home' && (
          <div className="container-premium" style={{ 
            paddingTop: '7.5rem',
            paddingBottom: '1rem',
            position: 'relative',
            zIndex: 10,
            width: '100%'
          }}>
            <button 
              onClick={() => {
                if (currentPage === 'product') {
                  setCurrentPage('collection');
                } else {
                  setCurrentPage('home');
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0.5rem 0',
                transition: 'var(--transition-fast)',
                fontFamily: 'var(--font-display)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ArrowLeft size={14} />
              <span>{currentPage === 'product' ? 'Back to Collection' : 'Back to Home'}</span>
            </button>
          </div>
        )}
        {renderPage()}
      </main>

      {/* Global B2B Case Study Modal Overlay */}
      {activeCaseStudy && (
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
          padding: '2rem'
        }} onClick={() => setActiveCaseStudyId(null)}>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: 'clamp(1.25rem, 5vw, 3rem)',
            width: '100%',
            maxWidth: '680px',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button 
              onClick={() => setActiveCaseStudyId(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={20} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                B2B Project Case Study
              </span>
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                {activeCaseStudy.name} HQ Deployment
              </h3>
            </div>

            <div style={{
              height: '240px',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)'
            }}>
              <img src={activeCaseStudy.image} alt={activeCaseStudy.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="responsive-two-column-grid" style={{
              fontSize: '0.85rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1.25rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Project Size</span>
                <span style={{ fontWeight: 600 }}>{activeCaseStudy.projectSize}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Industry</span>
                <span style={{ fontWeight: 600 }}>{activeCaseStudy.industry}</span>
              </div>
            </div>

            <div>
              <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.25rem' }}>Furniture Config Supplied</span>
              <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                {activeCaseStudy.furnitureSupplied}
              </p>
              
              <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.25rem' }}>Challenge & Solution</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                {activeCaseStudy.caseStudy}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}
