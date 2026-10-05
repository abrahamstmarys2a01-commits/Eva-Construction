import React, { useState, useRef } from 'react';
import { Briefcase, MapPin, Clock, Award, CheckCircle2, Upload, ArrowRight, ArrowLeft, Shield, Sparkles, FileText, Paperclip } from 'lucide-react';

export default function Careers({ setShowCareersPage, scrollToSection }) {
  const [selectedRole, setSelectedRole] = useState('Senior Architect / Junior Architect');
  const [resumeFile, setResumeFile] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  
  const formSectionRef = useRef(null);

  const roles = [
    {
      id: 'architect',
      title: 'Senior Architect / Junior Architect',
      department: 'Architecture & Design',
      experience: '0 to 5 Years',
      location: 'Office / Hybrid',
      type: 'Full Time',
      description: 'Lead conceptual architectural planning, develop presentation & working drawings, and coordinate with structural, MEP, and site teams for residential & commercial landmarks.'
    },
    {
      id: 'site-engineer',
      title: 'Site Engineer',
      department: 'Site & Execution',
      experience: '2 to 6 Years',
      location: 'Project Site',
      type: 'Full Time',
      description: 'Supervise on-site construction works, ensure structural accuracy, coordinate subcontractors, manage material logistics, and uphold rigorous quality and safety standards.'
    },
    {
      id: 'accountant',
      title: 'Accountant',
      department: 'Finance & Accounts',
      experience: '2 to 5 Years',
      location: 'Office Location',
      type: 'Full Time',
      description: 'Manage daily financial transactions, ledger accounts, GST/TDS compliance, petty cash, vendor invoicing, and financial reporting with accounting software.'
    }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    highestQualification: '',
    yearsOfExperience: '',
    currentCompany: '',
    expectedSalary: '',
    noticePeriod: '',
    linkedIn: '',
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedResumeUrl, setUploadedResumeUrl] = useState('');

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const uploadResumeToCloud = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data && data.status === 'success' && data.data && data.data.url) {
        // Convert to direct download/view link
        const directUrl = data.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        return directUrl;
      }
    } catch (err) {
      console.warn("Cloud upload fallback:", err);
    }
    return null;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the terms & privacy policy to submit your application.");
      return;
    }

    setIsSubmitting(true);

    let pdfLink = null;
    if (resumeFile) {
      pdfLink = await uploadResumeToCloud(resumeFile);
      if (pdfLink) {
        setUploadedResumeUrl(pdfLink);
      }
    }

    const fileSizeStr = resumeFile ? `${(resumeFile.size / (1024 * 1024) > 1 ? (resumeFile.size / (1024 * 1024)).toFixed(2) + ' MB' : (resumeFile.size / 1024).toFixed(1) + ' KB')}` : '';

    const message = `*🌟 New Job Application - EVA ATELIER*

📌 *Applied Role:* ${selectedRole}
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📍 *Current Location:* ${formData.currentLocation}
🎓 *Highest Qualification:* ${formData.highestQualification}
⏳ *Years of Experience:* ${formData.yearsOfExperience}
🏢 *Current Company:* ${formData.currentCompany || 'N/A'}
💰 *Expected Salary:* ${formData.expectedSalary || 'N/A'}
⏱️ *Notice Period:* ${formData.noticePeriod}
🔗 *LinkedIn Profile:* ${formData.linkedIn || 'N/A'}

📄 *Resume PDF Document:* ${resumeFile ? `${resumeFile.name} (${fileSizeStr})` : 'Not uploaded'}
${pdfLink ? `📥 *View / Open Resume PDF Link:*\n👉 ${pdfLink}\n` : ''}
📝 *Cover Letter / Message:*
${formData.coverLetter || 'No cover message provided.'}
━━━━━━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917397101215?text=${encodedMessage}`;
    
    setIsSubmitting(false);
    setApplicationSuccess(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 300);
  };

  return (
    <div style={{ background: '#050506', minHeight: '100vh', color: '#fff' }}>
      
      {/* Careers Hero Banner */}
      <section className="careers-hero-section">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <button 
              onClick={() => {
                if (setShowCareersPage) setShowCareersPage(false);
                if (scrollToSection) scrollToSection('home');
              }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                background: 'transparent', 
                color: 'var(--primary-gold)', 
                border: '1px solid var(--border-gold)', 
                padding: '0.5rem 1.25rem', 
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              EVA ATELIER CAREERS
            </span>
          </div>

          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)', borderRadius: '20px', marginBottom: '1.5rem' }}>
              <Sparkles size={16} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ color: 'var(--primary-gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>WE ARE HIRING</span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', color: '#fff', lineHeight: '1.15', marginBottom: '1.5rem' }}>
              Build Your Future With <span style={{ color: 'var(--primary-gold)' }}>EVA ATELIER</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '700px' }}>
              We are seeking visionary professionals, dynamic engineers, and execution specialists to create architectural landmarks that stand the test of time. Explore our open positions and apply today.
            </p>
          </div>

        </div>
      </section>

      {/* Project & Management Roles Section */}
      <section className="careers-roles-section">
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="section-header-left" style={{ marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              OPEN POSITIONS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 500, color: '#fff', textTransform: 'uppercase' }}>
              CURRENT JOB OPENINGS
            </h2>
          </div>

          <div className="careers-roles-grid">
            {roles.map((role) => (
              <div 
                key={role.id}
                style={{
                  background: '#090b0e',
                  border: selectedRole === role.title ? '1px solid var(--primary-gold)' : '1px solid var(--border-gold)',
                  boxShadow: selectedRole === role.title ? '0 0 20px rgba(212, 175, 55, 0.15)' : 'none',
                  borderRadius: '6px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                    <span style={{ 
                      background: 'rgba(212, 175, 55, 0.12)', 
                      color: 'var(--primary-gold)', 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {role.department}
                    </span>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                      {role.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                    {role.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {role.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <Award size={16} style={{ color: 'var(--primary-gold)' }} />
                      <span>Experience: <strong style={{ color: '#fff' }}>{role.experience}</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <MapPin size={16} style={{ color: 'var(--primary-gold)' }} />
                      <span>Location: <strong style={{ color: '#fff' }}>{role.location}</strong></span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleApplyClick(role.title)}
                  style={{
                    width: '100%',
                    background: selectedRole === role.title ? 'var(--primary-gold)' : 'transparent',
                    color: selectedRole === role.title ? '#000' : 'var(--primary-gold)',
                    border: '1px solid var(--primary-gold)',
                    padding: '0.85rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Application Form Section */}
          <div ref={formSectionRef} className="careers-form-container">
            
            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '1.5rem' }}>
              <span style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                CANDIDATE APPLICATION
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', color: '#fff', marginTop: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                Application Form
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Applying for: <strong style={{ color: 'var(--primary-gold)' }}>{selectedRole}</strong>
              </p>
            </div>

            {applicationSuccess ? (
              <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--primary-gold)', padding: '2.5rem 1.5rem', textAlign: 'center', borderRadius: '6px' }}>
                <CheckCircle2 size={52} style={{ color: 'var(--primary-gold)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ color: 'var(--primary-gold)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>Application Ready for WhatsApp!</h3>
                <p style={{ color: '#eaeaea', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                  Thank you for applying for the <strong>{selectedRole}</strong> position at EVA ATELIER.
                </p>

                {/* PDF Sending Guidance Card */}
                <div style={{ background: '#050506', border: '1px solid var(--border-gold)', borderRadius: '6px', padding: '1.5rem', maxWidth: '550px', margin: '0 auto 2rem', textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--primary-gold)', fontSize: '0.95rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Paperclip size={18} /> How to send your PDF on WhatsApp:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ background: 'var(--primary-gold)', color: '#000', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>1</span>
                      <span>WhatsApp will open with your complete application details already typed in the message box. Click <strong>Send</strong>.</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ background: 'var(--primary-gold)', color: '#000', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>2</span>
                      <span>Click the <strong>📎 (Paperclip / Attach)</strong> icon in WhatsApp &rarr; Select <strong>Document</strong> &rarr; Choose your PDF resume {resumeFile ? <strong>({resumeFile.name})</strong> : ''} to send.</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => {
                      const fileSizeStr = resumeFile ? `${(resumeFile.size / (1024 * 1024) > 1 ? (resumeFile.size / (1024 * 1024)).toFixed(2) + ' MB' : (resumeFile.size / 1024).toFixed(1) + ' KB')}` : '';
                      const message = `*🌟 New Job Application - EVA ATELIER*\n\n📌 *Applied Role:* ${selectedRole}\n━━━━━━━━━━━━━━━━━━━━\n👤 *Full Name:* ${formData.fullName}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone}\n📍 *Current Location:* ${formData.currentLocation}\n🎓 *Highest Qualification:* ${formData.highestQualification}\n⏳ *Years of Experience:* ${formData.yearsOfExperience}\n🏢 *Current Company:* ${formData.currentCompany || 'N/A'}\n💰 *Expected Salary:* ${formData.expectedSalary || 'N/A'}\n⏱️ *Notice Period:* ${formData.noticePeriod}\n🔗 *LinkedIn Profile:* ${formData.linkedIn || 'N/A'}\n\n📄 *Attached Resume:* ${resumeFile ? `${resumeFile.name} (${fileSizeStr})` : 'Will attach PDF directly in this chat'}\n📎 *Note:* Please find my attached Resume PDF document sent along with this message.\n\n📝 *Cover Letter / Candidate Message:*\n${formData.coverLetter || 'No cover message provided.'}\n━━━━━━━━━━━━━━━━━━━━`;
                      window.open(`https://wa.me/917397101215?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    style={{
                      background: 'var(--primary-gold)',
                      color: '#000',
                      border: 'none',
                      padding: '0.85rem 2rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Open WhatsApp Chat Again
                  </button>

                  <button 
                    onClick={() => setApplicationSuccess(false)}
                    style={{
                      background: 'transparent',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.2)',
                      padding: '0.85rem 1.5rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '4px'
                    }}
                  >
                    Apply for Another Position
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Role Selector Row */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary-gold)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Selected Role *
                  </label>
                  <select 
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#050506',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      padding: '0.9rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    {roles.map(r => (
                      <option key={r.id} value={r.title} style={{ background: '#050506', color: '#fff' }}>
                        {r.title} ({r.department})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2-Column Grid Fields */}
                <div className="careers-form-grid">
                  
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Anand Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. anand.k@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Current Location */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Current Location *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Tiruchirappalli, Tamil Nadu"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({...formData, currentLocation: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Highest Qualification */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Highest Qualification *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. B.E Civil Engineering / B.Arch / MBA"
                      value={formData.highestQualification}
                      onChange={(e) => setFormData({...formData, highestQualification: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Years of Experience *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. 5 Years"
                      value={formData.yearsOfExperience}
                      onChange={(e) => setFormData({...formData, yearsOfExperience: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Current Company (Optional) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Current Company (Optional)
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. L&T Construction"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Expected Salary (Optional) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Expected Salary (Optional)
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 8 - 10 LPA"
                      value={formData.expectedSalary}
                      onChange={(e) => setFormData({...formData, expectedSalary: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Notice Period */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Notice Period *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Immediate / 30 Days"
                      value={formData.noticePeriod}
                      onChange={(e) => setFormData({...formData, noticePeriod: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* LinkedIn Profile (Optional) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      LinkedIn Profile (Optional)
                    </label>
                    <input 
                      type="url" 
                      placeholder="e.g. https://linkedin.com/in/username"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({...formData, linkedIn: e.target.value})}
                      style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                </div>

                {/* Upload Resume — PDF / DOC / DOCX */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>
                      Upload Resume (PDF / DOC / DOCX)
                    </label>
                    {resumeFile && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary-gold)', fontWeight: 600 }}>
                        ✓ File Selected ({resumeFile.size ? (resumeFile.size / 1024).toFixed(1) + ' KB' : ''})
                      </span>
                    )}
                  </div>

                  <div style={{
                    border: resumeFile ? '1px solid var(--primary-gold)' : '1px dashed var(--border-gold)',
                    background: resumeFile ? 'rgba(212, 175, 55, 0.06)' : 'rgba(212, 175, 55, 0.02)',
                    padding: '1.75rem 1.5rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer'
                      }}
                    />
                    
                    {resumeFile ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ background: 'var(--primary-gold)', color: '#000', borderRadius: '8px', padding: '0.6rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.85rem' }}>
                          <FileText size={20} />
                          <span>PDF</span>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, wordBreak: 'break-all' }}>
                            {resumeFile.name}
                          </p>
                          <span style={{ color: 'var(--primary-gold)', fontSize: '0.75rem' }}>
                            Click to replace or choose another PDF
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload size={30} style={{ color: 'var(--primary-gold)', margin: '0 auto 0.5rem' }} />
                        <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                          Click or Drag & Drop Resume PDF
                        </p>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                          Supported formats: PDF, DOC, DOCX (Max 10MB) &bull; PDF is recommended for WhatsApp
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Cover Letter / Short Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Cover Letter / Short Message (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly tell us why you are a great fit for this role..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.9rem', resize: 'vertical', outline: 'none' }}
                  ></textarea>
                </div>

                {/* Terms & Privacy Policy Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="termsAgreement"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    style={{ accentColor: 'var(--primary-gold)', width: '18px', height: '18px', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }}
                  />
                  <label htmlFor="termsAgreement" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: '1.4' }}>
                    I agree to the terms & privacy policy and authorize EVA ATELIER to contact me regarding my job application.
                  </label>
                </div>

                {/* Submit Application Button */}
                <div style={{ marginTop: '1rem' }}>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? '#a68525' : 'var(--primary-gold)',
                      color: '#000',
                      border: 'none',
                      padding: '1rem 2.5rem',
                      width: '100%',
                      maxWidth: '380px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.8 : 1,
                      boxSizing: 'border-box'
                    }}
                  >
                    {isSubmitting ? (
                      <>Processing PDF & Opening WhatsApp...</>
                    ) : (
                      <>Submit Application &rarr;</>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
