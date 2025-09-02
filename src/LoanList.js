import React from 'react';
import LoanItem from './LoanItem';

function LoanList({ loans, onDeleteLoan, onUpdateLoan }) {
  return (
    <div className="loan-list">
      <h2>Submitted Applications</h2>
      {loans.length > 0 ? (
        // Use .map() to iterate over the array and create a component for each item
        loans.map(loan => (
          <LoanItem 
            key={loan.id} 
            loan={loan} 
            onDeleteLoan={onDeleteLoan}
            onUpdateLoan={onUpdateLoan}
          />
        ))
      ) : (
        <p className="no-loans">No loan applications have been submitted yet.</p>
      )}
    </div>
  );
}

export default LoanList;  