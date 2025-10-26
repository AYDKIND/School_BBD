import React from 'react';
import { FaCalendarAlt, FaBook, FaGraduationCap, FaChalkboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  // Sample data
  const upcomingClasses = [
    { id: 1, subject: 'Mathematics', time: '10:00 AM - 11:00 AM', teacher: 'Mr. Sharma' },
    { id: 2, subject: 'Science', time: '11:15 AM - 12:15 PM', teacher: 'Mrs. Gupta' },
    { id: 3, subject: 'English', time: '01:30 PM - 02:30 PM', teacher: 'Ms. Patel' }
  ];

  const assignments = [
    { id: 1, subject: 'Mathematics', title: 'Algebra Assignment', dueDate: '15 Oct 2025', status: 'Pending' },
    { id: 2, subject: 'Science', title: 'Physics Lab Report', dueDate: '18 Oct 2025', status: 'Submitted' }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Student Dashboard</h1>
      <p>Welcome back, Student! Here's your academic overview.</p>

      {/* Quick Links */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px',
        margin: '30px 0'
      }}>
        <Link to="/student/courses" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#4285F4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              <FaBook />
            </div>
            <h3 style={{ margin: '0', color: '#333' }}>My Courses</h3>
          </div>
        </Link>

        <Link to="/student/grades" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#EA4335',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              <FaGraduationCap />
            </div>
            <h3 style={{ margin: '0', color: '#333' }}>Grades</h3>
          </div>
        </Link>

        <Link to="/student/attendance" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#FBBC05',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              <FaCalendarAlt />
            </div>
            <h3 style={{ margin: '0', color: '#333' }}>Attendance</h3>
          </div>
        </Link>

        <Link to="/student/online-classes" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: '#34A853',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              <FaChalkboard />
            </div>
            <h3 style={{ margin: '0', color: '#333' }}>Online Classes</h3>
          </div>
        </Link>
      </div>

      {/* Today's Classes */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>Today's Classes</h2>
        <div>
          {upcomingClasses.map(cls => (
            <div key={cls.id} style={{ 
              padding: '15px', 
              borderRadius: '6px',
              border: '1px solid #f0f0f0',
              marginBottom: '10px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: '0', fontSize: '1.1rem', color: '#1a237e' }}>{cls.subject}</h3>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  background: '#e8f5e9',
                  color: '#2e7d32'
                }}>
                  {cls.time}
                </span>
              </div>
              <div style={{ 
                marginTop: '10px',
                color: '#666',
                fontSize: '0.9rem'
              }}>
                <span>Teacher: {cls.teacher}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Assignments */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>Assignments</h2>
        <div>
          {assignments.map(assignment => (
            <div key={assignment.id} style={{ 
              padding: '15px', 
              borderRadius: '6px',
              border: '1px solid #f0f0f0',
              marginBottom: '10px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: '0', fontSize: '1.1rem', color: '#1a237e' }}>{assignment.title}</h3>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  background: assignment.status === 'Pending' ? '#ffebee' : '#e8f5e9',
                  color: assignment.status === 'Pending' ? '#c62828' : '#2e7d32'
                }}>
                  {assignment.status}
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginTop: '10px',
                color: '#666',
                fontSize: '0.9rem'
              }}>
                <span>{assignment.subject}</span>
                <span>Due: {assignment.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/student/assignments" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#1a237e',
            border: 'none',
            color: 'white',
            fontWeight: '500',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            View All Assignments
          </button>
        </Link>
      </div>
    </div>
  );
}