import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function BOQ({ boqForm, setBoqForm, handleCalculateBOQ, boqEstimationImg }) {
  return (
    <section className="boq-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; BOQ & Estimation</span>
        <div className="section-header-left">
          <h2>BOQ & Estimation</h2>
          <span className="subtitle" style={{textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '800px', display: 'block'}}>
            Accurate estimation and transparent pricing help you plan your project with confidence.
          </span>
        </div>

        <div className="boq-grid">
          <div className="boq-info">
            <ul className="boq-features-list" style={{marginBottom: '2rem'}}>
              <li className="boq-feature-item">
                <CheckCircle size={18} />
                <span>Detailed BOQ Report</span>
              </li>
              <li className="boq-feature-item">
                <CheckCircle size={18} />
                <span>Cost Estimation</span>
              </li>
              <li className="boq-feature-item">
                <CheckCircle size={18} />
                <span>Material Specification</span>
              </li>
              <li className="boq-feature-item">
                <CheckCircle size={18} />
                <span>Labor Cost Calculation</span>
              </li>
              <li className="boq-feature-item">
                <CheckCircle size={18} />
                <span>Project Timeline</span>
              </li>
            </ul>

            <div className="boq-image-container" style={{marginTop: '0'}}>
              <img src={boqEstimationImg} alt="Blueprints and Hard Hat" />
            </div>
          </div>

          <div>
            <form className="luxury-form" onSubmit={handleCalculateBOQ} style={{padding: '2.5rem'}}>
              <h3 style={{fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '1.15rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>
                Request Estimation
              </h3>
              
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  required 
                  placeholder="Full Name"
                  value={boqForm.fullName}
                  onChange={(e) => setBoqForm({...boqForm, fullName: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  required 
                  placeholder="Email Address"
                  value={boqForm.email}
                  onChange={(e) => setBoqForm({...boqForm, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  required 
                  placeholder="Phone Number"
                  value={boqForm.phone}
                  onChange={(e) => setBoqForm({...boqForm, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Project Type</label>
                <select 
                  className="form-control"
                  value={boqForm.projectType}
                  onChange={(e) => setBoqForm({...boqForm, projectType: e.target.value})}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Villa">Villa Construction</option>
                  <option value="Residential">Residential Building</option>
                  <option value="Commercial">Commercial Workspace</option>
                  <option value="Interior">Luxury Interior Curation</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Location</label>
                <input 
                  type="text" 
                  className="form-control" 
                  required 
                  placeholder="Project Location"
                  value={boqForm.projectLocation}
                  onChange={(e) => setBoqForm({...boqForm, projectLocation: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Project Area (sq.ft)</label>
                <input 
                  type="number" 
                  className="form-control" 
                  required 
                  placeholder="Project Area (sq.ft)"
                  value={boqForm.projectArea}
                  onChange={(e) => setBoqForm({...boqForm, projectArea: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  className="form-control" 
                  placeholder="Message"
                  value={boqForm.message}
                  onChange={(e) => setBoqForm({...boqForm, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{width: '100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
