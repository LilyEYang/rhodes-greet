# Attendance Tracker

This project is a React application designed for checking in attendees and tracking attendance. It allows users to search for individuals by their first and last names, and if the individual does not exist in the database, it prompts the user to create a new record.

## Features

- **Check-In Page**: Users can input their first name and last name to check in. If the name is not found, a form will prompt the user to create a new record.
- **Create Record Form**: A form that collects additional information such as age group, guardian name (if applicable), email, and phone number.
- **Attendance List**: Displays a list of all checked-in attendees.

## Project Structure

```
attendance-tracker
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # React components
│   │   ├── CheckInPage.tsx
│   │   ├── CreateRecordForm.tsx
│   │   └── AttendanceList.tsx
│   ├── services            # API interaction
│   │   └── api.ts
│   ├── types               # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx             # Main App component
│   └── index.tsx           # Entry point of the React application
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd attendance-tracker
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

- Navigate to the check-in page to search for attendees.
- If an attendee is not found, fill out the form to create a new record.
- View the attendance list to see all checked-in individuals.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.