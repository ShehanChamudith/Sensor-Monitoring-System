import React from 'react';
import Temp from '../Assets/temperature.png';

const Alert = ({isRead}) => {
    return (
        <div className='pr-2 mb-2'>
            <div className={`${isRead ? 'bg-[#ffffff0a]':'bg-[#a41e1e36]'} flex p-3 items-center shadow-inner-custom rounded-lg`} style={{ backdropFilter: 'blur(15px)' }}>
                <img src={Temp} alt='tempicon' className='w-8 h-7 m-2' />
                <div className='flex-col space-y-[6px] ml-2'>
                    <p className={`text-xl ${isRead ? 'text-[#ffffff]':'text-[#ff3e3e]'}`}>High Temperature Alert!</p>
                    <p className='text-white text-sm'>12.06.2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23:10:20</p>
                </div>
                <p className={`text-3xl ${isRead ? 'text-[#ffffff]':'text-[#ff3e3e]'} ml-9`}>20℃</p>
            </div>
        </div>
    )
}

export default Alert
