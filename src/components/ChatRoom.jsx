import React, {useState} from 'react';
import UseChat from '../components/UseChat';

export const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = UseChat(roomId);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessage = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage('');
    };


    return (
        <div>
            <h1 className='roomName'>Room: {roomId}</h1>
            <div className='messages'>
                <ol className='messagesList'>
                    {messages.map((message, i) => (
                        <li key={i} className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"}`}>{message.body}</li>
                        ))}
                </ol>
            </div>
            <textarea className='newMessageField' value={newMessage} onChange={handleNewMessage} placeholder="message . . ." />
            <button className='sendMessageButton' onClick={handleSendMessage}>Send</button>
        </div>
    )
}

export default ChatRoom;