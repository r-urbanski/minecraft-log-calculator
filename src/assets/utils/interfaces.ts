export interface ListItems {
    selected: boolean
    name: string
    image: string
}

export interface ListProps {
    selectedList: ListItems[]
    setSelectedList: React.Dispatch<React.SetStateAction<ListItems[]>>
    setCalculatorList: React.Dispatch<React.SetStateAction<CalculatorItems[]>>
}

export interface CalculatorItems {
    name: string
    image: string
    counter: number
    functionName: string
}

export interface CalculatorProps {
    calculatorList: CalculatorItems[]
    setAllNeededLogs: React.Dispatch<React.SetStateAction<number>>
}

export interface LogsCount {
    wood: number
    log: number
    planks: number
    slab: number
    stairs: number
    fence: number
    fence_gate: number
    door: number
    trapdoor: number
    sign: number
}

export interface CalculatorItemProps {
    name: string
    image: string
    functionName: string
    setLogsCount: React.Dispatch<React.SetStateAction<LogsCount>>
}
