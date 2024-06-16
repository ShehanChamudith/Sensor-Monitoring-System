import React, { useEffect, useState } from 'react';
import { connect, sendMessage, disconnect } from '../config/websocketService';

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        connect((msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });
        return () => disconnect();
    }, []);

    const handleSendMessage = () => {
        sendMessage(input);
        setInput('');
    };

    return (
        <div>
            <h1>WebSocket Chat</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
        </div>
    );
};

export default WebSocketComponent;
