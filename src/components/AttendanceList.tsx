import React, { useEffect, useState } from 'react';
import { fetchAttendanceList } from '../services/api';
import { Person } from '../types';

const AttendanceList: React.FC = () => {
    const [attendanceRecords, setAttendanceRecords] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAttendanceRecords = async () => {
            try {
                const records = await fetchAttendanceList();
                setAttendanceRecords(records);
            } catch (err) {
                setError('Failed to fetch attendance records.');
            } finally {
                setLoading(false);
            }
        };

        loadAttendanceRecords();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Attendance List</h2>
            <ul>
                {attendanceRecords.map((record) => (
                    <li key={record.firstName}>
                        {record.firstName} {record.lastName} - {record.ageGroup}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;