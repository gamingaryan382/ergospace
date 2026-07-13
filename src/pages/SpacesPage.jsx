import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Building, Landmark, GraduationCap, HeartPulse, Building2, Coffee } from 'lucide-react';

const SPACES_DATA = [
  {
    id: 'corporate',
    title: 'Corporate Workspaces',
    icon: <Building2 size={24} />,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    description: 'Calibrated architectural environments designed to support intense cognitive focus, active workplace flow, and modern aesthetics. Features cable-managed workstation benches, orthopedic task seating, and turnkey executive setups.',
    focusArea: 'Enterprise Headquarters & Innovation Hubs'
  },
  {
    id: 'co-working',
    title: 'Co-working Spaces',
    icon: <Coffee size={24} />,
    image: '/coworking_space.png',
    description: 'Heavy-duty commercial setups engineered for high-throughput daily operators. Offers maximum versatility, scratch-resistant finishes, and adaptable adjustments suited to diverse occupant profiles.',
    focusArea: 'Flexible Office Networks & Shared Studios'
  },
  {
    id: 'education',
    title: 'Educational Institutions',
    icon: <GraduationCap size={24} />,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Ergonomic lecture hall seating, collaborative library pods, and university lounge systems built to foster interactive learning, research focus, and student wellbeing.',
    focusArea: 'University Campuses & Advanced Research Centers'
  },
  {
    id: 'hospitality',
    title: 'Hotels & Hospitality',
    icon: <Coffee size={24} />,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Comfort-first luxury lounge chairs, reception lounges, and executive suite layouts designed to project prestige, high-end hospitality, and deep relaxation.',
    focusArea: 'Premium Hotel Lobbies & Executive Boardrooms'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Hospitals',
    icon: <HeartPulse size={24} />,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    description: 'Specialized orthopedic seating, cleanable performance upholstery, and ergonomic nursing station desks safeguarding the health of long-shift caretakers and medical executives.',
    focusArea: 'Clinical Reception, Ward Offices & Care Stations'
  },
  {
    id: 'government',
    title: 'Government Offices',
    icon: <Landmark size={24} />,
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80',
    description: 'Durable, high-integrity conference tables, committee rooms setup, and institutional seating certified to meet the highest durability standards and official structural parameters.',
    focusArea: 'State Departments, Council Chambers & Public Offices'
  }
];

export default function SpacesPage({ setCurrentPage }) {
  const handleViewProjects = () => {
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '8rem' }}>
      <div className="container-premium">
        
        {/* Page Title & Intro */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Industries Served
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Spaces We Transform
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '720px' }}>
            ErgoSpace designs and delivers physical seating & furniture frameworks across diverse sectors, fostering productivity, spatial harmony, and structural integrity.
          </p>
        </div>

        {/* Spaces Grid Showcase */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem'
        }}>
          {SPACES_DATA.map((space, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={space.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  borderBottom: idx !== SPACES_DATA.length - 1 ? '1px solid var(--border-color)' : 'none',
                  paddingBottom: idx !== SPACES_DATA.length - 1 ? '6rem' : '0'
                }}
              >
                {/* Image Showcase (Alternates left/right on desktop) */}
                <div style={{
                  order: isEven ? 1 : 2,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-medium)',
                  border: '1px solid var(--border-color)',
                  height: 'clamp(300px, 40vw, 480px)',
                  position: 'relative'
                }} className="image-zoom-container">
                  <img 
                    src={space.image} 
                    alt={space.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    className="image-zoom-img"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--text-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '30px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: 'var(--shadow-subtle)'
                  }}>
                    {space.icon}
                    <span>{space.title}</span>
                  </div>
                </div>

                {/* Content Panel */}
                <div style={{ order: isEven ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Focus Sector: {space.focusArea}
                  </span>
                  
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    color: 'var(--text-primary)'
                  }}>
                    {space.title}
                  </h2>
                  
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    lineHeight: 1.7
                  }}>
                    {space.description}
                  </p>

                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      <ShieldCheck size={16} color="var(--accent)" />
                      <span>Certified Durability</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      <Sparkles size={16} color="var(--accent)" />
                      <span>Bespoke Layout Finishes</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <button 
                      onClick={handleViewProjects}
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <span>Explore Case Studies</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
