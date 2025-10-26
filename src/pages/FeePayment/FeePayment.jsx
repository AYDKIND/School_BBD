import { useState } from 'react';
import { FaDownload, FaCreditCard, FaUniversity, FaMoneyBillWave, FaQrcode, FaCheck } from 'react-icons/fa';
import './FeePayment.css';

// Add jsPDF import
import jsPDF from 'jspdf';

const FeePayment = () => {
  const [activeTab, setActiveTab] = useState('card');
  const [studentInfo, setStudentInfo] = useState({
    studentId: '',
    studentName: '',
    class: '',
    term: '',
    feeAmount: ''
  });
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handleStudentInfoChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // In a real application, this would process the payment
    // For demo purposes, we'll simulate a successful payment
    
    const receiptNumber = `FEE-${Math.floor(Math.random() * 100000)}`;
    const paymentDate = new Date().toLocaleDateString();
    
    setReceiptData({
      receiptNumber,
      paymentDate,
      studentId: studentInfo.studentId,
      studentName: studentInfo.studentName,
      class: studentInfo.class,
      term: studentInfo.term,
      amount: studentInfo.feeAmount,
      paymentMethod: getPaymentMethodName(activeTab)
    });
    
    setPaymentComplete(true);
  };

  const getPaymentMethodName = (method) => {
    switch(method) {
      case 'card': return 'Credit/Debit Card';
      case 'netbanking': return 'Net Banking';
      case 'upi': return 'UPI';
      case 'cash': return 'Cash';
      default: return 'Unknown';
    }
  };

  const downloadReceipt = () => {
    if (!receiptData) {
      alert('No receipt data available. Please complete a payment first.');
      return;
    }

    const doc = new jsPDF();
    const marginLeft = 20;

    doc.setFontSize(18);
    doc.text('BBD Academy - Fee Payment Receipt', marginLeft, 20);

    doc.setFontSize(12);
    doc.text(`Receipt Number: ${receiptData.receiptNumber}`, marginLeft, 40);
    doc.text(`Date: ${receiptData.paymentDate}`, marginLeft, 48);

    doc.text('Student Details:', marginLeft, 64);
    doc.text(`Student ID: ${receiptData.studentId}`, marginLeft, 72);
    doc.text(`Student Name: ${receiptData.studentName}`, marginLeft, 80);
    doc.text(`Class: ${receiptData.class}`, marginLeft, 88);
    doc.text(`Term: ${receiptData.term}`, marginLeft, 96);

    doc.text('Payment Details:', marginLeft, 112);
    doc.text(`Amount Paid: ₹${receiptData.amount}`, marginLeft, 120);
    doc.text(`Payment Method: ${receiptData.paymentMethod}`, marginLeft, 128);
    doc.text('Status: PAID', marginLeft, 136);

    doc.text('Thank you for your payment!', marginLeft, 156);

    doc.save(`BBD-Academy-Receipt-${receiptData.receiptNumber}.pdf`);
  };

  const resetForm = () => {
    setPaymentComplete(false);
    setStudentInfo({
      studentId: '',
      studentName: '',
      class: '',
      term: '',
      feeAmount: ''
    });
  };

  return (
    <main className="fee-payment-page">
      {/* Hero Section */}
      <section className="fee-payment-hero">
        <div className="container">
          <h1>Fee Payment</h1>
          <p>Pay your fees securely and conveniently</p>
        </div>
      </section>

      {/* Fee Payment Content */}
      <section className="fee-payment-content section">
        <div className="container">
          {paymentComplete ? (
            <div className="payment-success">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h2>Payment Successful!</h2>
              <p>Your payment has been processed successfully.</p>
              
              <div className="receipt">
                <h3>Payment Receipt</h3>
                <div className="receipt-details">
                  <div className="receipt-row">
                    <span>Receipt Number:</span>
                    <span>{receiptData.receiptNumber}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Date:</span>
                    <span>{receiptData.paymentDate}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Student ID:</span>
                    <span>{receiptData.studentId}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Student Name:</span>
                    <span>{receiptData.studentName}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Class:</span>
                    <span>{receiptData.class}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Term:</span>
                    <span>{receiptData.term}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Amount Paid:</span>
                    <span>₹{receiptData.amount}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Payment Method:</span>
                    <span>{receiptData.paymentMethod}</span>
                  </div>
                  <div className="receipt-row">
                    <span>Status:</span>
                    <span className="status-paid">PAID</span>
                  </div>
                </div>
                
                <div className="receipt-actions">
                  <button className="download-receipt-btn" onClick={downloadReceipt}>
                    <FaDownload /> Download Receipt
                  </button>
                  <button className="make-another-payment-btn" onClick={resetForm}>
                    Make Another Payment
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="fee-payment-container">
              <div className="fee-info">
                <h2>Fee Payment Information</h2>
                <p>Please enter the student details and select a payment method to proceed with the fee payment.</p>
                
                <div className="fee-structure">
                  <h3>Fee Structure</h3>
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Class</th>
                        <th>Term Fee</th>
                        <th>Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nursery - KG</td>
                        <td>₹12,000</td>
                        <td>₹45,000</td>
                      </tr>
                      <tr>
                        <td>Grade 1-5</td>
                        <td>₹14,000</td>
                        <td>₹54,000</td>
                      </tr>
                      <tr>
                        <td>Grade 6-8</td>
                        <td>₹17,000</td>
                        <td>₹66,000</td>
                      </tr>
                      <tr>
                        <td>Grade 9-10</td>
                        <td>₹19,000</td>
                        <td>₹75,000</td>
                      </tr>
                      <tr>
                        <td>Grade 11-12</td>
                        <td>₹23,000</td>
                        <td>₹90,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="payment-form-container">
                <h2>Make a Payment</h2>
                
                <form className="payment-form" onSubmit={handlePayment}>
                  <div className="form-section">
                    <h3>Student Information</h3>
                    
                    <div className="form-group">
                      <label htmlFor="studentId">Student ID *</label>
                      <input 
                        type="text" 
                        id="studentId" 
                        name="studentId" 
                        value={studentInfo.studentId} 
                        onChange={handleStudentInfoChange} 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="studentName">Student Name *</label>
                      <input 
                        type="text" 
                        id="studentName" 
                        name="studentName" 
                        value={studentInfo.studentName} 
                        onChange={handleStudentInfoChange} 
                        required 
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="class">Class *</label>
                        <select 
                          id="class" 
                          name="class" 
                          value={studentInfo.class} 
                          onChange={handleStudentInfoChange} 
                          required
                        >
                          <option value="">Select Class</option>
                          <option value="Nursery">Nursery</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i} value={`Grade ${i+1}`}>Grade {i+1}</option>
                          ))}
                        </select>
                      </div>
                      

                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="feeAmount">Fee Amount (₹) *</label>
                      <input 
                        type="number" 
                        id="feeAmount" 
                        name="feeAmount" 
                        value={studentInfo.feeAmount} 
                        onChange={handleStudentInfoChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-section">
                    <h3>Payment Method</h3>
                    
                    <div className="payment-tabs">
                      <div 
                        className={`payment-tab ${activeTab === 'card' ? 'active' : ''}`}
                        onClick={() => setActiveTab('card')}
                      >
                        <FaCreditCard />
                        <span>Card</span>
                      </div>
                      
                      <div 
                        className={`payment-tab ${activeTab === 'netbanking' ? 'active' : ''}`}
                        onClick={() => setActiveTab('netbanking')}
                      >
                        <FaUniversity />
                        <span>Net Banking</span>
                      </div>
                      
                      <div 
                        className={`payment-tab ${activeTab === 'upi' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upi')}
                      >
                        <FaQrcode />
                        <span>UPI</span>
                      </div>
                      
                      <div 
                        className={`payment-tab ${activeTab === 'cash' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cash')}
                      >
                        <FaMoneyBillWave />
                        <span>Cash</span>
                      </div>
                    </div>
                    
                    <div className="payment-tab-content">
                      {activeTab === 'card' && (
                        <div className="card-payment">
                          <div className="form-group">
                            <label htmlFor="cardNumber">Card Number *</label>
                            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          </div>
                          
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="expiryDate">Expiry Date *</label>
                              <input type="text" id="expiryDate" placeholder="MM/YY" required />
                            </div>
                            
                            <div className="form-group">
                              <label htmlFor="cvv">CVV *</label>
                              <input type="text" id="cvv" placeholder="123" required />
                            </div>
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="cardName">Name on Card *</label>
                            <input type="text" id="cardName" required />
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'netbanking' && (
                        <div className="netbanking-payment">
                          <div className="form-group">
                            <label htmlFor="bank">Select Bank *</label>
                            <select id="bank" required>
                              <option value="">Select Bank</option>
                              <option value="sbi">State Bank of India</option>
                              <option value="hdfc">HDFC Bank</option>
                              <option value="icici">ICICI Bank</option>
                              <option value="axis">Axis Bank</option>
                              <option value="pnb">Punjab National Bank</option>
                              <option value="bob">Bank of Baroda</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'upi' && (
                        <div className="upi-payment">
                          <div className="form-group">
                            <label htmlFor="upiId">UPI ID *</label>
                            <input type="text" id="upiId" placeholder="name@upi" required />
                          </div>
                          
                          <div className="upi-apps">
                            <p>Or pay using UPI apps</p>
                            <div className="upi-app-icons">
                              <div className="upi-app">
                                <img src="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk" alt="Google Pay" />
                                <span>Google Pay</span>
                              </div>
                              <div className="upi-app">
                                <img src="https://i.pinimg.com/736x/b2/e1/af/b2e1af76fbbe9bc446544b8fa71b37b1.jpg" alt="PhonePe" />
                                <span>PhonePe</span>
                              </div>
                              <div className="upi-app">
                                <img src="https://www.citypng.com/public/uploads/preview/paytm-circle-logo-hd-png-701751694706614zmho56voff.png" alt="Paytm" />
                                <span>Paytm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'cash' && (
                        <div className="cash-payment">
                          <p>Please visit the school's accounts office to make a cash payment. After payment, you will receive a receipt that you can use to download a digital copy.</p>
                          
                          <div className="form-group">
                            <label htmlFor="cashReceiptNumber">Cash Receipt Number (if already paid) *</label>
                            <input type="text" id="cashReceiptNumber" placeholder="Enter receipt number" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="pay-now-btn">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default FeePayment;