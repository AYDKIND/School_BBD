import React, { useState } from 'react';
import { FaFileAlt, FaUpload, FaDownload, FaCalendarAlt, FaClock, FaCheckCircle, FaExclamationTriangle, FaEye, FaFilter } from 'react-icons/fa';

export default function StudentAssignments() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedFile, setSelectedFile] = useState(null);

  const assignments = [
    { 
      id: 1, 
      title: 'Maths Assignment - Algebra', 
      dueDate: '2024-03-28', 
      subject: 'Mathematics', 
      status: 'pending',
      description: 'Solve algebraic equations and submit detailed solutions with step-by-step explanations.',
      maxMarks: 50,
      submittedDate: null,
      grade: null,
      feedback: null,
      attachments: ['algebra_problems.pdf']
    },
    { 
      id: 2, 
      title: 'Physics Lab Report - Motion', 
      dueDate: '2024-03-26', 
      subject: 'Physics', 
      status: 'submitted',
      description: 'Analyze the motion experiment data and prepare a comprehensive lab report.',
      maxMarks: 40,
      submittedDate: '2024-03-25',
      grade: 35,
      feedback: 'Good analysis, but could improve on conclusion section.',
      attachments: ['motion_experiment.pdf']
    },
    { 
      id: 3, 
      title: 'English Essay - My Hero', 
      dueDate: '2024-03-30', 
      subject: 'English', 
      status: 'pending',
      description: 'Write a 500-word essay about your personal hero and their impact on your life.',
      maxMarks: 30,
      submittedDate: null,
      grade: null,
      feedback: null,
      attachments: ['essay_guidelines.pdf']
    },
    { 
      id: 4, 
      title: 'Chemistry Lab - Acid Base Titration', 
      dueDate: '2024-03-25', 
      subject: 'Chemistry', 
      status: 'overdue',
      description: 'Complete the acid-base titration experiment and submit observations.',
      maxMarks: 45,
      submittedDate: null,
      grade: null,
      feedback: null,
      attachments: ['titration_procedure.pdf']
    },
    { 
      id: 5, 
      title: 'History Project - Ancient Civilizations', 
      dueDate: '2024-04-05', 
      subject: 'History', 
      status: 'graded',
      description: 'Research and present on any ancient civilization of your choice.',
      maxMarks: 60,
      submittedDate: '2024-03-20',
      grade: 52,
      feedback: 'Excellent research and presentation. Well structured content.',
      attachments: ['project_guidelines.pdf']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return '#ffc107';
      case 'graded': return '#28a745';
      case 'pending': return '#007bff';
      case 'overdue': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'submitted': return <FaClock />;
      case 'graded': return <FaCheckCircle />;
      case 'pending': return <FaCalendarAlt />;
      case 'overdue': return <FaExclamationTriangle />;
      default: return <FaClock />;
    }
  };

  const filteredAssignments = assignments.filter(assignment => 
    filterStatus === 'all' || assignment.status === filterStatus
  );

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleSubmit = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionModal(true);
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitAssignment = () => {
    if (selectedFile) {
      alert(`Assignment "${selectedAssignment.title}" submitted successfully!`);
      setShowSubmissionModal(false);
      setSelectedFile(null);
      setSelectedAssignment(null);
    } else {
      alert('Please select a file to upload.');
    }
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>My Assignments</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Manage your assignments, submissions, and grades</p>
        
        {/* Filter Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <FaFilter style={{ color: '#666' }} />
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              background: 'white'
            }}
          >
            <option value="all">All Assignments</option>
            <option value="pending">Pending</option>
            <option value="submitted">Submitted</option>
            <option value="graded">Graded</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      {/* Assignment Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        {filteredAssignments.map(assignment => {
          const daysUntilDue = getDaysUntilDue(assignment.dueDate);
          return (
            <div key={assignment.id} style={{
              background: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: assignment.status === 'overdue' ? '2px solid #dc3545' : '1px solid #e9ecef'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <FaFileAlt style={{ color: '#007bff', fontSize: '1.2rem' }} />
                <h3 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>{assignment.title}</h3>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <strong>Subject:</strong> {assignment.subject}
                </p>
                <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <strong>Due Date:</strong> {new Date(assignment.dueDate).toLocaleDateString()}
                  {daysUntilDue > 0 && assignment.status === 'pending' && (
                    <span style={{ color: daysUntilDue <= 3 ? '#dc3545' : '#28a745', marginLeft: '10px' }}>
                      ({daysUntilDue} days left)
                    </span>
                  )}
                </p>
                <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9rem' }}>
                  <strong>Max Marks:</strong> {assignment.maxMarks}
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  margin: '10px 0'
                }}>
                  <span style={{ 
                    color: getStatusColor(assignment.status),
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {getStatusIcon(assignment.status)}
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                  {assignment.grade && (
                    <span style={{ 
                      background: '#28a745',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {assignment.grade}/{assignment.maxMarks}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleViewDetails(assignment)}
                  style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <FaEye />
                  View Details
                </button>
                
                {(assignment.status === 'pending' || assignment.status === 'overdue') && (
                  <button
                    onClick={() => handleSubmit(assignment)}
                    style={{
                      background: assignment.status === 'overdue' ? '#dc3545' : '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <FaUpload />
                    Submit
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Assignment Details Modal */}
      {selectedAssignment && !showSubmissionModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>{selectedAssignment.title}</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: '#333', marginBottom: '10px' }}>Description:</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{selectedAssignment.description}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <p><strong>Subject:</strong> {selectedAssignment.subject}</p>
                <p><strong>Due Date:</strong> {new Date(selectedAssignment.dueDate).toLocaleDateString()}</p>
                <p><strong>Max Marks:</strong> {selectedAssignment.maxMarks}</p>
              </div>
              <div>
                {selectedAssignment.submittedDate && (
                  <p><strong>Submitted:</strong> {new Date(selectedAssignment.submittedDate).toLocaleDateString()}</p>
                )}
                {selectedAssignment.grade && (
                  <p><strong>Grade:</strong> {selectedAssignment.grade}/{selectedAssignment.maxMarks}</p>
                )}
                <p><strong>Status:</strong> {selectedAssignment.status}</p>
              </div>
            </div>

            {selectedAssignment.feedback && (
              <div style={{ marginBottom: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>Teacher Feedback:</h4>
                <p style={{ color: '#666', margin: '0' }}>{selectedAssignment.feedback}</p>
              </div>
            )}

            {selectedAssignment.attachments && selectedAssignment.attachments.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>Attachments:</h4>
                {selectedAssignment.attachments.map((file, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '8px',
                    background: '#f8f9fa',
                    borderRadius: '5px',
                    marginBottom: '5px'
                  }}>
                    <FaFileAlt style={{ color: '#007bff' }} />
                    <span style={{ flex: 1 }}>{file}</span>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}>
                      <FaDownload />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedAssignment(null)}
                style={{
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              {(selectedAssignment.status === 'pending' || selectedAssignment.status === 'overdue') && (
                <button
                  onClick={() => setShowSubmissionModal(true)}
                  style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Submit Assignment
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Submission Modal */}
      {showSubmissionModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            maxWidth: '500px',
            width: '90%'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>Submit Assignment</h3>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              Upload your completed assignment for: <strong>{selectedAssignment?.title}</strong>
            </p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Select File:
              </label>
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.txt"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '2px dashed #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              />
              <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
                Accepted formats: PDF, DOC, DOCX, TXT
              </p>
            </div>

            {selectedFile && (
              <div style={{ 
                marginBottom: '20px',
                padding: '10px',
                background: '#f8f9fa',
                borderRadius: '5px'
              }}>
                <p style={{ margin: '0', color: '#333' }}>
                  <strong>Selected file:</strong> {selectedFile.name}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowSubmissionModal(false);
                  setSelectedFile(null);
                }}
                style={{
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={submitAssignment}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}