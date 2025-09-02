import React, { useState } from 'react';
function LoanForm({ onAddLoan }) {
  
  const [loanData, setLoanData] = useState({
    id: null,
    employeeName: '',
    amount: '',
    reason: ''
  });

  // A single handler to update the state object based on input's `name` attribute
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loanData.employeeName || !loanData.amount || !loanData.reason) {
      alert('Please fill out all fields.');
      return;
    }
    
    onAddLoan({ ...loanData, id: Date.now(), amount: parseFloat(loanData.amount) });
    
    setLoanData({ employeeName: '', amount: '', reason: '' });
  };

  
  return (
    <div className="form-container">
      <h2>New Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={loanData.employeeName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Loan Amount ($)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={loanData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            name="reason"
            rows="3"
            value={loanData.reason}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default LoanForm;