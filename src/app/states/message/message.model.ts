export interface MessageProps {
    _id: string;
    userId: string;
    roomId: string;
    message: string;
}

export interface CreateMessageProps {
    userId: string;
    roomId: string;
    message: string;
}
