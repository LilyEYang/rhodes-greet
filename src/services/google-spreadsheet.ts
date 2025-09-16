import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Person } from '../types';

// function getSpreadsheet() {
//     const serviceAccountAuth = new JWT({
//         email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         key: process.env.GOOGLE_PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
//         scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     return new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
// }

export async function addPersonToSheet(person: Person): Promise<boolean> {
    return true;
}
