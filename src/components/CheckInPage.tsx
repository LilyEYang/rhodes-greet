import React, { useState } from 'react';
import { searchPersonByName, createRecord } from '../services/api';
import CreateRecordForm from './CreateRecordForm';

const CheckInPage: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [personExists, setPersonExists] = useState<boolean | null>(null);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleSearch = async () => {
        const exists = await searchPersonByName(firstName, lastName);
        setPersonExists(exists);
    };

    const handleCreateRecord = async (recordData: any) => {
        await createRecord(recordData);
        setShowCreateForm(false);
        setFirstName('');
        setLastName('');
        setPersonExists(null);
    };

    return (
        <div>
            <h1>Check In</h1>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button onClick={handleSearch}>Check In</button>

            {personExists === false && (
                <button onClick={() => setShowCreateForm(true)}>Add New Person</button>
            )}

            {
                showCreateForm && (
                    <CreateRecordForm initFirstName={firstName} initLastName={lastName} hideForm={() => setShowCreateForm(false)} />
                )
            }

            {personExists === true && <p>Welcome back, {firstName} {lastName}!</p>}
        </div>
    );
};

export default CheckInPage;