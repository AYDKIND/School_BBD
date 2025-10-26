import React from 'react';
import { FaUserCheck } from 'react-icons/fa';

export default function StudentProfile() {
  const profile = {
    name: 'Rahul Yadav',
    class: '10-A',
    rollNo: 'BBD10001',
    email: 'rahul.yadav@bbdacademy.edu.in',
    phone: '+91 98765 43210',
    guardian: 'Mr. Rakesh Yadav',
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Profile</h1>
      <p>Your student information and contact details.</p>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaUserCheck style={{ color: '#1a237e', fontSize: '1.5rem' }} />
          <h2 style={{ margin: 0 }}>{profile.name}</h2>
        </div>
        <p><strong>Class:</strong> {profile.class}</p>
        <p><strong>Roll No:</strong> {profile.rollNo}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Guardian:</strong> {profile.guardian}</p>
      </div>
    </div>
  );
}