import React from 'react';
import { FaUserCog } from 'react-icons/fa';

export default function FacultyProfile() {
  const profile = {
    name: 'Dr. Anil Kumar',
    department: 'Mathematics',
    email: 'anil.kumar@bbdacademy.edu.in',
    phone: '+91 98765 43210',
    employeeId: 'FAC-1024',
    qualifications: 'Ph.D. in Mathematics',
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Profile</h1>
      <p>Your faculty profile and contact information.</p>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaUserCog style={{ color: '#1a237e', fontSize: '1.5rem' }} />
          <h2 style={{ margin: 0 }}>{profile.name}</h2>
        </div>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Employee ID:</strong> {profile.employeeId}</p>
        <p><strong>Qualifications:</strong> {profile.qualifications}</p>
      </div>
    </div>
  );
}