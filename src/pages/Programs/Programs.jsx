import React from 'react'
import { Outlet } from 'react-router-dom'
function Programs() {
    return (
        <div>
            <div className='flex-col pt-20'>
                <h1 className='font-bold capitalize text-3xl '>Our Programs</h1>
                <Outlet/>
            </div>
        </div>
    )
}

export default Programs
