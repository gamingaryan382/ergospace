import React from 'react';

export default function WarrantyPolicy() {
  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Customer Support
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Warranty Policy
          </h1>
        </div>

        <div style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            Welcome to ERGO SPACE website.
          </p>
          
          <p>
            The terms “We” / “Us” / “Our”/ ”Company” individually and collectively refer to ERGO SPACE (Tirupati Work Space Solutions Private Limited) and the terms “Visitor” / ”User” / “You” / “Your” / “Yourself” refer to the users. This page states the WARRANTY POLICY under which you (Visitor) may visit this website (www.ergospace.in | www.shop.ergospace.in | www.workfromhomekits.in) and make your online purchase(s) seamlessly. Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this website.
          </p>

          <p>
            As per our Warranty Policy, the defect liability period is <strong>1 year</strong> which starts from the Invoice date, applicable on all Products listed on this website. Any manufacturing defect(s) noticed under this tenure will be repaired/serviced by us at no cost while any add-on service(s) cost involved in doing so, shall be applicable extra. Add-on service(s) includes freight charges, Installation services & Extra Packaging required.
          </p>

          <p>
            There are few Terms & Conditions which apply while considering any Product(s) under Warranty. These terms expressly state what is included in our Product Warranty.
          </p>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              For Office Chairs
            </h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Failure of Gas Lift</li>
              <li>Failure of Mechanism</li>
              <li>Failure of Base / Castor wheels</li>
              <li>Screw holes below Chair seat do not match with the respective adjoining components like Armrests or, Mechanism.</li>
              <li>Compression in chair seat - PU foam permanent compression above 10%</li>
              <li>Broken part(s)/component(s) found at the time of unboxing (Delivery Instructions apply here. Kindly refer to Shipping Policy for this claim)</li>
              <li>Nylon/Aluminum Base – Tested for weight up to 120 kgs</li>
              <li>Gas Lift – Tested for 1.5 Lakhs cycles</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Component Warranty Scope
            </h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Chairs:</strong> Any manufacturing defect – Like failure of Gas lift/Mechanism/ Base /Castors.</li>
              <li><strong>Hydraulic Table:</strong> Hydraulic warranted for 2 years.</li>
              <li><strong>Electrical Table:</strong> Motor warranted for 2 Years and Mechanism for 1 Year.</li>
              <li><strong>Tabletop:</strong> 1 year for any defect like – Edge Bending coming out/ laminate fading.</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Warranty Exclusions
            </h3>
            <p>
              This warranty expressly excludes followings:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li>Fabric, foam, Mesh and other covering material torn due to misuse.</li>
              <li>Work surface damaged/ chipped due to misuse.</li>
              <li>Powder coated peeling due to misuse.</li>
              <li>Cleaning done with any acidic material.</li>
              <li>Do not Discard the Box Packaging till the Warranty period expires.</li>
              <li>MDF and particle board has moisture between 7% to 12% at the time of manufacturing. Fungus may accumulate under adverse condition like higher humidity, higher temperature and improper ventilation. If the furniture remains in above mentioned condition, we do not cover that under warranty.</li>
              <li>Product mishandling is not covered under Warranty which is subject to the verification by our Production & Quality department.</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1.5rem', textAlign: 'center' }}>
            <p>
              For any further clarifications, please write to us at <a href="mailto:contact@ergospace.in" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>contact@ergospace.in</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
