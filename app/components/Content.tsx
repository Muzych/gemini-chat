import React from 'react'
import { Divider } from '@nextui-org/react'
import Sidebar from './Sidebar'
import Main from './Main'

const Content = () => {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <Main />
            </div>

        </>
    )
}

export default Content