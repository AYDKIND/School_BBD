import React, { useState } from 'react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    schoolName: 'BBD Public School',
    contactEmail: 'info@bbdacademy.edu.in',
    sessionYear: '2024-25',
    themeColor: '#1a237e'
  });

  const update = (key, value) => setSettings(prev => ({ ...prev, [key]: value }));

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Admin Settings</h1>
      <p>Update application preferences and school information.</p>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555' }}>School Name</label>
          <input type="text" value={settings.schoolName} onChange={(e) => update('schoolName', e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555' }}>Contact Email</label>
          <input type="email" value={settings.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555' }}>Session Year</label>
          <input type="text" value={settings.sessionYear} onChange={(e) => update('sessionYear', e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555' }}>Theme Color</label>
          <input type="color" value={settings.themeColor} onChange={(e) => update('themeColor', e.target.value)} style={{ width: '100%', height: '40px', padding: '0', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
      </div>

      <button style={{ marginTop: '15px', background: '#1a237e', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
        Save Changes
      </button>
    </div>
  );
}