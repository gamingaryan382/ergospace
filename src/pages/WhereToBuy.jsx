import React from 'react';
import { ShoppingBag, Building, Users } from 'lucide-react';

export default function WhereToBuy({ setCurrentPage }) {
  const channels = [
    {
      icon: <ShoppingBag size={28} strokeWidth={1.5} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />,
      title: 'Personal Use',
      description: 'Purchase individual ergonomic chairs and workspace accessories directly from our official store with doorstep delivery.',
      cta: 'Go to Online Store',
      link: 'https://shop.ergospace.in',
      isExternal: true
    },
    {
      icon: <Building size={28} strokeWidth={1.5} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />,
      title: 'Business Accounts',
      description: 'Request bulk pricing, custom materials, and complimentary design consultation for corporate offices and commercial buildings.',
      cta: 'Contact Commercial Sales',
      action: () => setCurrentPage('contact')
    },
    {
      icon: <Users size={28} strokeWidth={1.5} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />,
      title: 'Reseller & Dealer Network',
      description: 'Apply to become an authorized ErgoSpace distributor or retail partner and represent our furniture portfolio in your region.',
      cta: 'Partner With Us',
      action: () => setCurrentPage('contact')
    }
  ];

  return (
    <div className="container-premium" style={{ paddingTop: '2.5rem', paddingBottom: '8rem', maxWidth: '1200px' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Purchasing Channels</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
          Where to Buy
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 300, marginTop: '0.5rem', maxWidth: '600px', lineHeight: 1.5 }}>
          Choose the right pathway to buy ErgoSpace seating systems, modular workspaces, and commercial furniture.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {channels.map((ch, idx) => (
          <div 
            key={idx}
            className="where-to-buy-card"
            style={{
              backgroundColor: '#F9F8F6',
              borderRadius: '12px',
              padding: '3rem 2.25rem',
              border: '1px solid rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div>
              {ch.icon}
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>
                {ch.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                {ch.description}
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              {ch.isExternal ? (
                <a 
                  href={ch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    display: 'inline-flex', 
                    padding: '0.9rem 2rem', 
                    fontSize: '0.85rem', 
                    textDecoration: 'none',
                    textAlign: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span>{ch.cta}</span>
                </a>
              ) : (
                <button
                  onClick={ch.action}
                  className="btn-secondary"
                  style={{ 
                    width: '100%',
                    padding: '0.9rem 2rem', 
                    fontSize: '0.85rem' 
                  }}
                >
                  <span>{ch.cta}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
