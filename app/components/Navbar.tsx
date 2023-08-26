"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu,  AiOutlineClose } from 'react-icons/ai';


export default function Navbar() {
        const [nav, setNav]= useState(false);
        const [logo, setLogo] = useState(false);

        const handleNav = () => {
            setNav(!nav);
            setLogo(!logo);
        }
    return (
        <div className='flex w-full justify-between  items-center h-20  px-4 absolute z-10 text-white'>
            <div>
                <h1 className='font-bold text-3xl p-3 text-teal-200'>
                    ASOME
                </h1>
            </div>


                <ul className='hidden md:flex justify-center items-center gap-10'>
                    <Link href="/">
                        <li className='hover:text-blue-400 hover:underline duration-200'>
                            Home
                        </li>
                    </Link>
                    <Link href="/destinations">
                        <li className='hover:text-blue-400 hover:underline duration-200'>
                         Destinations
                        </li>
                    </Link>
                    <Link href="/travel">
                        <li className='hover:text-blue-400 hover:underline duration-200'>
                            Travel
                        </li>
                    </Link>
                    <Link href="/view">
                        <li className='hover:text-blue-400 hover:underline duration-200'>
                            View
                        </li>
                    </Link>
                    <Link href="/book">
                        <li className='hover:text-blue-400 hover:underline duration-200'>
                            Book
                        </li>
                    </Link>
                </ul>

                <div className='hidden md:flex gap-10'>
                    <BiSearch className='hover:text-blue-400 duration-200 cursor-pointer' size={20}/>
                    <BsPerson className='hover:text-blue-400 duration-200 cursor-pointer' size={20}/>
                </div>


                {/* Mobile */}
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                   {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>

                {/* Menu Dropdown */}

                <div 
                onClick={handleNav}
                className={
                    nav 
                    ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' 
                    : 'absolute left-[-100%]'
                    }
                    >

                        <ul>
                            <h1 className='text-2xl font-bold mb-5'>ASOME</h1>

                            <Link href="/">
                        <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                            Home
                        </li>
                    </Link>
                    <Link href="/destinations">
                        <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                         Destinations
                        </li>
                    </Link>
                    <Link href="/travel">
                        <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                            Travel
                        </li>
                    </Link>
                    <Link href="/view">
                        <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                            View
                        </li>
                    </Link>
                    <Link href="/book">
                        <li className='hover:text-blue-400 mb-6 hover:underline duration-200'>
                            Book
                        </li>
                    </Link>
                        </ul>

                        <div className='flex flex-col justify-center items-center gap-5'>
                            <BiSearch className='hover:text-blue-400 duration-200 cursor-pointer' size={20}/>
                            <BsPerson className='hover:text-blue-400 duration-200 cursor-pointer' size={20}/>
                        </div>


                </div>


            </div>

    );
}
