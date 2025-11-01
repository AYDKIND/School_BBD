import React from 'react';
import { FaClipboardList, FaUsers, FaChalkboardTeacher, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function FacultyDashboard() {
  const stats = [
    { title: 'Classes Today', value: 3, icon: <FaChalkboardTeacher />, color: '#1a237e' },
    { title: 'Active Courses', value: 2, icon: <FaClipboardList />, color: '#0d1757' },
    { title: 'Total Students', value: 62, icon: <FaUsers />, color: '#3f51b5' },
  ];

  const upcoming = [
    { id: 1, time: '09:00 AM', course: 'Mathematics - Algebra', room: 'Room 201' },
    { id: 2, time: '10:00 AM', course: 'Physics - Motion', room: 'Lab 2' },
    { id: 3, time: '11:00 AM', course: 'Mathematics - Geometry', room: 'Room 203' },
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Faculty Dashboard</h1>
      <p>Overview of your teaching schedule and activity.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: s.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
              {s.icon}
            </div>
            <div>
              <h3 style={{ margin: 0 }}>{s.value}</h3>
              <p style={{ margin: 0, color: '#666' }}>{s.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginTop: '30px' }}>
        <h2 style={{ marginTop: 0, fontSize: '1.2rem' }}>Upcoming Classes</h2>
        <div>
          {upcoming.map(item => (
            <div key={item.id} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#1a237e', fontWeight: 600 }}>{item.time}</span>
              <span>{item.course}</span>
              <span style={{ color: '#888' }}>{item.room}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <Link to="/faculty/online-classes" style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '8px', 
              padding: '20px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.borderColor = '#1a237e';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.borderColor = 'transparent';
            }}>
              <div style={{ 
                width: 50, 
                height: 50, 
                borderRadius: '50%', 
                background: '#4caf50', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.3rem' 
              }}>
                <FaVideo />
              </div>
              <div>
                <h3 style={{ margin: 0, color: '#1a237e' }}>Online Classes</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Create & manage virtual classes</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}