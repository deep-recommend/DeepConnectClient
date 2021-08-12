export interface NotificationProps {
    _id: string
    isMessage: boolean
    message: string
    currentUserId: string
    userId: string
}

export interface CreateNotificationProps {
    isMessage: boolean
    currentUserId: string
    userId: string
}
