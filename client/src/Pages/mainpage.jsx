import React, { useState, useRef, useEffect } from 'react';
import Navbar from "../components/navbar";
import Chart from "../components/realtimechart";
import FormattedDate from "../components/FormattedDate";
import Alert from "../components/Alert";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const theme = createTheme({
    typography: {
        button: {
            fontFamily: 'Space Mono',
        },
    },
});

const MainPage = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isRead, serIsRead] = useState(false);
    const [notificationpanel, setNotificationPanel] = useState();
    const [instantNote, setInstantNote] = useState({});
    const [sensorValues, setSensorValues] = useState([]);

    //websocket service----------------------------------------------

    let stompClient = null;
    let stompClient2 = null;

    const connect = () => {
        const socket = new SockJS('http://localhost:8080/notifications');
        stompClient = Stomp.over(socket);

        const dataSocket = new SockJS('http://localhost:8080/sensor-data');
        stompClient2 = Stomp.over(dataSocket);

        stompClient.connect({}, () => {
            console.log('Connected to WebSocket');
            stompClient.subscribe('/topic/notifications', (message) => {
                setInstantNote(message.body);
                console.log(instantNote)
                //callback(JSON.parse(message.body));
            })
        });

        stompClient2.connect({}, () => {
            console.log('Connected to WebSocket');
            stompClient2.subscribe('/topic/sensor-data', (message) => {
                setSensorValues(message.body);
                console.log(sensorValues)
                //callback(JSON.parse(message.body));
            })
        });

    };

    const sendMessage = (message) => {
        if (stompClient && stompClient.connected) {
            stompClient.send('/app/message', {}, JSON.stringify(message));
        }
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
            console.log('Disconnected from WebSocket');
        }
    };
    //----------------------------------------------------------------

    const handleClickOutside = () => {
        if (notificationpanel) {
            setNotificationPanel(false);
        }

    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [notificationpanel]);

    const togglePanel = () => {
        setNotificationPanel(!notificationpanel);
    };

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    //------------------------------------------
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        connect();
        axios.get('http://localhost:8080/notifications/all')
            .then((response) => {
                setNotifications(response.data);
                //console.log(response.data);
            })
    }, [])


    return (
        <div className='flex-col bg-[#040417] h-[100vh] bg-gradient-to-br from-[#9d00635a] via-[#040417] to-[#290b3a]'>
            <div className='flex-col h-[100vh]'>
                <Navbar
                    toggle={togglePanel}
                />
                <>
                    <div className={`absolute right-0 h-[100vh] ${notificationpanel ? 'w-[25%] items-start' : 'w-0 items-center'} flex flex-col justify-between transition-all duration-500 ease-in-out`}>
                        <div className='absolute inset-0 bg-[#ffffff10] blur-2xl'></div>
                        <div className='shadow-[#f4fdff6f] w-full pl-12 pr-3 py-2 h-[91vh] overflow-y-auto' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', scrollbarColor: 'transparent transparent' }}>
                            {notifications && notifications.map((notification) => (
                                <Alert
                                    key={notification._id}
                                    id={notification.id}
                                    date={notification.dateReceived}
                                    time={notification.timeReceived}
                                    temp={notification.tempValue}
                                // <Alert isRead={isRead} />
                                />
                            ))}
                        </div>
                    </div>
                </>
                <div className='font-space-mono flex justify-center'>
                    <p className='text-white text-5xl font-semibold'>Sensor Monitoring System</p>
                </div>
                <div className='flex-col w-[70%] h-[100vh]'>
                    <div className='flex px-20 space-x-10 mt-12'>
                        <div className='relative w-7/8'>
                            <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                            <div className='text-center font-semibold font-space-mono px-7 py-3 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                <p className='text-white text-xl'>Total Sensors</p>
                                <p className='text-white text-2xl mt-2'>3</p>
                            </div>
                        </div>
                        <div className='relative w-7/8'>
                            <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                            <div className='text-center font-semibold font-space-mono px-7 py-3 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                <p className='text-white text-xl'>Active Sensors</p>
                                <p className='text-white text-2xl mt-2'>1</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-16'>
                        <div className='flex justify-center'>
                            <div className='w-full'>
                                <div className='text-center mb-6'>
                                    <FormattedDate />
                                </div>
                                <div className='px-10'>
                                    <Chart />
                                </div>
                                <div className='flex items-center justify-start mt-12 px-20 font-space-mono'>
                                    <p className='text-white'>Fetch Data &nbsp;</p>
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={handleClick}
                                            style={{
                                                font: 'space-mono',
                                                width: '100px',
                                                backgroundColor: isToggled ? '#9d0063' : '#9e9e9e25',
                                                color: isToggled ? 'white' : '#b3b3b3',
                                            }}
                                        >
                                            {isToggled ? 'Enabled' : 'Disabled'}
                                        </Button>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
