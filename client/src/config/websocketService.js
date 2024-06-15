import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

let stompClient = null;

export const connect = (callback) => {
    const socket = new SockJS('http://localhost:8080/notifications');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
        console.log('Connected to WebSocket');
        stompClient.subscribe('/topic/notifications', (message) => {
            console.log(message.body)
            //callback(JSON.parse(message.body));
        });
        stompClient.subscribe('/topic/sensor-data', (message) => {
            //callback(JSON.parse(message.body));
        })
    });
};

export const sendMessage = (message) => {
    if (stompClient && stompClient.connected) {
        stompClient.send('/app/message', {}, JSON.stringify(message));
    }
};

export const disconnect = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
        console.log('Disconnected from WebSocket');
    }
};
