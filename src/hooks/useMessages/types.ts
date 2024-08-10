import { Timestamp } from "firebase/firestore";

export interface IMessage {
  id: string;
  text: string;
  createdAt: Timestamp;
}
