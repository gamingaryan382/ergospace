import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/products';
import { Search, MapPin, Tag, ChevronRight, X, ArrowRight, Info } from 'lucide-react';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [activeProject, setActiveProject] = useState(null);

  // Categories extraction
  const categories = useMemo(() => {
    const list = new Set();
    PORTFOLIO_PROJECTS.forEach(p => {
      if (p.category) list.add(p.category);
    });
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.itemsUsed.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Reset pagination on filter change
  React.useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredProjects.length));
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Our Portfolio
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Spaces We've Built
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
            Discover our turnkey corporate deployments, university lounges, startup workstations, and custom executive setups delivered across India.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          padding: 'clamp(1.25rem, 5vw, 2.5rem)',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Search bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search 
              size={18} 
              color="var(--text-secondary)" 
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search by client name, location, or equipment (e.g. Lenskart, manesar, workstation)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1.1rem 1.5rem 1.1rem 3.2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-tertiary)',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Filter Tags */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: selectedCategory === cat ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  background: selectedCategory === cat ? 'var(--bg-dark)' : 'var(--bg-tertiary)',
                  color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
                  border: selectedCategory === cat ? '1px solid var(--bg-dark)' : '1px solid var(--border-color)'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <div>
            Showing <strong>{filteredProjects.length}</strong> workspace projects
            {selectedCategory !== 'All' && <span> under <strong>{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </div>
        </div>

        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <Info size={40} color="var(--text-tertiary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No projects found</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Try broadening your search term or selecting a different category.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3.5rem'
          }} className="projects-premium-grid">
            {displayedProjects.map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s'
                }}
                className="project-page-card"
              >
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} 
                    className="proj-img"
                  />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(17, 17, 17, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {proj.category}
                  </span>
                </div>
                
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>
                      <MapPin size={12} color="var(--accent)" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: '1.25', color: 'var(--text-primary)' }}>
                      {proj.client}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6, flex: 1 }}>
                    {proj.description.length > 95 ? `${proj.description.slice(0, 95)}...` : proj.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {proj.itemsUsed.slice(0, 3).map((item, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.7rem',
                        backgroundColor: 'rgba(17,17,17,0.04)',
                        color: 'var(--text-secondary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}>
                        <Tag size={8} /> {item}
                      </span>
                    ))}
                    {proj.itemsUsed.length > 3 && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', padding: '2px' }}>
                        +{proj.itemsUsed.length - 3} more
                      </span>
                    )}
                  </div>

                  <div style={{ 
                    marginTop: 'auto', 
                    paddingTop: '1.25rem', 
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                      <span>See details</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <button 
              onClick={loadMore}
              className="btn-primary"
            >
              <span>Load More Projects ({filteredProjects.length - visibleCount} left)</span>
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 2010,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }} onClick={() => setActiveProject(null)}>
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
              onClick={() => setActiveProject(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={22} />
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {activeProject.category}
              </span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                {activeProject.client} Setup
              </h3>
            </div>

            <div style={{
              height: '260px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)'
            }}>
              <img src={activeProject.image} alt={activeProject.client} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="responsive-two-column-grid" style={{
              gap: '1.5rem',
              fontSize: '0.85rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1.25rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Location</span>
                <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px', marginTop: '2px' }}>
                  <MapPin size={12} color="var(--accent)" /> {activeProject.location}
                </span>
              </div>
              <div>
                <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Scope</span>
                <span style={{ fontWeight: 600, marginTop: '2px', display: 'block' }}>{activeProject.size}</span>
              </div>
            </div>

            <div>
              <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.5rem' }}>Items Supplied</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {activeProject.itemsUsed.map((item, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    textTransform: 'capitalize'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
              
              <span style={{ color: 'var(--text-tertiary)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.25rem' }}>Project Details</span>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                {activeProject.description}
              </p>
            </div>

            <button 
              onClick={() => {
                alert(`Inquiry sent for ${activeProject.client} setup details.`);
                setActiveProject(null);
              }}
              className="btn-primary" 
              style={{ width: '100%', marginTop: '1rem', display: 'flex', gap: '0.5rem' }}
            >
              <span>Inquire About This Space Design</span>
              <ArrowRight size={16} />
            </button>

          </div>
        </div>
      )}

      <style>{`
        .project-page-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-premium) !important;
        }
        .project-page-card:hover .proj-img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
