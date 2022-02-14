export interface MessageProps {
    id: number;
    userId: number;
    roomId: number;
    message: string;
    createdAt: string;
}

export interface CreateMessageProps {
    userId: number;
    roomId: number;
    message: string;
}
