import React from 'react';
import Image from 'next/image';
import SmasungImg from '/public/Home/SAMSUNG.svg';
import GoogleImg from '/public/Home/GOGGLE.svg';
import AmazonImg from '/public/Home/AMAZON.svg';
import WindowsImg from '/public/Home/WINDOWS.svg';
import SonyImg from '/public/Home/SONY.svg';

const LogoIcon: React.FC = () => {
    return (
        <div className='bg-[#11112B] grid grid-cols-3 md:flex md:flex-wrap gap-10 justify-center md:justify-between items-center px-4 py-10 md:px-10 md:py-20'>
            <Image src={SmasungImg} alt='Samsung logo' width={85} height={20} className='m-4 md:w-[200px] md:h-[150px]' />
            <Image src={GoogleImg} alt='Google logo' width={85} height={20} className='m-4 md:w-[150px] md:h-[40px]' />
            <Image src={AmazonImg} alt='Amazon logo' width={85} height={20} className='m-4 md:w-[150px] md:h-[40px]' />
            <Image src={WindowsImg} alt='Windows logo' width={85} height={40} className='m-4 md:w-[150px] md:h-[80px]' />
            <Image src={SonyImg} alt='Sony logo' width={85} height={20} className='m-4 md:w-[150px] md:h-[40px]' />
        </div>
    );
}

export default LogoIcon;
