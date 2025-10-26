import React, { useState } from 'react';

const initialRecords = [
  { date: '2025-10-01', subject: 'Mathematics', status: 'Present' },
  { date: '2025-10-02', subject: 'Science', status: 'Absent' },
  { date: '2025-10-03', subject: 'English', status: 'Present' },
  { date: '2025-10-04', subject: 'History', status: 'Present' },
  { date: '2025-10-05', subject: 'Computer Science', status: 'Present' },
];

export default function StudentAttendance() {
  const [filter, setFilter] = useState('All');

  const filtered = initialRecords.filter(r =>
    filter === 'All' ? true : r.status === filter
  );

  return (
    <div className="container" style={{ padding: '100px 0' }}>
      <h1>Attendance Status</h1>
      <p>View your daily attendance status across subjects.</p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', margin: '16px 0' }}>
        <label htmlFor="filter"><strong>Filter:</strong></label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Subject</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr key={idx}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.date}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{row.subject}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', color: row.status === 'Absent' ? '#c62828' : '#2e7d32' }}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 16, fontSize: '0.95rem', color: '#555' }}>
        Tip: This is sample data. Integrate with your backend attendance API to show real records.
      </div>
    </div>
  );
}