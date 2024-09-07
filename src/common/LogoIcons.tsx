import React from 'react';
import Image from 'next/image';
import SmasungImg from '../../public/Home/SAMSUNG.svg';
import GoogleImg from '../../public/Home/GOGGLE.svg';
import AmazonImg from '../../public/Home/AMAZON.svg';
import WindowsImg from '../../public/Home/WINDOWS.svg';
import SonyImg from '../../public/Home/SONY.svg';

const LogoIcon: React.FC = () => {
    return (
        <div className='bg-[#11112B] flex justify-between items-center px-10 py-20 '>
            <Image src={SmasungImg} alt='Samsung logo' width={150} height={40}  className='mt-20'/>
            <Image src={GoogleImg} alt='Google logo' width={150} height={40} className='mt-20'/>
            <Image src={AmazonImg} alt='Amazon logo' width={150} height={40}  className='mt-20'/>
            <Image src={WindowsImg} alt='Windows logo' width={150} height={80} className='mt-20'/>
            <Image src={SonyImg} alt='Sony logo' width={150} height={40} className='mt-20'/>
        </div>
    );
}

export default LogoIcon;
