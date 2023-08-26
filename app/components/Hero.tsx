import Link from 'next/link';
import React from 'react';

export default function Hero() {
    return (
        <div className='w-full  h-screen relative'>
        <video 
            className='w-full h-full object-cover'
            src="/1057700108.mp4"
            autoPlay
            loop
            muted
            >

        </video>
        
        <div  className='absolute w-full h-full top-0 left-0 bg-gray-900/30' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='font-bold text-5xl py-2 text-gray-100'>
                CAFE ASOME
            </h1>
            <h3 className='py-7 text-3xl'>
                쾌적한 공간 속에서 편안한 휴식을 즐겨보세요.
            </h3>

            <div>
            <button  className='mb-5 mt-7 bg-blue-400 py-4 px-7 rounded-lg w-fit'>
            {/* <a href="tel:01054653899">메뉴보러가기</a> */}
            <Link href="/menu">
                메뉴보러가기→
            </Link>
            </button>
            </div>
            </div>
    </div>
    );
}

