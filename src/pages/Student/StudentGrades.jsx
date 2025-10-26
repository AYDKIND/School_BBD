import React from 'react';

export default function StudentGrades() {
  // Sample grades data
  const grades = [
    { subject: 'Mathematics', midterm: 85, final: 92, grade: 'A', remarks: 'Excellent' },
    { subject: 'Science', midterm: 78, final: 88, grade: 'B+', remarks: 'Very Good' },
    { subject: 'English', midterm: 90, final: 95, grade: 'A+', remarks: 'Outstanding' },
    { subject: 'History', midterm: 75, final: 82, grade: 'B', remarks: 'Good' },
    { subject: 'Computer Science', midterm: 95, final: 98, grade: 'A+', remarks: 'Outstanding' }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>My Grades</h1>
      <p>View your academic performance across all subjects.</p>

      <div style={{ overflowX: 'auto', marginTop: '30px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Subject</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Midterm</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Final</th>
              <th style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>Grade</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', fontWeight: '500' }}>{grade.subject}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', textAlign: 'center' }}>{grade.midterm}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2', textAlign: 'center' }}>{grade.final}</td>
                <td style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #f2f2f2', 
                  textAlign: 'center',
                  fontWeight: '600',
                  color: grade.grade.includes('A') ? '#2e7d32' : grade.grade.includes('B') ? '#1565c0' : '#c62828'
                }}>
                  {grade.grade}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f2f2f2' }}>{grade.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ 
        background: '#f5f9ff', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '30px',
        border: '1px solid #e3f2fd'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#1a237e' }}>Grade Scale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
          <div>A+ (95-100): Outstanding</div>
          <div>A (90-94): Excellent</div>
          <div>B+ (85-89): Very Good</div>
          <div>B (80-84): Good</div>
          <div>C+ (75-79): Satisfactory</div>
          <div>C (70-74): Average</div>
          <div>D (60-69): Pass</div>
          <div>F (Below 60): Fail</div>
        </div>
      </div>
    </div>
  );
}