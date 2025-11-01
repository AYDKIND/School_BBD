import React, { useState } from 'react';
import { FaRupeeSign, FaCalendarAlt, FaUser, FaSearch, FaDownload, FaPlus, FaEdit } from 'react-icons/fa';

export default function FeeManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  // Sample fee data
  const feeStructure = [
    { class: '1st-5th', tuitionFee: 15000, examFee: 2000, libraryFee: 1000, transportFee: 8000, total: 26000 },
    { class: '6th-8th', tuitionFee: 18000, examFee: 2500, libraryFee: 1200, transportFee: 8000, total: 29700 },
    { class: '9th-10th', tuitionFee: 22000, examFee: 3000, libraryFee: 1500, transportFee: 8000, total: 34500 },
    { class: '11th-12th', tuitionFee: 25000, examFee: 3500, libraryFee: 1800, transportFee: 8000, total: 38300 }
  ];

  const studentFees = [
    {
      id: 1,
      name: 'Rahul Sharma',
      class: '10th',
      rollNo: 'BBD001',
      totalFee: 34500,
      paidAmount: 20000,
      pendingAmount: 14500,
      lastPayment: '2024-01-15',
      status: 'partial',
      paymentHistory: [
        { date: '2024-01-15', amount: 10000, method: 'Online', receipt: 'RCP001' },
        { date: '2024-01-10', amount: 10000, method: 'Cash', receipt: 'RCP002' }
      ]
    },
    {
      id: 2,
      name: 'Priya Patel',
      class: '8th',
      rollNo: 'BBD002',
      totalFee: 29700,
      paidAmount: 29700,
      pendingAmount: 0,
      lastPayment: '2024-01-12',
      status: 'paid',
      paymentHistory: [
        { date: '2024-01-12', amount: 29700, method: 'Online', receipt: 'RCP003' }
      ]
    },
    {
      id: 3,
      name: 'Amit Kumar',
      class: '12th',
      rollNo: 'BBD003',
      totalFee: 38300,
      paidAmount: 0,
      pendingAmount: 38300,
      lastPayment: null,
      status: 'pending',
      paymentHistory: []
    }
  ];

  const monthlyCollection = [
    { month: 'January 2024', collected: 2850000, target: 3000000, percentage: 95 },
    { month: 'December 2023', collected: 2950000, target: 3000000, percentage: 98.3 },
    { month: 'November 2023', collected: 2800000, target: 3000000, percentage: 93.3 }
  ];

  const filteredStudents = studentFees.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return '#4CAF50';
      case 'partial': return '#FF9800';
      case 'pending': return '#f44336';
      default: return '#666';
    }
  };

  const FeeOverview = () => (
    <div>
      {/* Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#4CAF50' }}>₹28.5L</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Total Collection (This Month)</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#FF9800' }}>₹12.3L</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Pending Amount</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#1a237e' }}>1250</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Total Students</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0', fontSize: '2rem', color: '#f44336' }}>85</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Defaulters</p>
        </div>
      </div>

      {/* Monthly Collection */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 20px 0' }}>Monthly Collection Report</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Month</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Target</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Collected</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Achievement</th>
              </tr>
            </thead>
            <tbody>
              {monthlyCollection.map((month, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{month.month}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{(month.target / 100000).toFixed(1)}L</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{(month.collected / 100000).toFixed(1)}L</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <span style={{ 
                      color: month.percentage >= 95 ? '#4CAF50' : month.percentage >= 80 ? '#FF9800' : '#f44336',
                      fontWeight: 'bold'
                    }}>
                      {month.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const FeeStructureTab = () => (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Fee Structure</h2>
        <button style={{
          background: '#1a237e',
          border: 'none',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <FaEdit /> Edit Structure
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Class</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Tuition Fee</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Exam Fee</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Library Fee</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Transport Fee</th>
              <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map((fee, index) => (
              <tr key={index}>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>{fee.class}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{fee.tuitionFee.toLocaleString()}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{fee.examFee.toLocaleString()}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{fee.libraryFee.toLocaleString()}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{fee.transportFee.toLocaleString()}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>₹{fee.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const StudentFeesTab = () => (
    <div>
      {/* Search and Filter */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        marginBottom: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '200px' }}>
          <FaSearch style={{ color: '#666' }} />
          <input
            type="text"
            placeholder="Search by name or roll number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '8px 12px',
              flex: 1
            }}
          />
        </div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={{
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '8px 12px'
          }}
        >
          <option value="all">All Classes</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="8th">8th</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
        </select>
        <button style={{
          background: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <FaDownload /> Export
        </button>
      </div>

      {/* Student Fee List */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ margin: '0 0 20px 0' }}>Student Fee Status</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Student</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Class</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Total Fee</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Paid</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Pending</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Last Payment</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{student.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#666' }}>{student.rollNo}</div>
                    </div>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{student.class}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>₹{student.totalFee.toLocaleString()}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd', color: '#4CAF50' }}>₹{student.paidAmount.toLocaleString()}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd', color: '#f44336' }}>₹{student.pendingAmount.toLocaleString()}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      background: getStatusColor(student.status) + '20',
                      color: getStatusColor(student.status),
                      textTransform: 'uppercase'
                    }}>
                      {student.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {student.lastPayment || 'No payment'}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button style={{
                        background: '#1a237e',
                        border: 'none',
                        color: 'white',
                        padding: '5px 8px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}>
                        View
                      </button>
                      <button style={{
                        background: '#4CAF50',
                        border: 'none',
                        color: 'white',
                        padding: '5px 8px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}>
                        Pay
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Fee Management</h1>
      <p>Manage student fees, track payments, and generate reports.</p>

      {/* Tabs */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #f0f0f0' }}>
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'structure', label: 'Fee Structure' },
            { key: 'students', label: 'Student Fees' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: activeTab === tab.key ? '#1a237e' : 'transparent',
                color: activeTab === tab.key ? 'white' : '#666',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px 4px 0 0',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <FeeOverview />}
      {activeTab === 'structure' && <FeeStructureTab />}
      {activeTab === 'students' && <StudentFeesTab />}
    </div>
  );
}