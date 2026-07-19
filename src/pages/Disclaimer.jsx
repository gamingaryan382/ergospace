import React from 'react';

export default function Disclaimer() {
  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Legal
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Disclaimer
          </h1>
        </div>

        <div style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            ERGO SPACE (Tirupati Work Space Solutions Private Limited) will not be responsible for any damages your business may suffer to the extent permissible by law. We make no warranties of any kind, express, implied, statutory or otherwise for any Service we provide.
          </p>

          <p>
            Under no circumstances, ERGO SPACE (Tirupati Work Space Solutions Private Limited), its officers, agents or anyone else involved in creating, producing or distributing the service shall be liable for any direct, indirect, incidental, special or consequential damages that result from the use or the inability to use the Service; or that results from mistakes, omissions, interruptions, deletion of files, errors, defects, delays in operation, or transmission or any failure of performance, whether or not limited to acts of God, communication failure, theft, destruction or unauthorized access to our records, programs or services.
          </p>

          <p>
            ERGO SPACE (Tirupati Work Space Solutions Private Limited) disclaims any intention to censor, edit or engage in ongoing review or surveillance of communications stored on or transmitted through its facilities by customers or others. ERGO SPACE (Tirupati Work Space Solutions Private Limited) may however review, delete or block access to communications that could harm e-Commerce websites, its customers or third parties.
          </p>

          <p>
            The grounds on which ERGO SPACE (Tirupati Work Space Solutions Private Limited) may take such action include, but are not limited to, actual or potential violations of our Terms of Service and/or Acceptable Use of Policy.
          </p>

          <p>
            We reserve the right to revise our policies or terms of service at any time.
          </p>

          <p>
            Notification of all amendments will be displayed publicly on our website – it is your responsibility to check our website periodically.
          </p>

          <p>
            All logos and/or registered trademarks displayed on any part of our website are the property of their respective copyright owners. If you have reason to believe that any form of Intellectual Property or Copyright infringement has occurred in any part of our website please contact us at, <a href="mailto:contact@ergospace.in" style={{ color: 'var(--accent)' }}>contact@ergospace.in</a>
          </p>
        </div>

      </div>
    </div>
  );
}
