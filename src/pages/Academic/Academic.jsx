import { useState } from 'react';
import { FaCalendarAlt, FaBook, FaUserGraduate, FaChalkboardTeacher, FaDownload } from 'react-icons/fa';
import './Academic.css';

const Academic = () => {
  const [activeTab, setActiveTab] = useState('sessions');

  const academicSessions = [
    {
      id: 1,
      year: '2023-2024',
      startDate: 'April 1, 2023',
      endDate: 'March 31, 2024',
      highlights: [
        'New STEM curriculum implementation',
        'Enhanced digital learning resources',
        'Expanded extracurricular activities'
      ]
    },
    {
      id: 2,
      year: '2022-2023',
      startDate: 'April 1, 2022',
      endDate: 'March 31, 2023',
      highlights: [
        'Introduction of coding classes',
        'Sports excellence program launched',
        'Cultural exchange program with international schools'
      ]
    }
  ];

  const departments = [
    {
      id: 1,
      name: 'Science Department',
      head: 'Mr. Rajesh Yadav',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Computer Science']
    },
    {
      id: 2,
      name: 'Mathematics Department',
      head: 'Mrs. Sunita Yadav',
      subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
    },
    {
      id: 3,
      name: 'Languages Department',
      head: 'Mr. Anand Kumar',
      subjects: ['Hindi', 'English', 'Sanskrit']
    },
    {
      id: 4,
      name: 'Social Sciences Department',
      head: 'Mr. Meera Patel',
      subjects: ['History', 'Geography', 'Civics', 'Economics']
    }
  ];

  const documents = [
    {
      id: 1,
      name: 'Academic Calendar 2023-24',
      type: 'PDF',
      size: '1.2 MB'
    },
    {
      id: 2,
      name: 'Syllabus - All Classes',
      type: 'PDF',
      size: '3.5 MB'
    },
    {
      id: 3,
      name: 'Exam Schedule - Term 1',
      type: 'PDF',
      size: '0.8 MB'
    },
    {
      id: 4,
      name: 'Holiday List 2023-24',
      type: 'PDF',
      size: '0.5 MB'
    }
  ];

  return (
    <main className="academic-page">
      {/* Hero Section */}
      <section className="academic-hero">
        <div className="container">
          <h1>Academic</h1>
          <p>Excellence in education through innovative teaching and comprehensive learning</p>
        </div>
      </section>

      {/* Academic Content */}
      <section className="academic-content section">
        <div className="container">
          <div className="academic-tabs">
            <button 
              className={activeTab === 'sessions' ? 'active' : ''} 
              onClick={() => setActiveTab('sessions')}
            >
              <FaCalendarAlt /> Academic Sessions
            </button>
            <button 
              className={activeTab === 'departments' ? 'active' : ''} 
              onClick={() => setActiveTab('departments')}
            >
              <FaChalkboardTeacher /> Departments
            </button>
            <button 
              className={activeTab === 'documents' ? 'active' : ''} 
              onClick={() => setActiveTab('documents')}
            >
              <FaBook /> Academic Documents
            </button>
          </div>

          <div className="academic-tab-content">
            {activeTab === 'sessions' && (
              <div className="sessions-content">
                <h2>Academic Sessions</h2>
                <p>BBD Academy follows an annual academic calendar. Here are the details of our current and previous academic sessions:</p>
                
                <div className="sessions-list">
                  {academicSessions.map(session => (
                    <div className="session-card" key={session.id}>
                      <div className="session-header">
                        <h3>{session.year}</h3>
                        <span className="session-dates">
                          <FaCalendarAlt /> {session.startDate} to {session.endDate}
                        </span>
                      </div>
                      <div className="session-highlights">
                        <h4>Session Highlights:</h4>
                        <ul>
                          {session.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'departments' && (
              <div className="departments-content">
                <h2>Academic Departments</h2>
                <p>Our school has specialized departments with experienced faculty members dedicated to providing quality education:</p>
                
                <div className="departments-grid">
                  {departments.map(dept => (
                    <div className="department-card" key={dept.id}>
                      <h3>{dept.name}</h3>
                      <p className="department-head"><strong>Head:</strong> {dept.head}</p>
                      <div className="department-subjects">
                        <h4>Subjects:</h4>
                        <ul>
                          {dept.subjects.map((subject, index) => (
                            <li key={index}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="documents-content">
                <h2>Academic Documents</h2>
                <p>Download important academic documents and resources:</p>
                
                <div className="documents-list">
                  {documents.map(doc => (
                    <div className="document-item" key={doc.id}>
                      <div className="document-info">
                        <h3>{doc.name}</h3>
                        <p>{doc.type} • {doc.size}</p>
                      </div>
                      <button className="download-btn">
                        <FaDownload /> Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};


export default Academic;