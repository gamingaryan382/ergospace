import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const megaMenuData = [
  {
    title: 'Ergonomic Seating',
    key: 'seating',
    categoryKey: 'Ergonomic Chairs',
    items: ['Frost and Slate', 'Onyx Series', 'Premium Chair', 'Leather Chairs', 'Visitor Chairs', 'Training Chairs', 'Lounge Seating'],
    featured: {
      title: 'Ergonomic Seating',
      description: 'Premium ergonomic seating engineered for long hours of comfort and posture calibration.',
      image: '/feather_front.jpg'
    }
  },
  {
    title: 'Workstations',
    key: 'workstations',
    categoryKey: 'Workstations',
    items: ['Linear Workstations', 'Manager Cabins', 'Open Office Systems', 'Height Adjustable Workstations', 'Collaborative Workstations', 'Cubicle Systems'],
    featured: {
      title: 'Workstations',
      description: 'Fully calibrated desk arrays optimized for productivity and collaborative office flow.',
      image: '/coworking_space.png'
    }
  },
  {
    title: 'Tables',
    key: 'tables',
    categoryKey: 'Executive Collection',
    items: ['Executive Tables', 'Meeting Tables', 'Conference Tables', 'Training Tables', 'Cafeteria Tables', 'Height Adjustable Tables'],
    featured: {
      title: 'Tables',
      description: 'Boardroom and meeting tables crafted in solid oak, walnut, and steel detailing.',
      image: '/summit_table.png'
    }
  },
  {
    title: 'Storage',
    key: 'storage',
    categoryKey: 'Storage & Accessories',
    items: ['Pedestals', 'Storage Cabinets', 'Lockers', 'Credenzas', 'File Storage', 'Shelving Systems'],
    featured: {
      title: 'Storage Solutions',
      description: 'Sleek storage cabinets and organizational lockers designed to tidy modern workspaces.',
      image: '/storage_details_hero.png'
    }
  },
  {
    title: 'Accessories',
    key: 'accessories',
    categoryKey: 'Storage & Accessories',
    items: ['Monitor Arm', 'Whiteboard & Collaboration'],
    featured: {
      title: 'Workspace Accessories',
      description: 'Dynamic monitor arms, desk organizers, and collaborative tools.',
      image: '/monitor_arm_hero.png'
    }
  }
];

const categoryPanels = {
  seating: megaMenuData[0].featured,
  workstations: megaMenuData[1].featured,
  tables: megaMenuData[2].featured,
  storage: megaMenuData[3].featured,
  accessories: megaMenuData[4].featured
};

export default function Navbar({ currentPage, setCurrentPage, setSelectedCategory, setSelectedSubcategory }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hover state triggers for Desktop Products Mega Menu
  const [isCollectionHovered, setIsCollectionHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [activeHoverCategory, setActiveHoverCategory] = useState('seating');
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  // Hover state triggers for Desktop "Where to Buy" Mega Menu
  const [isWhereToBuyHovered, setIsWhereToBuyHovered] = useState(false);
  const [isWhereToBuyMenuHovered, setIsWhereToBuyMenuHovered] = useState(false);
  const [isWhereToBuyOpen, setIsWhereToBuyOpen] = useState(false);

  // Mobile navigation accordion states
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const [mobileWhereToBuyExpanded, setMobileWhereToBuyExpanded] = useState(false);

  // Products Mega Menu exit delay
  useEffect(() => {
    let timer;
    if (isCollectionHovered || isMenuHovered) {
      setIsMegaOpen(true);
    } else {
      timer = setTimeout(() => {
        setIsMegaOpen(false);
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [isCollectionHovered, isMenuHovered]);

  // Where to Buy Mega Menu exit delay
  useEffect(() => {
    let timer;
    if (isWhereToBuyHovered || isWhereToBuyMenuHovered) {
      setIsWhereToBuyOpen(true);
    } else {
      timer = setTimeout(() => {
        setIsWhereToBuyOpen(false);
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [isWhereToBuyHovered, isWhereToBuyMenuHovered]);

  // Scroll listener for sticky behaviors
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    if (page === 'collection' && setSelectedCategory) {
      setSelectedCategory('All');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMegaItemClick = (categoryKey, itemName = null) => {
    if (setSelectedCategory) {
      setSelectedCategory(categoryKey);
    }
    if (itemName && setSelectedSubcategory) {
      setSelectedSubcategory(itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    }
    setCurrentPage('collection');
    setIsCollectionHovered(false);
    setIsMenuHovered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TWO-LEVEL FIXED HEADER WRAPPER */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isScrolled ? 'translateY(-36px)' : 'translateY(0)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.04)' : 'none'
        }}
      >
        {/* LEVEL 1: TOP NAVIGATION */}
        <div 
          style={{
            height: '36px',
            backgroundColor: '#F7F4EC',
            borderBottom: '1px solid #E0DCD3',
            display: 'flex',
            alignItems: 'stretch',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            padding: '0 2.5rem',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            {/* Left Side Links (WITH BOXES & VERTICAL BORDER LINES) */}
            <div style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
              <button 
                onClick={() => handleNavClick('about')}
                style={{ 
                  background: '#FFFFFF',
                  border: 'none',
                  borderLeft: '1px solid #E0DCD3',
                  borderRight: '1px solid #E0DCD3',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: '0 1.25rem',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.2s ease, color 0.2s ease' 
                }}
              >
                Discover ErgoSpace
              </button>
              <button 
                onClick={() => window.open('https://shop.ergospace.in', '_blank')}
                style={{ 
                  background: '#F7F4EC',
                  border: 'none',
                  borderRight: '1px solid #E0DCD3',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: '0 1.25rem',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.2s ease, color 0.2s ease' 
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F7F4EC'; }}
              >
                Shop Now
              </button>
            </div>

            {/* Right Side Links (CLEAN TEXT LINKS WITHOUT BOXES OR VERTICAL BORDERS) */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'nowrap', marginLeft: 'auto' }}>
              <button 
                onClick={() => handleNavClick('wheretobuy')}
                className="top-nav-link"
                style={{ 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: 0,
                  transition: 'color 0.25s ease' 
                }}
              >
                Where To Buy
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="top-nav-link"
                style={{ 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: 0,
                  transition: 'color 0.25s ease' 
                }}
              >
                Work With Us
              </button>
              <button 
                onClick={() => handleNavClick('experience')}
                className="top-nav-link"
                style={{ 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: 0,
                  transition: 'color 0.25s ease' 
                }}
              >
                Experience Centre
              </button>
              <button 
                onClick={() => handleNavClick('experience')}
                className="top-nav-link"
                style={{ 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer', 
                  color: '#051923', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: 0,
                  transition: 'color 0.25s ease' 
                }}
              >
                Manufacturing Facility
              </button>
            </div>
          </div>
        </div>

        {/* LEVEL 2: MAIN NAVIGATION */}
        <div 
          style={{
            height: isScrolled ? '48px' : '60px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2.5rem',
            transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <img 
                src="/logo.png" 
                alt="ErgoSpace Logo" 
                style={{ 
                  height: isScrolled ? '28px' : '38px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  mixBlendMode: 'multiply',
                  transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }} 
              />
            </div>

            {/* Desktop Navigation */}
            <div style={{ display: 'none', marginLeft: 'auto', alignItems: 'center', flexWrap: 'nowrap' }} className="desktop-nav-styles">
              {/* Products dropdown trigger */}
              <div 
                onMouseEnter={() => setIsCollectionHovered(true)}
                onMouseLeave={() => setIsCollectionHovered(false)}
                style={{ display: 'flex', alignItems: 'center', height: isScrolled ? '48px' : '60px', marginRight: '2rem', flexShrink: 0 }}
              >
                <button
                  onClick={() => handleNavClick('collection')}
                  className={`main-nav-link ${currentPage === 'collection' || isMegaOpen ? 'active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.84rem', // Matching reference image
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: (currentPage === 'collection' || isMegaOpen) ? 'var(--accent)' : 'var(--text-primary)',
                    padding: '0.5rem 0',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease'
                  }}
                >
                  Products
                </button>
              </div>

              {/* Desktop Navigation Links Container */}
              <nav style={{ width: 'auto', flexShrink: 0 }}> 
                <ul style={{ display: 'flex', listStyle: 'none', gap: '1.75rem', alignItems: 'center', margin: 0, padding: 0, width: '100%', justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
                  <li>
                    <button
                      onClick={() => handleNavClick('spaces')}
                      className={`main-nav-link ${currentPage === 'spaces' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'spaces' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      Spaces & solutions
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleNavClick('projects')}
                      className={`main-nav-link ${currentPage === 'projects' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'projects' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      Projects
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`main-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'about' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      About us
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleNavClick('latest')}
                      className={`main-nav-link ${currentPage === 'latest' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'latest' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      Updates
                    </button>
                  </li>

                  {/* CATALOGUES DROPDOWN MENU */}
                  <li 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setIsWhereToBuyHovered(true)}
                    onMouseLeave={() => setIsWhereToBuyHovered(false)}
                  >
                    <button
                      onClick={() => handleNavClick('collection')}
                      className={`main-nav-link ${currentPage === 'collection' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'collection' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <span>Catalogues</span>
                      <ChevronDown size={14} />
                    </button>

                    {isWhereToBuyHovered && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                        border: '1px solid #E8E6E2',
                        padding: '0.75rem 0',
                        minWidth: '180px',
                        zIndex: 1000,
                        animation: 'megaSlideDown 0.2s ease'
                      }}>
                        {[
                          { label: 'Sittings', category: 'Ergonomic Chairs' },
                          { label: 'Workstations', category: 'Workstations' },
                          { label: 'Metal storages', category: 'Storage & Accessories' }
                        ].map((cat) => (
                          <button
                            key={cat.label}
                            onClick={() => {
                              if (setSelectedCategory) setSelectedCategory(cat.category);
                              setCurrentPage('collection');
                              setIsWhereToBuyHovered(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '0.65rem 1.25rem',
                              fontSize: '0.85rem',
                              fontWeight: 500,
                              color: '#1D1D1D',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s ease, color 0.2s ease'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F5F3EE'; e.currentTarget.style.color = 'var(--accent)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1D1D1D'; }}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>

                  {/* SHIFTED CONTACT US TO THE FAR RIGHT */}
                  <li>
                    <button
                      onClick={() => handleNavClick('contact')}
                      className={`main-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: currentPage === 'contact' ? 'var(--accent)' : 'var(--text-primary)',
                        padding: '0.5rem 0',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      Contact us
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
                color: 'var(--text-primary)'
              }}
              className="mobile-nav-toggle-styles"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* PRODUCTS MEGA MENU DROP-DOWN */}
        {isMegaOpen && (
          <div 
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-premium)',
              borderTop: '1px solid rgba(0, 0, 0, 0.05)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
              padding: '3rem 4rem',
              zIndex: 999,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '2.5rem',
              boxSizing: 'border-box',
              animation: 'megaSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {megaMenuData.map((col) => (
              <div 
                key={col.key} 
                onMouseEnter={() => setActiveHoverCategory(col.key)}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <h4 
                  onClick={() => handleMegaItemClick(col.categoryKey)}
                  className="megamenu-header"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'color 0.25s ease',
                    margin: 0
                  }}
                >
                  {col.title}
                </h4>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {col.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleMegaItemClick(col.categoryKey, item)}
                        className="megamenu-item-link"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          fontWeight: 400,
                          color: 'var(--text-secondary)',
                          textAlign: 'left',
                          transition: 'color 0.25s ease, transform 0.25s ease',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}


      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#FFFFFF',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '7.5rem 2rem 2.5rem 2rem',
          boxSizing: 'border-box',
          animation: 'fadeIn 0.3s ease-out',
          overflowY: 'auto'
        }}>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            width: '100%',
            maxWidth: '480px',
            margin: '0 auto',
            padding: 0
          }}>
            {/* Products Accordion */}
            <li style={{ width: '100%' }}>
              <button
                onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  cursor: 'pointer',
                  color: currentPage === 'collection' ? 'var(--accent)' : 'var(--text-primary)',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.25rem 0'
                }}
              >
                <span>Products</span>
                <span style={{ 
                  fontSize: '1.1rem', 
                  transform: mobileProductsExpanded ? 'rotate(90deg)' : 'none', 
                  transition: 'transform 0.3s ease',
                  color: 'var(--text-tertiary)'
                }}>➔</span>
              </button>
              
              {mobileProductsExpanded && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginTop: '0.75rem',
                  paddingLeft: '1rem',
                  width: '100%',
                  boxSizing: 'border-box',
                  borderLeft: '1px solid var(--border-color)',
                  animation: 'slideDownFast 0.3s ease'
                }}>
                  {megaMenuData.map((col) => {
                    const isExpanded = mobileExpandedCategory === col.key;
                    return (
                      <div key={col.key} style={{ width: '100%' }}>
                        <button
                          onClick={() => setMobileExpandedCategory(isExpanded ? null : col.key)}
                          style={{
                            background: 'none',
                            border: 'none',
                            width: '100%',
                            padding: '0.5rem 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            color: isExpanded ? 'var(--accent)' : 'var(--text-primary)',
                            textAlign: 'left',
                            cursor: 'pointer'
                          }}
                        >
                          <span>{col.title}</span>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{isExpanded ? '−' : '+'}</span>
                        </button>
                        
                        {isExpanded && (
                          <ul style={{
                            listStyle: 'none',
                            padding: '0.25rem 0 0.5rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            boxSizing: 'border-box',
                            animation: 'slideDownFast 0.25s ease'
                          }}>
                            {col.items.map((subItem) => (
                              <li key={subItem}>
                                <button
                                  onClick={() => {
                                    handleMegaItemClick(col.categoryKey);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '0.88rem',
                                    color: 'var(--text-secondary)',
                                    padding: '0.35rem 0',
                                    textAlign: 'left',
                                    width: '100%',
                                    cursor: 'pointer'
                                  }}
                                >
                                  {subItem}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>

            {/* Where to Buy Link */}
            <li style={{ width: '100%' }}>
              <button
                onClick={() => {
                  handleNavClick('wheretobuy');
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  cursor: 'pointer',
                  color: currentPage === 'wheretobuy' ? 'var(--accent)' : 'var(--text-primary)',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.25rem 0'
                }}
              >
                Where to Buy
              </button>
            </li>

            {/* Standard Mobile Nav links */}
            {[
              { label: 'Spaces & Solutions', page: 'spaces' },
              { label: 'Projects', page: 'projects' },
              { label: 'About Us', page: 'about' },
              { label: 'Updates', page: 'latest' },
              { label: 'Experience Centre', page: 'experience' },
              { label: 'Manufacturing Facility', page: 'experience' },
              { label: 'Contact Us', page: 'contact' }
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => {
                    handleNavClick(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    cursor: 'pointer',
                    color: currentPage === item.page ? 'var(--accent)' : 'var(--text-primary)',
                    textAlign: 'left',
                    padding: '0.25rem 0',
                    width: '100%'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Shop Now link */}
            <li>
              <a 
                href="https://shop.ergospace.in" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '0.25rem 0'
                }}
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* STYLES AND ANIMATIONS */}
      <style>{`
        .top-nav-link:hover {
          color: var(--accent) !important;
        }

        .main-nav-link {
          position: relative;
          transition: color 0.25s ease;
        }

        .main-nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--accent);
          transition: width 0.25s ease;
        }

        .main-nav-link:hover {
          color: var(--accent) !important;
        }

        .main-nav-link:hover::after {
          width: 100%;
        }

        .main-nav-link.active::after {
          width: 100%;
        }

        .where-to-buy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          border-color: rgba(226, 55, 68, 0.15) !important;
          background-color: #FFFFFF !important;
        }

        @media (min-width: 769px) {
          .desktop-nav-styles {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
          }
          .mobile-nav-toggle-styles {
            display: none !important;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes megaSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDownFast {
          from { height: 0; opacity: 0; }
          to { height: auto; opacity: 1; }
        }

        .megamenu-header:hover {
          color: var(--accent) !important;
        }

        .megamenu-item-link {
          position: relative;
        }
        
        .megamenu-item-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent);
          transition: width 0.25s ease;
        }

        .megamenu-item-link:hover {
          color: var(--text-primary) !important;
          transform: translateX(3px);
        }

        .megamenu-item-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
