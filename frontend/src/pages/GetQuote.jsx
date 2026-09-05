import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import boqBackground from '../assets/boq_background.jpg';

export default function GetQuote({ setShowQuotePage }) {
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    projectArea: '',
    message: ''
  });
  
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setShowQuotePage(false); // Go back after success
    }, 3000);
  };

  const features = [
    "Detailed BOQ Report",
    "Cost Estimation",
    "Material Specification",
    "Labor Cost Calculation",
    "Project Timeline"
  ];

  return (
    <div style={{ background: '#050506', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* 2 Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flexGrow: 1 }}>
          
          {/* Left Column: Image Background and Features */}
          <div style={{ position: 'relative', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Background Image */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <img src={boqBackground} alt="Construction Planning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(5,5,6,0.95) 0%, rgba(5,5,6,0.7) 100%)' }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
                BOQ & ESTIMATION
              </h2>
              <p style={{ color: '#eaeaea', fontSize: '1rem', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '90%' }}>
                Accurate estimation and transparent pricing help you plan your project with confidence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle size={22} style={{ color: 'var(--primary-gold)' }} />
                    <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ background: '#0a0a0c', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-gold)', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.05em' }}>
              REQUEST ESTIMATION
            </h3>
            
            {quoteSuccess ? (
              <div style={{ background: 'rgba(197, 168, 128, 0.1)', border: '1px solid var(--primary-gold)', padding: '3rem 2rem', textAlign: 'center', color: '#fff', borderRadius: '4px' }}>
                <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Request Submitted!</h3>
                <p>Our estimation team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name"
                  value={quoteForm.fullName}
                  onChange={(e) => setQuoteForm({...quoteForm, fullName: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address"
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                
                <input 
                  type="tel" 
                  required 
                  placeholder="Phone Number"
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Project Type</label>
                  <select 
                    required
                    value={quoteForm.projectType}
                    onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', appearance: 'none' }}
                  >
                    <option value="" disabled style={{ color: '#000' }}>Select Project Type</option>
                    <option value="Residential" style={{ color: '#000' }}>Residential Villa</option>
                    <option value="Commercial" style={{ color: '#000' }}>Commercial Building</option>
                    <option value="Interior" style={{ color: '#000' }}>Interior Design</option>
                    <option value="Renovation" style={{ color: '#000' }}>Renovation</option>
                  </select>
                </div>

                <input 
                  type="text" 
                  required 
                  placeholder="Project Location"
                  value={quoteForm.projectLocation}
                  onChange={(e) => setQuoteForm({...quoteForm, projectLocation: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />

                <input 
                  type="text" 
                  required 
                  placeholder="Project Area (sq.ft)"
                  value={quoteForm.projectArea}
                  onChange={(e) => setQuoteForm({...quoteForm, projectArea: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />

                <textarea 
                  required 
                  placeholder="Message"
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', minHeight: '100px', resize: 'vertical', outline: 'none' }}
                ></textarea>
                
                <button type="submit" style={{ width: '100%', background: 'var(--primary-gold)', color: '#000', border: 'none', padding: '1rem', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px', marginTop: '1rem', letterSpacing: '0.05em' }}>
                  SUBMIT REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
