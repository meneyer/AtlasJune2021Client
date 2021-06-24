import APIURL from "../helpers/environment";

import { useEffect, useRef, useState } from "react";
import socketIOClient from 'socket.io-client';

const NewMessageEvent = "newChatMessage";
const SocketServer = APIURL;

const UseChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {

        socketRef.current = socketIOClient(SocketServer, {
            query: {roomId},
        });

        socketRef.current.on(NewMessageEvent, (message) => {
            const newMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, newMessage]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);

    const sendMessage = (messageBody) => {
        socketRef.current.emit(NewMessageEvent, {
            body: messageBody,
            senderId: socketRef.current.id,
        });
    };

    return {messages, sendMessage };

};

export default UseChat;