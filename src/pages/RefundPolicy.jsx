import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium" style={{ paddingBottom: '6rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Customer Support
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Refund & Cancellation Policy
          </h1>
        </div>

        <div style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1rem', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            Welcome to ERGO SPACE website.
          </p>
          
          <p>
            The terms “We” / “Us” / “Our”/ ”Company” individually and collectively refer to ERGO SPACE (Tirupati Work Space Solutions Private Limited) and the terms “Visitor” / ”User” / “You” / “Your” / “Yourself” refer to the users. This page states the REFUND & CANCELLATION POLICY under which you (Visitor) may visit this website (www.ergospace.in | www.shop.ergospace.in | www.workfromhomekits.in) and make your online purchase(s) seamlessly. Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this website.
          </p>

          <p>
            Our focus is complete customer satisfaction. Every single product produced at ERGO SPACE (Tirupati Work Space Solutions Private Limited) goes through stringent quality checks. In the event, if you do not get any product(s) as per images and specifications mentioned in our website, we shall refund back the money, provided the reasons are genuine and proved after investigation. Investigation and assessment shall be conducted by our Technical team which may take up to 48 to 72 hours depending upon the cause.
          </p>

          <p>
            Based on investigation / assessment, you will be requested to please return the product(s) supplied to you. You would be requested to keep the product(s) in its original packaging and do not temper / use the product(s) intended to be return back. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product(s) you purchase. However, if the product delivered to you is correct, as per our website specifications, order cancellation/Refund/Replacement is not accepted.
          </p>

          <p>
            ERGO SPACE holds the right to refuse the proposal of Return request in case the product is used or damaged by the customer. The decision regarding any request pertaining to the replacement of product or change of product for any reason will be solely at the discretion of ERGO SPACE. In case of any dispute, company's decision will be binding on all and no further dispute will be entertained.
          </p>

          <p>
            In case of disagreement from our service(s)/product(s), customers have the liberty to cancel their order(s) and request a refund from us before dispatch is done from our Factory. Our Policy for the cancellation and refund will be as follows:
          </p>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Cancellation Policy
            </h3>
            <p>
              Once an order is placed, payment is made and dispatch is initiated, cancellation of order is not possible. However, in case material is not dispatched, we shall charge 15% of the Total Order Value as Cancellation charges and balance amount shall be refunded within 7 working days.
            </p>
            <p>
              For further query, please reach out to us at <a href="mailto:contact@ergospace.in" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>contact@ergospace.in</a>
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Refund Policy
            </h3>
            <p>
              We shall try our best to create the suitable design concepts for our clients. The company, without any prior notice, reserves the rights to make necessary changes in the product(s) based on our continuous design and research for improving the quality and enhance customer comfort for the product(s).
            </p>
            <p>
              You can only seek for Refund within 24 hours of time span after receiving the Product(s) delivery. In case product(s) is/are not as per the design and specifications shown on our website or, wrong product(s) is/are delivered, then only refund/replacement can be initiated after investigation.
            </p>
            <p>
              The Refund/Replacement shall be done within 7 working days. In any case of Refund/Replacement, product(s) to be handed over to our service provider in original packaging along with Invoice.
            </p>
            <p>
              If paid by credit/ corporate card, refunds will be issued to the original card provided at the time of purchase and in case of payment gateway, payment refund will be made to the same account.
            </p>
            <p>
              For further query, please reach out to us at <a href="mailto:contact@ergospace.in" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>contact@ergospace.in</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
