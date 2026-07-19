import React from 'react';
import { Target, Activity, Heart, Shield, Award, MapPin } from 'lucide-react';

export default function AboutUs({ setCurrentPage }) {
  const certificationsList = [
    { title: 'ISO 9001', desc: 'Quality Management Systems' },
    { title: 'ISO 14001', desc: 'Environmental Management Systems' },
    { title: 'ISO 45001', desc: 'Occupational Health & Safety' },
    { title: 'ISO 37001', desc: 'Anti-Bribery Management' },
    { title: 'BIFMA Compliant', desc: 'Global Commercial Furniture Quality' },
    { title: 'GREEN GUARD', desc: 'Certified Low Chemical Emissions (Indoor Air Quality)' }
  ];

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem' }}>
        
        {/* Banner Section */}
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Our Heritage
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Our Journey So Far
          </h1>
          <p className="editorial-subtitle" style={{ margin: '0 auto', maxWidth: '800px', lineHeight: '1.8', fontWeight: 300 }}>
            ErgoSpace (under Tirupati Workspace Solutions Pvt Ltd) has evolved from a small trading house in 2004 to India's premier, state-of-the-art office furniture manufacturer.
          </p>
        </div>

        {/* Founder & History Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '6rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '5rem'
        }}>
          {/* Founder Image Portrait */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid var(--border-color)',
            height: 'clamp(320px, 45vw, 520px)'
          }}>
            <img 
              src="/prashant_garg.png" 
              alt="Mr. Prashant Garg - Founder of ErgoSpace" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)',
              padding: '2rem',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.25rem' }}>
                Mr. Prashant Garg
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                Founder & Managing Director
              </p>
            </div>
          </div>

          {/* History Bio Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              The Founder's Vision
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 300 }}>
              Our Foundation stone was laid in the Year <strong>2004</strong> by our Founder and Managing Director, <strong>Mr. Prashant Garg</strong>, as a small trading house. In <strong>2005</strong>, we got incorporated as a Pvt Ltd company and started our journey to become one of the most respected Office furniture Solution providers in the country, with interests in imports and distribution of global brands.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 300 }}>
              After 10 years of successful leadership in the trading market, in the Year <strong>2015</strong>, we introduced our brand <strong>"ERGO SPACE"</strong> with a state-of-the-art manufacturing facility in Gurugram, branch offices in Noida and Delhi, and sales and service support Pan India under our newly formed company <strong>Tirupati Workspace Solutions Pvt Ltd</strong> as a one-point solution to all your office furniture needs.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 300 }}>
              Today, we are a proud ISO 9001, ISO 14001, ISO 45001, and ISO 37001 certified company. We have a large portfolio of customized and standard workspace solutions like Office Chairs, Workstations, Cabin & Meeting Room furniture, Kitchens & wardrobes, Reception tables, Carpet Tiles, and Lounge furniture.
            </p>
          </div>
        </div>

        {/* Why We Exist: Mission & Vision */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '6rem'
        }}>
          {/* Vision */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={20} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Our Vision</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, fontStyle: 'italic' }}>
              "We aspire ERGO SPACE products are experienced by everyone once in a lifetime."
            </p>
          </div>

          {/* Mission */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={20} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Our Mission</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              "We shall exceed our customer expectations in quality, design, delivery & cost through continuous improvement and customer interactions."
            </p>
          </div>
        </div>

        {/* Culture, Design Philosophy & Inspiration */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          marginBottom: '6rem'
        }}>
          {/* Design Philosophy */}
          <div style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
            <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Design Philosophy</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              DESIGN is an integral part of our company philosophy. We aim to fuse distinctive looks with ergonomics. Our friendly and flexible design team ensures that your space can evolve with needs of your business. Adaptability, versatility, and customization are the rock-solid ideologies on which we stand.
            </p>
          </div>

          {/* Culture & Values */}
          <div style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
            <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Culture & Values</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              Company culture is inextricably linked to branding. We want to attract the best employees and inspire growth and success, and we are invested in building a great brand. We think of culture, passion, efficiency, and core values as part of a Brand’s DNA. This is the stuff our company is made of!
            </p>
          </div>

          {/* Inspiration */}
          <div style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}>
            <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Inspiration</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              We are inspired by dynamic and enigmatic furniture pieces that meet the eye and make us feel happy to be in such surroundings. Elevate your workspace setting to bring energy and focus.
            </p>
          </div>
        </div>

        {/* Why Us Statistics Grid */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: 'clamp(1.5rem, 5vw, 4rem)',
          marginBottom: '6rem',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '3.5rem' }}>
            Why ErgoSpace?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>20+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Years Experience</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>At your service</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>1,00,000</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Sq. Ft. Factory</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Gurugram In-house manufacturing</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>9,000</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Sq. Ft. Showroom</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Noida sector 132 site</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>5000+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Projects Done</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>Pan India support</div>
            </div>
          </div>
        </div>

        {/* Certifications Block */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '3.5rem' }}>
            Our Certifications
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {certificationsList.map((cert, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '1rem',
                backgroundColor: 'var(--bg-tertiary)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                alignItems: 'start'
              }}>
                <div style={{ color: 'var(--accent)', marginTop: '2px' }}>
                  <Shield size={18} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>{cert.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locate Us addresses Section */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <MapPin color="var(--accent)" /> LOCATE US
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}>
            {/* Showroom */}
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-subtle)'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🏢 Corporate Office / Showroom
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 300 }}>
                Tower IS5, Ground & 1st Floor, Urbtech Trade Center,<br />
                35, adjacent DPS School, Block B, Sector 132,<br />
                Noida, Uttar Pradesh 201304
              </p>
            </div>

            {/* Factories */}
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-subtle)'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🏭 Factory Locations
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 300 }}>
                <div>
                  <strong>Manufacturing Unit 1:</strong><br />
                  Plot No.163, Sector 6, IMT Manesar, Gurugram, Haryana 122051
                </div>
                <div>
                  <strong>Manufacturing Unit 2:</strong><br />
                  Plot No.144, Sector 3, IMT Manesar, Gurugram, Haryana 122051
                </div>
                <div>
                  <strong>Manufacturing Unit 3:</strong><br />
                  Plot No. 32 Street No.04 Sector 7 A Met Yakubpur Badli, Jhajjar Haryana-124105
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
