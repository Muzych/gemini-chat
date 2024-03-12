import {Button} from "@nextui-org/react";
export default function Menubar() {
    return (
        <div>
            <div className="mx-2">
                <Button
                        fullWidth={true}
                        size="lg"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                    New Chat
                </Button>
            </div>
        </div>
    )
}