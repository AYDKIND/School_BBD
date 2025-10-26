import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default function FacultyGrades() {
  const gradebook = [
    { id: 1, name: 'Rahul Yadav', class: '10-A', subject: 'Maths', assessment: 'Unit Test 1', marks: 42, total: 50 },
    { id: 2, name: 'Priya Patel', class: '10-A', subject: 'Maths', assessment: 'Unit Test 1', marks: 38, total: 50 },
    { id: 3, name: 'Amit Kumar', class: '10-A', subject: 'Maths', assessment: 'Unit Test 1', marks: 45, total: 50 },
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Grades</h1>
      <p>View and manage grades for your students.</p>

      <div style={{ overflowX: 'auto', marginTop: '15px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Class</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Subject</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Assessment</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Marks</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {gradebook.map(row => (
              <tr key={row.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.class}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.subject}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaGraduationCap /> {row.assessment}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.marks}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}