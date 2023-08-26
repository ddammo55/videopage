import React from 'react';
import menu from '@/public/menu1.png'
import Image from 'next/image';

export default function Menu() {
    return (
        <div>
            <div className='flex justify-center'>
            <Image width={1000} height={600} src={menu} alt="menu" />
            </div>

        </div>
    );
}

