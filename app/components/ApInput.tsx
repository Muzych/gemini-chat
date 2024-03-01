import { Input } from "@nextui-org/react";

export default function ApInput() {
    return (
        <>
            <div className="flex w-full md:flex-nowrap md:w-[500px] h-[40px]">
                <Input type="text" label="API KEY" />
            </div>
        </>
    )
}