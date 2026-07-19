import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function Latest({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Top Modular Office Furniture in Delhi for Modern Workspaces',
      excerpt: 'Discover how modern modular furniture transforms workplace layouts by combining smart storage, adaptive workstations, and collaborative spaces designed for focus and flow.',
      category: 'Modular Workspaces',
      date: 'September 08, 2025',
      readTime: '5 min read',
      tags: ['ergonomic furniture', 'Modular Manufacturer', 'modular office furniture', 'storage', 'workstation'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Ergonomic Office Chairs in Gurgaon – Boost Comfort & Productivity',
      excerpt: 'A comprehensive look into finding the right executive, leatherite, and mesh chairs that maintain orthopedic support and support high productivity through active seating.',
      category: 'Office Chairs',
      date: 'September 05, 2025',
      readTime: '4 min read',
      tags: ['office furniture', 'chair manufacturer', 'ergonomic furniture', 'executive chair', 'Leatherite Chair', 'Md Chair', 'office chair'],
      image: '/gurgaon_chair.png'
    },
    {
      id: 3,
      title: 'Guide to Choosing the Right Office Furniture in Delhi NCR',
      excerpt: 'A master guide on choosing modular desks, ergonomic revolving chairs, and collaborative workspaces tailored to standard corporate operating pin codes and scales.',
      category: 'Modular Workspaces',
      date: 'September 04, 2025',
      readTime: '6 min read',
      tags: ['modular office furniture', 'office chair', 'office furniture', 'Office Manufactures', 'Revolving chair'],
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Best Office Chairs with Lumbar Support: Your Guide to a Healthier Workday',
      excerpt: 'ErgoSpace provides the best office furniture configurations designed with target lumbar support to reduce postural stress and prevent chronic spinal compression.',
      category: 'Office Chairs',
      date: 'August 28, 2024',
      readTime: '5 min read',
      tags: ['office chair', 'office furniture'],
      image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'How to overcome 5 major pain points due to unhealthy sedentary lifestyle.',
      excerpt: 'An investigation by our Production & Quality department on key pain points caused by standard sedentary desks and how active posture helps.',
      category: 'Ergonomics & Health',
      date: 'August 05, 2024',
      readTime: '4 min read',
      tags: ['health', 'workplace', 'sedentary lifestyle'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Important Guidelines For Correct Sitting Posture',
      excerpt: 'Aligning your head, spine, and armrests. Explore our expert-consulted posture guidelines to calibrate your height-adjustable desks and office chairs.',
      category: 'Ergonomics & Health',
      date: 'October 10, 2022',
      readTime: '3 min read',
      tags: ['posture', 'ergonomics', 'sitting guidelines'],
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'ERGONOMICS & THE DYNAMIC CLASSROOMS',
      excerpt: 'How dynamic educational furniture supports focused learning. Re-thinking classroom ergonomics for active student engagement and comfort.',
      category: 'Education Design',
      date: 'July 20, 2022',
      readTime: '5 min read',
      tags: ['classroom design', 'dynamic learning', 'education'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'ERGONOMICS & WORKPLACE EFFICIENCY',
      excerpt: 'Quantifying the correlation between physical comfort, pressure distribution, and output efficiency in modern corporate office environments.',
      category: 'Ergonomics & Health',
      date: 'February 05, 2022',
      readTime: '4 min read',
      tags: ['efficiency', 'ergonomics', 'productivity'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'The Best Office Furniture For a Healthy Work-Life Balance',
      excerpt: 'Designing spaces that separate work from relaxation. Selecting furniture that facilitates seamless transition and comfort in hybrid environments.',
      category: 'Work-Life Balance',
      date: 'June 21, 2021',
      readTime: '5 min read',
      tags: ['healthy work-life', 'office furniture', 'balance'],
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      title: 'Work from Home : Challenges and Solutions',
      excerpt: 'Tackling the key friction points of remote work setups: from improper back support to poor spatial configuration with modern solutions.',
      category: 'Work-Life Balance',
      date: 'June 21, 2021',
      readTime: '4 min read',
      tags: ['WFH', 'challenges', 'solutions', 'remote work'],
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      title: 'What is ergonomics ?',
      excerpt: 'An introductory breakdown of ergonomics: the science of designing equipment and workspaces to fit the physical capabilities of human bodies.',
      category: 'Ergonomics & Health',
      date: 'June 21, 2021',
      readTime: '3 min read',
      tags: ['ergonomics', 'introduction', 'basics'],
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Office Chairs', 'Modular Workspaces', 'Ergonomics & Health', 'Education Design', 'Work-Life Balance'];

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Updates & Insights
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Latest from Ergo Space
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '650px' }}>
            Keep up with our state-of-the-art Gurgaon factory activities, Noida showroom launches, BIFMA compliance updates, and active design trends.
          </p>
        </div>

        {/* Categories Bar */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.5rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--bg-dark)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: activeCategory === cat ? 600 : 400,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                border: activeCategory === cat ? 'none' : '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem'
        }}>
          {filteredArticles.map((art) => (
            <article 
              key={art.id}
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)'
              }}
              className="article-card-hover"
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={art.image} 
                  alt={art.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} 
                  className="art-img"
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 8px',
                  borderRadius: '2px'
                }}>
                  {art.category}
                </span>
              </div>

              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-tertiary)', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {art.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: '1.25', color: 'var(--text-primary)' }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                  {art.excerpt}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      <style>{`
        .article-card-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
        }
        .article-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-premium);
        }
        .article-card-hover:hover .art-img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
