export interface WorkshopDTO {
    workshopId: number | null;
    name: string;
    description: string;
    location?: string;
    dateTime: Date;
    signupLink?: string;
    image: string;
    googleDriveLink?: string;
}