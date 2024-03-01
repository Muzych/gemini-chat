import { atom, useAtom } from "jotai"
import type { Dispatch, SetStateAction } from "react"

enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

const themeAtom = atom<Theme | null>(Theme.DARK)

function useTheme(): [Theme | null, Dispatch<SetStateAction<Theme | null>>] {
    const [theme, setTheme] = useAtom(themeAtom)
    return [theme, setTheme]
}

export { Theme, useTheme }