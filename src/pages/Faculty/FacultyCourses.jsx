import React from 'react';
import { FaChalkboard, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function FacultyCourses() {
  const courses = [
    { id: 1, title: 'Mathematics - Algebra Basics', class: '10-A', time: '09:00 - 09:45 AM', students: 32 },
    { id: 2, title: 'Physics - Motion & Forces', class: '10-A', time: '10:00 - 10:45 AM', students: 30 },
    { id: 3, title: 'Mathematics - Geometry', class: '10-B', time: '11:00 - 11:45 AM', students: 28 },
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>My Courses</h1>
      <p>Courses you are currently teaching.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {courses.map(course => (
          <div key={course.id} style={{ background: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <FaChalkboard style={{ color: '#1a237e' }} />
              <h3 style={{ margin: 0 }}>{course.title}</h3>
            </div>
            <p style={{ margin: '6px 0', color: '#555' }}><strong>Class:</strong> {course.class}</p>
            <p style={{ margin: '6px 0', color: '#555', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaClock /> {course.time}
            </p>
            <p style={{ margin: '6px 0', color: '#555', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaUserGraduate /> Students: {course.students}
            </p>
            <button style={{ marginTop: '10px', background: '#1a237e', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
              View Class Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}