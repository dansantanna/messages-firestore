import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import getFirestoreDb from "services/firestore";
import { IMessage } from "./types";

const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const db = getFirestoreDb();
    const unsubscribe = onSnapshot(collection(db, "messages"), ({ docs }) => {
      const updatedMessages = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IMessage[];
      setMessages(updatedMessages);
    });
    return () => unsubscribe();
  }, []);

  const addMessage = useCallback(async (text: string) => {
    try {
      const db = getFirestoreDb();
      await addDoc(collection(db, "messages"), {
        text,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, []);

  return { messages, addMessage };
};

export default useMessages;
