import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Chart from "../components/realtimechart";
import FormattedDate from "../components/FormattedDate";
import { Button } from "@mui/material";

const MainPage = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='flex-col bg-[#040417] h-[100vh] bg-gradient-to-br from-[#9d00635a] via-[#040417] to-[#290b3a]'>
            <div className='flex-col h-[100vh]'>
                <Navbar />
                <div className='flex-col w-[70%] h-[100vh]'>
                    <div className='flex justify-center space-x-[160px] mt-8'>
                        <div className='relative w-7/8'>
                            <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                            <div className='relative z-20 text-center font-semibold font-space-mono p-7 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                <p className='text-white text-2xl'>Total Sensors</p>
                                <p className='text-white text-3xl mt-6'>3</p>
                            </div>
                        </div>
                        <div className='relative w-7/8'>
                            <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                            <div className='relative z-20 text-center font-semibold font-space-mono p-7 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                <p className='text-white text-2xl'>Active Sensors</p>
                                <p className='text-white text-3xl mt-6'>1</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-16'>
                        <div className='flex justify-center'>
                            <div className='w-full'>
                                <div className='text-center mb-4'>
                                    <FormattedDate />
                                </div>
                                <div className='px-10'>
                                    <Chart />
                                </div>
                                <div className='flex justify-start mt-12 px-20'>
                                <Button variant="contained" color="success" onClick={handleClick}>{isToggled ? 'ON' : 'OFF'}</Button>
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
