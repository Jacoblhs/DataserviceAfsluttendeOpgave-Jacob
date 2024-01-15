import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Layout = () => {
    return (

        //         <section className="h-screen p-12 border-2 border-yellow-400 bg-my-blue-400 md:p-14 lag:p-16 xl:20 md:border-green-400 lg:border-blue-400 xl:border-purple-400 2xl:border-red-400">

        <section>

            <Navbar />

            <main>
                <Outlet />
            </main>

        </section>
    )
}

export default Layout