import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const megaMenuData = [
  {
    title: 'Ergonomic Seating',
    key: 'seating',
    categoryKey: 'Ergonomic Chairs',
    items: ['Executive Chairs', 'Task Chairs', 'Mesh Chairs', 'Leather Chairs', 'Visitor Chairs', 'Training Chairs', 'Lounge Seating'],
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
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    title: 'Spaces',
    key: 'spaces',
    categoryKey: 'Collaboration Spaces',
    items: ['Corporate Offices', 'Education', 'Hospitals', 'Hotels', 'Co-working', 'Government'],
    featured: {
      title: 'Spaces We Serve',
      description: 'Custom workspaces and collaboration interiors designed to serve enterprise environments.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    }
  },
  {
    title: 'Accessories',
    key: 'accessories',
    categoryKey: 'Storage & Accessories',
    items: ['Monitor Arms', 'Keyboard Trays', 'Power Modules', 'Partitions', 'Desk Accessories', 'Cable Management'],
    featured: {
      title: 'Workspace Accessories',
      description: 'Dynamic monitor arms, desk organizers, and cable management tools.',
      image: '/accessories_all.png'
    }
  }
];

const categoryPanels = {
  seating: megaMenuData[0].featured,
  workstations: megaMenuData[1].featured,
  tables: megaMenuData[2].featured,
  storage: megaMenuData[3].featured,
  spaces: megaMenuData[4].featured,
  accessories: megaMenuData[5].featured
};

export default function Navbar({ currentPage, setCurrentPage, setSelectedCategory }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hover state triggers for Desktop Mega Menu
  const [isCollectionHovered, setIsCollectionHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [activeHoverCategory, setActiveHoverCategory] = useState('seating');

  // Mobile navigation expansion states
  const [mobileCollectionExpanded, setMobileCollectionExpanded] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);

  // Premium exit-delay handler to prevent hover glitches
  const [isMegaOpen, setIsMegaOpen] = useState(false);

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

  const navItems = [
    { label: 'Exhibition', page: 'home' },
    { label: 'Collection', page: 'collection' },
    { label: 'Spaces', page: 'spaces' },
    { label: 'Experience Centre', page: 'experience' },
    { label: 'Projects', page: 'projects' },
    { label: 'About Us', page: 'about' },
    { label: 'Latest', page: 'latest' }
  ];

  const handleNavClick = (page) => {
    if (page === 'collection' && setSelectedCategory) {
      setSelectedCategory('All');
    }
    setCurrentPage(page);
  };

  const handleMegaItemClick = (categoryKey, itemName = null) => {
    if (setSelectedCategory) {
      setSelectedCategory(categoryKey);
    }
    setCurrentPage('collection');
    setIsCollectionHovered(false);
    setIsMenuHovered(false);
    
    if (itemName) {
      setTimeout(() => {
        const id = `subcategory-${itemName.toLowerCase().replace(' ', '-')}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 250);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentFeatured = categoryPanels[activeHoverCategory] || categoryPanels.seating;

  return (
    <>
      {/* Fixed White/Glass Header */}
      <header className={`premium-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container-premium" style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'var(--transition-fast)'
        }}>
          
          {/* Brand Logo */}
          <div 
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
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
                height: '32px', 
                width: 'auto', 
                objectFit: 'contain', 
                mixBlendMode: 'multiply' 
              }} 
            />
          </div>

          {/* Desktop Navigation Redesign */}
          <nav style={{ display: 'none' }} className="desktop-nav-styles">
            <ul className="nav-menu">
              {navItems.map((item) => {
                if (item.page === 'collection') {
                  return (
                    <li 
                      key={item.page}
                      onMouseEnter={() => setIsCollectionHovered(true)}
                      onMouseLeave={() => setIsCollectionHovered(false)}
                      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
                    >
                      <button
                        onClick={() => handleNavClick(item.page)}
                        className={`nav-link-btn ${currentPage === item.page || isMegaOpen ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={item.page}>
                    <button
                      onClick={() => handleNavClick(item.page)}
                      className={`nav-link-btn ${currentPage === item.page ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              color: 'var(--text-primary)'
            }}
            className="mobile-nav-toggle-styles"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* PREMIUM DESKTOP MEGA MENU */}
        {isMegaOpen && (
          <div 
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            className="megamenu-panel"
            style={{
              position: 'absolute',
              top: 'calc(100% - 10px)',
              left: 0,
              width: '100%',
              backgroundColor: '#FCFCFA', // Warm white
              boxShadow: 'var(--shadow-premium)',
              borderRadius: '0 0 20px 20px',
              borderTop: '1px solid rgba(0, 0, 0, 0.04)',
              padding: '3rem 4rem',
              zIndex: 999,
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '2.5rem',
              boxSizing: 'border-box',
              animation: 'megaSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Columns */}
            {megaMenuData.map((col) => (
              <div 
                key={col.key} 
                onMouseEnter={() => setActiveHoverCategory(col.key)}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Column Header */}
                <h4 
                  onClick={() => handleMegaItemClick(col.categoryKey)}
                  className="megamenu-header"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'color 0.25s ease',
                    margin: 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {col.title}
                </h4>
                
                {/* Column Items */}
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
                          fontSize: '0.82rem',
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

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav-styles {
            display: block !important;
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

        .megamenu-cta-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .megamenu-panel {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 2.5rem !important;
            gap: 2rem !important;
            border-radius: 0 0 16px 16px !important;
          }
          .megamenu-feature-panel {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--bg-primary)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '7.5rem 2rem 2rem 2rem',
          boxSizing: 'border-box',
          animation: 'fadeIn 0.3s ease-out',
          overflowY: 'auto'
        }}>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.75rem',
            width: '100%',
            maxWidth: '480px',
            margin: '0 auto',
            padding: 0
          }}>
            {navItems.map((item) => {
              if (item.page === 'collection') {
                return (
                  <li key={item.page} style={{ width: '100%' }}>
                    <button
                      onClick={() => setMobileCollectionExpanded(!mobileCollectionExpanded)}
                      style={{
                        background: 'none',
                        fontSize: '1.75rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        cursor: 'pointer',
                        color: currentPage === item.page ? 'var(--accent)' : 'var(--text-primary)',
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.25rem 0'
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ 
                        fontSize: '1.1rem', 
                        transform: mobileCollectionExpanded ? 'rotate(90deg)' : 'none', 
                        transition: 'transform 0.3s ease',
                        color: 'var(--text-tertiary)'
                      }}>➔</span>
                    </button>
                    
                    {/* Mobile Accordion Wrapper */}
                    {mobileCollectionExpanded && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        marginTop: '1rem',
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
                                  width: '100%',
                                  padding: '0.6rem 0',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  fontSize: '1.1rem',
                                  fontWeight: 500,
                                  color: isExpanded ? 'var(--accent)' : 'var(--text-primary)',
                                  textAlign: 'left',
                                  cursor: 'pointer'
                                }}
                              >
                                <span>{col.title}</span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{isExpanded ? '−' : '+'}</span>
                              </button>
                              
                              {/* Sub items expansion */}
                              {isExpanded && (
                                <ul style={{
                                  listStyle: 'none',
                                  padding: '0.25rem 0 0.5rem 1rem',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '0.6rem',
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
                                          fontSize: '0.9rem',
                                          color: 'var(--text-secondary)',
                                          padding: '0.4rem 0',
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
                );
              }

              // Standard Nav Link buttons
              return (
                <li key={item.page}>
                  <button
                    onClick={() => {
                      handleNavClick(item.page);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      background: 'none',
                      fontSize: '1.75rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      cursor: 'pointer',
                      color: currentPage === item.page ? 'var(--accent)' : 'var(--text-primary)',
                      border: 'none',
                      outline: 'none',
                      textAlign: 'left',
                      padding: '0.25rem 0',
                      width: '100%'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
