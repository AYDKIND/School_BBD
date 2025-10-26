import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';

export default function ManageStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample student data
  const students = [
    { id: 1, name: 'Rahul Yadav', class: 'Class 10-A', rollNo: 'BBD10001', contact: '9876543210', status: 'Active' },
    { id: 2, name: 'Priya Patel', class: 'Class 9-B', rollNo: 'BBD09002', contact: '9876543211', status: 'Active' },
    { id: 3, name: 'Amit Kumar', class: 'Class 11-A', rollNo: 'BBD11003', contact: '9876543212', status: 'Active' },
    { id: 4, name: 'Neha Yadav', class: 'Class 8-C', rollNo: 'BBD08004', contact: '9876543213', status: 'Inactive' },
    { id: 5, name: 'Vikram Yadav', class: 'Class 12-B', rollNo: 'BBD12005', contact: '9876543214', status: 'Active' },
  ];

  // Filter students based on search term
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: '0' }}>Manage Students</h1>
          <p>View, add, edit, or remove student records</p>
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
          <FaUserPlus /> Add New Student
        </button>
      </div>

      {/* Search and Filter */}
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
              placeholder="Search by name, roll number, or class..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Roll No</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Class</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Contact</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{student.rollNo}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{student.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{student.class}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{student.contact}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    background: student.status === 'Active' ? '#e8f5e9' : '#ffebee',
                    color: student.status === 'Active' ? '#2e7d32' : '#c62828'
                  }}>
                    {student.status}
                  </span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <button style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#1a237e', 
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}>
                      <FaEdit />
                    </button>
                    <button style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#c62828', 
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}>
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px', 
          background: '#f9f9f9', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <p>No students found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}