export interface NotificationProps {
    id: number;
    isMessage: boolean;
    message: string;
    currentUserId: number;
    userId: number;
}

export interface CreateNotificationProps {
    isMessage: boolean;
    currentUserId: number;
    userId: number;
}
