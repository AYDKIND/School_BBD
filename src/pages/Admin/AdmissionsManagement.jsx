import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaCheck, FaTimes, FaEye, FaDownload } from 'react-icons/fa';

export default function AdmissionsManagement() {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Sample admission applications data
  const applications = {
    pending: [
      {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@email.com',
        phone: '+91 9876543210',
        class: '10th',
        dateApplied: '2024-01-15',
        documents: ['Birth Certificate', 'Previous School Certificate', 'Photo'],
        status: 'pending',
        parentName: 'Mr. Suresh Sharma',
        address: '123 Main Street, Delhi',
        previousSchool: 'ABC Public School'
      },
      {
        id: 2,
        name: 'Priya Patel',
        email: 'priya.patel@email.com',
        phone: '+91 9876543211',
        class: '8th',
        dateApplied: '2024-01-14',
        documents: ['Birth Certificate', 'Previous School Certificate'],
        status: 'pending',
        parentName: 'Mrs. Meera Patel',
        address: '456 Park Avenue, Mumbai',
        previousSchool: 'XYZ School'
      }
    ],
    approved: [
      {
        id: 3,
        name: 'Amit Kumar',
        email: 'amit.kumar@email.com',
        phone: '+91 9876543212',
        class: '9th',
        dateApplied: '2024-01-10',
        dateApproved: '2024-01-12',
        documents: ['Birth Certificate', 'Previous School Certificate', 'Photo'],
        status: 'approved',
        parentName: 'Mr. Raj Kumar',
        address: '789 Garden Street, Bangalore',
        previousSchool: 'DEF International School'
      }
    ],
    rejected: [
      {
        id: 4,
        name: 'Sneha Gupta',
        email: 'sneha.gupta@email.com',
        phone: '+91 9876543213',
        class: '11th',
        dateApplied: '2024-01-08',
        dateRejected: '2024-01-11',
        rejectionReason: 'Seats full for 11th grade',
        documents: ['Birth Certificate', 'Previous School Certificate'],
        status: 'rejected',
        parentName: 'Dr. Vikash Gupta',
        address: '321 Hill View, Chennai',
        previousSchool: 'GHI Academy'
      }
    ]
  };

  const handleApprove = (applicationId) => {
    alert(`Application ${applicationId} approved successfully!`);
    // In real implementation, this would update the backend
  };

  const handleReject = (applicationId) => {
    const reason = prompt('Please enter rejection reason:');
    if (reason) {
      alert(`Application ${applicationId} rejected. Reason: ${reason}`);
      // In real implementation, this would update the backend
    }
  };

  const ApplicationCard = ({ application }) => (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      marginBottom: '15px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1a237e' }}>{application.name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaEnvelope style={{ color: '#666' }} />
              <span style={{ fontSize: '0.9rem' }}>{application.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaPhone style={{ color: '#666' }} />
              <span style={{ fontSize: '0.9rem' }}>{application.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaCalendarAlt style={{ color: '#666' }} />
              <span style={{ fontSize: '0.9rem' }}>Applied: {application.dateApplied}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaUser style={{ color: '#666' }} />
              <span style={{ fontSize: '0.9rem' }}>Class: {application.class}</span>
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>Documents:</strong> {application.documents.join(', ')}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <button
            onClick={() => setSelectedApplication(application)}
            style={{
              background: '#1a237e',
              border: 'none',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <FaEye /> View Details
          </button>
          {application.status === 'pending' && (
            <>
              <button
                onClick={() => handleApprove(application.id)}
                style={{
                  background: '#4CAF50',
                  border: 'none',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <FaCheck /> Approve
              </button>
              <button
                onClick={() => handleReject(application.id)}
                style={{
                  background: '#f44336',
                  border: 'none',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <FaTimes /> Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const ApplicationModal = ({ application, onClose }) => (
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
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Application Details</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          <div><strong>Student Name:</strong> {application.name}</div>
          <div><strong>Email:</strong> {application.email}</div>
          <div><strong>Phone:</strong> {application.phone}</div>
          <div><strong>Class:</strong> {application.class}</div>
          <div><strong>Parent/Guardian:</strong> {application.parentName}</div>
          <div><strong>Address:</strong> {application.address}</div>
          <div><strong>Previous School:</strong> {application.previousSchool}</div>
          <div><strong>Date Applied:</strong> {application.dateApplied}</div>
          {application.dateApproved && <div><strong>Date Approved:</strong> {application.dateApproved}</div>}
          {application.dateRejected && <div><strong>Date Rejected:</strong> {application.dateRejected}</div>}
          {application.rejectionReason && <div><strong>Rejection Reason:</strong> {application.rejectionReason}</div>}
          <div><strong>Documents Submitted:</strong> {application.documents.join(', ')}</div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            style={{
              background: '#1a237e',
              border: 'none',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <FaDownload /> Download Documents
          </button>
          {application.status === 'pending' && (
            <>
              <button
                onClick={() => {
                  handleApprove(application.id);
                  onClose();
                }}
                style={{
                  background: '#4CAF50',
                  border: 'none',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Approve
              </button>
              <button
                onClick={() => {
                  handleReject(application.id);
                  onClose();
                }}
                style={{
                  background: '#f44336',
                  border: 'none',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Admissions Management</h1>
      <p>Manage student admission applications and track the admission process.</p>

      {/* Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        margin: '30px 0'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#FF9800' }}>{applications.pending.length}</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Pending Applications</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#4CAF50' }}>{applications.approved.length}</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Approved</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#f44336' }}>{applications.rejected.length}</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Rejected</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #f0f0f0' }}>
          {['pending', 'approved', 'rejected'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? '#1a237e' : 'transparent',
                color: activeTab === tab ? 'white' : '#666',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px 4px 0 0',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontWeight: '500'
              }}
            >
              {tab} ({applications[tab].length})
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div>
        {applications[activeTab].length === 0 ? (
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>No {activeTab} applications found.</p>
          </div>
        ) : (
          applications[activeTab].map(application => (
            <ApplicationCard key={application.id} application={application} />
          ))
        )}
      </div>

      {/* Application Details Modal */}
      {selectedApplication && (
        <ApplicationModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
        />
      )}
    </div>
  );
}