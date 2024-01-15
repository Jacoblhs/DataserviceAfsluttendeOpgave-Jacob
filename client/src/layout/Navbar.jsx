import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-gray-200 bg-green-600 w-full'>
        <div className='max-sw-screen-xl flex flex-wrap items-center justify-between p-4 m-auto'>
            <div>
                <div>
                    <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
                        <li>
                            <a href="/" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/haveservice" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                                Viborg Haveservice
                            </a>
                        </li>
                        <li>
                            <a href="/reviews" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                                Reviews
                            </a>
                        </li>
                        <li>
                            <a href="/news" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                                News
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar