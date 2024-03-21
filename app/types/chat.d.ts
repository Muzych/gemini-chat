export interface Chat {
    id: string
    title: string
    updateTime: number
}

export type Role = 'user' | 'system' | 'assistant';