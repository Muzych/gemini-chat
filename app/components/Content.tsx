import React from 'react'
import { Divider } from '@nextui-org/react'
import Sidebar from './navigation/index'
import Main from './main';

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