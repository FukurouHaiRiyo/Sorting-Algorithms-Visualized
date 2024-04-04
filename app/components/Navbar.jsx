import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center'>
        <div className='flex lg:flex-1'>
            <Link href='' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Sorting algorithms visualized</span>
                <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt=''/>
            </Link>
        </div>

        <div className='flex lg:hidden'>
            <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                <span className='sr-only'></span>

                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/>
                </svg>
            </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
            <Link href='#' className='text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500'>
                Every sorting algorithm explained
            </Link>

            <Link href='#' className='text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500'>
                Visualize the sorting algorithms
            </Link>

            <Link href='#' className='text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500'>
                About
            </Link>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link href='#' className='text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500'>
                Log in <span aria-hidden='true'>&rarr;</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar