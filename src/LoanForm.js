import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'; 

function LoanForm() {
    const navigate = useNavigate();

    const options = [
        { id: 1, content: "less than $500" },
        { id: 2, content: "between $500 and $2000" },
        { id: 3, content: "above $2000" },
    ];

   
    const [submissionStatus, setSubmissionStatus] = useState("");
    
    const [formInput, setFormInput] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: "less than $500"
    });

    const isButtonDisabled = formInput.name === "" || formInput.phoneNumber === "" || formInput.age === "" || submissionStatus.includes("Redirecting") || formInput.isEmployee === false;

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmissionStatus("");

        const { age, phoneNumber } = formInput;

    
        
        if (age < 18 || age > 100) {
            setSubmissionStatus("Error: Age must be between 18 and 100.");
            return;
        }
        if (phoneNumber.length < 10 || phoneNumber.length > 12) {
            setSubmissionStatus("Error: The phone number is not correct.");
            return;
        }
        

       
        setSubmissionStatus("Validation successful! Redirecting in 2 seconds...");

        
        setTimeout(() => {
            navigate('/SecApp', { state: { personalData: formInput } });
        }, 2000);
    };

    const messageStyle = {
        textAlign: 'center',
        marginBottom: '1rem',
        color: submissionStatus.startsWith("Error") ? '#D93025' : '#4CAF50' 
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input value={formInput.name} onChange={(e) => setFormInput({ ...formInput, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="number" value={formInput.phoneNumber} onChange={(e) => setFormInput({ ...formInput, phoneNumber: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" value={formInput.age} onChange={(e) => setFormInput({ ...formInput, age: e.target.value })} />
                </div>
                <div className="form-group form-group-checkbox">
                    <input type="checkbox" id="employeeCheck" checked={formInput.isEmployee} onChange={(e) => setFormInput({ ...formInput, isEmployee: e.target.checked })} />
                    <label htmlFor="employeeCheck">Are you an employee?</label>
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <select value={formInput.salary} onChange={(e) => setFormInput({ ...formInput, salary: e.target.value })}>
                        {options.map(op => <option key={op.id}>{op.content}</option>)}
                    </select>
                </div>
                
                {/* Display validation/redirect message */}
                {submissionStatus && <p style={messageStyle}>{submissionStatus}</p>}
                {/* If submissionStatus is truthy (like "Validation successful!"), */}
                {/* If submissionStatus is falsey (like "" or null) */}
                {/* && is used in React as a shorthand for conditional rendering → “render this only if the left side is true.” */}
                <button type="submit" disabled={isButtonDisabled}>
                    {submissionStatus.includes("Redirecting") ? "Please wait..." : "Continue to Application"}
                </button>
            </form>
        </div>
    );
}

export default LoanForm;