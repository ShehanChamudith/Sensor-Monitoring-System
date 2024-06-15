import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {IconButton} from "@mui/material";

const navbar = () => {
    return (
        <div className='flex-col w-screen'>
            <div className='flex h-[80px] items-center'>
                <div className='w-[70%] flex justify-start px-10'>

                </div>
                <div className='w-[30%] flex justify-end px-10 space-x-[50px] items-center'>
                    <button>
                        <div className='flex-col font-space-mono'>
                            <p className='text-white text-lg'>Sensors</p>
                        </div>
                    </button>
                    <IconButton>
                        <NotificationsIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default navbar
