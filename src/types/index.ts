export type AgeGroup = 'adult' | 'pre-k' | 'creche' | 'c-kids' | 'HS';
export interface Person {
    firstName: string;
    lastName: string;
    ageGroup: AgeGroup;
    guardianName?: string;
    email: string;
    phoneNumber: string;
}