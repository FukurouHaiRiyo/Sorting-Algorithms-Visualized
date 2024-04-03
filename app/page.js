import Navbar from './components/Navbar';
import Link from 'next/link';

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

                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            
          </div>
        </div>
      </header>
    </div>
  );
}
