
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";
import ModelTab from "./ModelTab";
import { Icon } from '@iconify/react'
import ApInput from "./ApInput";

export default function App() {



    return (
        <Navbar>
            <NavbarContent className="hidden sm:flex gap-3" justify="start">
                <NavbarItem>
                    <ModelTab />
                </NavbarItem>
                <NavbarItem isActive>
                    <ApInput />
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end" className="flex">
                <NavbarItem>
                    <Link href="https://github.com/Muzych/gemini-chat" color="foreground" isExternal >
                        <Icon icon='mdi:github' height={28} />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeToggle />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
