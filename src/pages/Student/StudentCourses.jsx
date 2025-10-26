import React from 'react';
import { FaBook, FaChalkboardTeacher, FaClock } from 'react-icons/fa';

export default function StudentCourses() {
  // Sample courses data
  const courses = [
    { 
      id: 1, 
      name: 'Mathematics', 
      teacher: 'Mr. Sharma',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      progress: 65,
      description: 'Algebra, Calculus, and Geometry fundamentals for Class 10 students.'
    },
    { 
      id: 2, 
      name: 'Science', 
      teacher: 'Mrs. Gupta',
      schedule: 'Tue, Thu - 11:15 AM',
      progress: 78,
      description: 'Physics, Chemistry and Biology concepts with practical experiments.'
    },
    { 
      id: 3, 
      name: 'English Literature', 
      teacher: 'Ms. Patel',
      schedule: 'Mon, Wed - 01:30 PM',
      progress: 82,
      description: 'Study of classic and modern literature with focus on critical analysis.'
    },
    { 
      id: 4, 
      name: 'Computer Science', 
      teacher: 'Mr. Kumar',
      schedule: 'Fri - 02:45 PM',
      progress: 90,
      description: 'Introduction to programming concepts, algorithms and data structures.'
    }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>My Courses</h1>
      <p>View all your enrolled courses and track your progress.</p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '25px',
        margin: '30px 0'
      }}>
        {courses.map(course => (
          <div key={course.id} style={{
            background: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <div style={{ 
              height: '8px', 
              background: `linear-gradient(to right, #1a237e ${course.progress}%, #e0e0e0 ${course.progress}%)` 
            }}></div>
            <div style={{ padding: '20px' }}>
              <h2 style={{ margin: '0 0 10px 0', color: '#1a237e' }}>{course.name}</h2>
              <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '0.9rem' }}>
                {course.description}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <FaChalkboardTeacher style={{ color: '#1a237e' }} />
                <span>{course.teacher}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                <FaClock style={{ color: '#1a237e' }} />
                <span>{course.schedule}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: '500' }}>Progress: </span>
                  <span>{course.progress}%</span>
                </div>
                <button style={{
                  background: '#1a237e',
                  color: 'white',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <FaBook /> View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}