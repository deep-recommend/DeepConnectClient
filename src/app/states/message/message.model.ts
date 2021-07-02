export interface MessageProps {
    _id: string;
    userId: string;
    roomId: string;
    message: string;
    createdAt: Date;
}

export interface CreateMessageProps {
    userId: string;
    roomId: string;
    message: string;
}
