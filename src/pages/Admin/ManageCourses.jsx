import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaBook } from 'react-icons/fa';

export default function ManageCourses() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 'MAT-101', title: 'Mathematics Basics', department: 'Mathematics', teacher: 'Dr. Anil Kumar', status: 'Active' },
    { id: 'PHY-102', title: 'Physics Fundamentals', department: 'Physics', teacher: 'Ms. Priya Sharma', status: 'Active' },
    { id: 'CHE-103', title: 'Chemistry Essentials', department: 'Chemistry', teacher: 'Mr. Amit Verma', status: 'Inactive' },
  ];

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0 }}>Manage Courses</h1>
          <p>Create, edit, or retire courses</p>
        </div>
      </div>

      <div style={{ background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #ddd', borderRadius: '4px', padding: '8px 15px', flex: 1 }}>
            <FaSearch style={{ color: '#666' }} />
            <input 
              type="text" 
              placeholder="Search by title, ID, or department..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }}
            />
          </div>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Course ID</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Title</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Department</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Teacher</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{c.id}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{c.title}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{c.department}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{c.teacher}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', background: c.status === 'Active' ? '#e8f5e9' : '#ffebee', color: c.status === 'Active' ? '#2e7d32' : '#c62828' }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#1a237e', cursor: 'pointer', fontSize: '1rem' }}>
                      <FaEdit />
                    </button>
                    <button style={{ background: 'none', border: 'none', color: '#c62828', cursor: 'pointer', fontSize: '1rem' }}>
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}