import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoanForm2 from './LoanForm2';
import LoanList from './LoanList';
import './style.css'; 

function SecApp() {
  const [loans, setLoans] = useState([
    { id: 1, employeeName: 'Alice Johnson', amount: 5000, reason: 'Medical emergency' },
    { id: 2, employeeName: 'Bob Williams', amount: 2500, reason: 'Car repairs' },
  ]);

  const addLoan = (newLoan) => {
    setLoans([...loans, newLoan]);
  };

  const deleteLoan = (idToDelete) => {
    setLoans(loans.filter(loan => loan.id !== idToDelete));
  };

  const updateLoan = (idToUpdate, updatedData) => {
    setLoans(loans.map(loan => 
      loan.id === idToUpdate ? { ...loan, ...updatedData } : loan
    ));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Employee Loan Portal</h1>
        <nav>
            <Link to="/" className="btn-nav">← Go Back</Link>
        </nav>
      </header>
      <main>
        <LoanForm2 onAddLoan={addLoan} />
        <LoanList 
          loans={loans} 
          onDeleteLoan={deleteLoan} 
          onUpdateLoan={updateLoan} 
        />
      </main>
    </div>
  );
}

export default SecApp;