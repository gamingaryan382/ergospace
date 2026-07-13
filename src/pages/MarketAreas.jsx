import React from 'react';
import { MapPin, Calendar, Building, Globe, Shield } from 'lucide-react';

export default function MarketAreas() {
  const regions = [
    { city: 'Delhi NCR', zone: 'Zone 1 (Standard Operating)', desc: 'Hub of corporate offices, tech parks, and enterprise headquarters.' },
    { city: 'Noida', zone: 'Zone 1 (Standard Operating)', desc: 'Location of our premium Urbtech Trade Center B2B Showroom.' },
    { city: 'Maharashtra', zone: 'Zone 2 (Standard Operating)', desc: 'Serving industrial zones and financial hubs in Mumbai and major cities.' },
    { city: 'Pune', zone: 'Zone 2 (Standard Operating)', desc: 'Delivering to major IT corridors and corporate innovation hubs.' },
    { city: 'Bangalore', zone: 'Zone 3 (Standard Operating)', desc: 'Our South-Indian technology workspace deployment focus.' },
    { city: 'Chennai', zone: 'Zone 4 (Standard Operating)', desc: 'Comprehensive shipping coverage for manufacturing and IT setups.' },
    { city: 'Lucknow', zone: 'Out Station Delivery (OSD)', desc: 'Flexible freight arrangement serving government and private workspaces.' },
    { city: 'Goa', zone: 'Out Station Delivery (OSD)', desc: 'Enabling remote work setups and hospitality project consultation.' },
    { city: 'Kolkata', zone: 'Out Station Delivery (OSD)', desc: 'Delivering workspace wellness solutions across East India.' }
  ];

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Corporate Reach
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Market Area
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '650px' }}>
            From our founding trading house in 2004 to becoming one of India's most respected office furniture solution providers, we serve workspace designs nationwide.
          </p>
        </div>

        {/* Founding Story Segment */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          padding: '4rem',
          marginBottom: '5rem',
          boxShadow: 'var(--shadow-subtle)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Our Foundation
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: '1.2', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Building Office Furniture Excellence Since 2004
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.7 }}>
              <p>
                Our Foundation stone was laid in Year 2004 by our Founder and Managing Director, <strong>Mr. Prashant Garg</strong>, as a small trading house.
              </p>
              <p>
                In Year 2005, we got incorporated as a Private Limited company and started our journey to become one of the most respected office furniture solution providers in the country, with interests in imports and distribution of global brands.
              </p>
            </div>
          </div>

          <div className="responsive-two-column-grid" style={{ gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <Calendar size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>2004</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Established</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <Building size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>2005</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Incorporated</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <Globe size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>Global</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Brands Imported</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <Shield size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>Pan India</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>Operating Scope</div>
            </div>
          </div>
        </div>

        {/* Operating Regions Section */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Operational Presence
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)' }}>
              Standard Delivery & OSD Cities
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {regions.map((region, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    backgroundColor: region.zone.includes('OSD') ? 'rgba(212, 163, 89, 0.1)' : 'rgba(226, 55, 68, 0.08)',
                    color: region.zone.includes('OSD') ? 'var(--accent)' : '#E23744'
                  }}>
                    {region.zone.replace(' (Standard Operating)', '')}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {region.city}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                    {region.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
