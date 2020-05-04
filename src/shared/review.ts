export class Review {
    _id: string;
    episode: number;
    author: string;
    email: string;
    agree: boolean;
    comment: string;
    rating: number;
    date: string;
    phone: string;
    contactType: string;
};

export const ContactType = ['None', 'Tel', 'Email'];