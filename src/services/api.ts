import axios from 'axios';
import { Person } from '../types';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const searchPersonByName = async (firstName: string, lastName: string) => {
    try {
        const response = await axios.get(`${API_URL}/people`, {
            params: { firstName, lastName }
        });
        return response.data;
    } catch (error) {
        return false;
        // throw new Error('Error searching for person: ' + error.message);
    }
};

export const createSheet = async () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-AU'); // DD/MM/YYYY
    // create sheet with name formattedDate and required headers
    // add column to weekly count
    // add column to weekly attendance
    // update formula in all past attendees
}

export const createRecord = async (record: {
    firstName: string;
    lastName: string;
    ageGroup: string;
    guardianName?: string;
    email: string;
    phoneNumber: string;
}) => {
    try {
        const response = await axios.post(`${API_URL}/people`, record);
        return response.data;
    } catch (error) {
        return true;
        // throw new Error('Error creating record: ' + error.message);
    }
};

export const fetchAttendanceList = async (): Promise<Person[]> => {
    return [{
        firstName: 'lily',
        lastName: 'yang',
        ageGroup: 'adult',
        email: 'lilytest',
        phoneNumber: 'blah'
    }]
}