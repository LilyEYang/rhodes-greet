import React, { useState } from 'react';
import { addPersonToSheet } from '../services/google-spreadsheet';
import { AgeGroup, Person } from '../types';

const CreateRecordForm: React.FC<{ initFirstName: string, initLastName: string, hideForm: () => void}> = ({ initFirstName, initLastName, hideForm }) => {
    const [firstName, setFirstName] = useState(initFirstName);
    const [lastName, setLastName] = useState(initLastName);
    const [ageGroup, setAgeGroup] = useState('adult');
    const [guardianName, setGuardianName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newRecord: Person = {
            firstName,
            lastName,
            ageGroup: ageGroup as AgeGroup,
            guardianName,
            email,
            phoneNumber,
        };
        await addPersonToSheet(newRecord);
        hideForm();
    };

    // const resetForm = () => {
    //     setFirstName('');
    //     setLastName('');
    //     setAgeGroup('');
    //     setGuardianName('');
    //     setEmail('');
    //     setPhoneNumber('');
    // };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Age Group:</label>
                <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} required>
                    <option value="">Select Age Group</option>
                    <option value="adult">Adult</option>
                    <option value="pre-k">Pre-K</option>
                    <option value="creche">Creche</option>
                    <option value="c-kids">C-Kids</option>
                    <option value="HS">High School</option>
                </select>
            </div>
            <div>
                <label>Guardian Name (if not adult):</label>
                <input
                    type="text"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Record</button>
        </form>
    );
};

export default CreateRecordForm;