import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Button from './Components/Button'

const Layout = () => {

    return (
        <>

            <Navbar />
            <Button/>
            <Outlet />

        </>
    )
}

export default Layout