import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';

export default function ManageFaculty() {
  const [searchTerm, setSearchTerm] = useState('');

  const faculty = [
    { id: 1, name: 'Dr. Anil Kumar', department: 'Mathematics', employeeId: 'FAC-1024', contact: '9876543210', status: 'Active' },
    { id: 2, name: 'Ms. Priya Sharma', department: 'Physics', employeeId: 'FAC-1032', contact: '9876543211', status: 'Active' },
    { id: 3, name: 'Mr. Amit Verma', department: 'Chemistry', employeeId: 'FAC-1045', contact: '9876543212', status: 'Inactive' },
  ];

  const filtered = faculty.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: '0' }}>Manage Faculty</h1>
          <p>Add, edit, or remove faculty records</p>
        </div>
        <button style={{
          background: '#1a237e',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <FaUserPlus /> Add New Faculty
        </button>
      </div>

      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '8px 15px',
            flex: '1'
          }}>
            <FaSearch style={{ color: '#666' }} />
            <input
              type="text"
              placeholder="Search by name, department, or employee ID..."
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
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Employee ID</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Department</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Contact</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(f => (
              <tr key={f.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{f.employeeId}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{f.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{f.department}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{f.contact}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    background: f.status === 'Active' ? '#e8f5e9' : '#ffebee',
                    color: f.status === 'Active' ? '#2e7d32' : '#c62828'
                  }}>
                    {f.status}
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