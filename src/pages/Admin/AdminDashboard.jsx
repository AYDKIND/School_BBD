import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook, FaRupeeSign, FaBell } from 'react-icons/fa';

export default function AdminDashboard() {
  // Sample data for dashboard
  const stats = [
    { title: 'Total Students', count: 1250, icon: <FaUsers />, color: '#4285F4' },
    { title: 'Total Faculty', count: 85, icon: <FaChalkboardTeacher />, color: '#EA4335' },
    { title: 'Active Courses', count: 42, icon: <FaBook />, color: '#FBBC05' },
    { title: 'Revenue (Monthly)', count: '₹ 28.5L', icon: <FaRupeeSign />, color: '#34A853' }
  ];

  const recentNotifications = [
    { id: 1, message: 'New admission request from Rahul Yadav', time: '10 minutes ago' },
    { id: 2, message: 'Fee payment received from Priya Patel', time: '1 hour ago' },
    { id: 3, message: 'New faculty application submitted', time: '3 hours ago' },
    { id: 4, message: 'System maintenance scheduled for tonight', time: '5 hours ago' }
  ];

  const pendingTasks = [
    { id: 1, task: 'Review 5 new admission applications', priority: 'High' },
    { id: 2, task: 'Approve faculty leave requests', priority: 'Medium' },
    { id: 3, task: 'Update fee structure for next semester', priority: 'High' },
    { id: 4, task: 'Schedule parent-teacher meeting', priority: 'Medium' }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome back, Admin! Here's your school overview.</p>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px',
        margin: '30px 0'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: stat.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              {stat.icon}
            </div>
            <div>
              <h3 style={{ margin: '0', fontSize: '1.8rem', fontWeight: '600' }}>{stat.count}</h3>
              <p style={{ margin: '0', color: '#666' }}>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        margin: '30px 0'
      }}>
        {/* Recent Notifications */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <FaBell style={{ color: '#1a237e' }} />
            <h2 style={{ margin: '0', fontSize: '1.2rem' }}>Recent Notifications</h2>
          </div>
          <div>
            {recentNotifications.map(notification => (
              <div key={notification.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
              }}>
                <p style={{ margin: '0', fontWeight: '500' }}>{notification.message}</p>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>{notification.time}</span>
              </div>
            ))}
          </div>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#1a237e',
            fontWeight: '500',
            padding: '10px 0',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            View All Notifications
          </button>
        </div>

        {/* Pending Tasks */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>Pending Tasks</h2>
          <div>
            {pendingTasks.map(task => (
              <div key={task.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <p style={{ margin: '0' }}>{task.task}</p>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  background: task.priority === 'High' ? '#ffebee' : '#e8f5e9',
                  color: task.priority === 'High' ? '#c62828' : '#2e7d32'
                }}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
          <button style={{
            background: '#1a237e',
            border: 'none',
            color: 'white',
            fontWeight: '500',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '15px'
          }}>
            Complete Tasks
          </button>
        </div>
      </div>
    </div>
  );
}