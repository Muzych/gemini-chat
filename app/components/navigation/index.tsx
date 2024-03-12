import React from 'react'
import Menubar from './Menubar';
import ChatList from './ChatList';

export interface SidebarProps {
    readonly title: string;
    readonly expand: boolean;
}

const Sidebar = (props: SidebarProps) => {
    const {
        title,
        expand
    } = props
    return (
       <aside className='flex'>
            <div className="flex flex-col relative p-2 h-[100svh] w-[260px] flex-col overflow-y-auto  dark:border-slate-700  sm:h-[100vh] sm:w-64">
                <Menubar />
                <ChatList />
            </div>
       </aside>
    )
}

export default Sidebar