import React, { useState } from 'react';

function LoanItem({ loan, onDeleteLoan, onUpdateLoan }) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...loan });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateLoan(editData.id, { ...editData, amount: parseFloat(editData.amount) });
    setIsEditing(false); 
  };
  
  
  return (
    <div className="loan-item">
      {isEditing ? (
        
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" name="employeeName" value={editData.employeeName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Loan Amount ($)</label>
            <input type="number" name="amount" value={editData.amount} onChange={handleInputChange} />
          </div>
           <div className="form-group">
            <label>Reason</label>
            <textarea name="reason" rows="2" value={editData.reason} onChange={handleInputChange}></textarea>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        
        <div className="loan-details">
          <p><strong>Employee:</strong> {loan.employeeName}</p>
          <p><strong>Amount:</strong> ${loan.amount.toLocaleString()}</p>
          <p><strong>Reason:</strong> {loan.reason}</p>
          <div className="loan-actions">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn-delete" onClick={() => onDeleteLoan(loan.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanItem;