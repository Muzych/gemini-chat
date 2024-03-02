import React from 'react'

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
        <aside className={`h-screen z-[202] sticky top-0 w-64 flex-auto justify-between block`}>
            Sidebar
        </aside>
    )
}

export default Sidebar