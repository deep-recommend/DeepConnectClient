import { MessageProps } from "../message/message.model";

export interface RoomProps {
    id: number;
    messages?: MessageProps[];
    currentUserId?: number;
    userId?: number;
}
