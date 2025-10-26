import React, { useState } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function FacultyAttendance() {
  const [date, setDate] = useState('2024-10-24');
  const [filter, setFilter] = useState('all');

  const students = [
    { id: 1, name: 'Rahul Yadav', class: '10-A', status: 'Present' },
    { id: 2, name: 'Priya Patel', class: '10-A', status: 'Absent' },
    { id: 3, name: 'Amit Kumar', class: '10-A', status: 'Present' },
    { id: 4, name: 'Neha Sharma', class: '10-A', status: 'Present' },
    { id: 5, name: 'Vikram Yadav', class: '10-A', status: 'Absent' },
  ];

  const filtered = students.filter(s =>
    filter === 'all' ? true : (filter === 'present' ? s.status === 'Present' : s.status === 'Absent')
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Faculty Attendance</h1>
      <p>Mark and review attendance for your classes.</p>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', margin: '15px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaCalendarAlt style={{ color: '#1a237e' }} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Class</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{s.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{s.class}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>
                  {s.status === 'Present' ? (
                    <span style={{ color: '#2e7d32', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaCheckCircle /> Present
                    </span>
                  ) : (
                    <span style={{ color: '#c62828', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaTimesCircle /> Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}