export interface MessageProps {
    id: number;
    currentUserId: number;
    userId: number;
    roomId: number;
    message: string;
    createdAt: string;
}

export interface CreateMessageProps {
    currentUserId: number;
    userId: number;
    roomId: number;
    message: string;
}
