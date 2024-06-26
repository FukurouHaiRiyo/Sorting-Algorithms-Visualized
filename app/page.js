import Visualizer from '@/pages/visualizer';
import Navbar from './components/Navbar';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <Navbar/>

        {/* Mobile menu, show/hide based on menu open state. */}
        <div className='lg:hidden' role='dialog' aria-modal='true'>
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className='fixed inset-0 z-50'></div>

          <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <Link href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>...</span>
                <img className='h-8 w-auto' src='' alt=''/>
              </Link>

              <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700'>
                <span className='sr-only'>Close menu</span>

                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
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
                      
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'></div>
        </div>

        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Sorting algorithms seen visually, so you can understand better. <Link href='/visualizer' className='font-semibold text-indigo-600 hover:text-indigo-300'><span className='absolute inset-0' aria-hidden='true'></span>Click here <span aria-hidden='true'>&rarr;</span></Link> to get started.
            </div>
          </div>

          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Visualize sorting algorithms and see how they work.
            </h1>

            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Every algorithm will contain an explanation of how it works, all together with a visual representation
              of how it works 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
