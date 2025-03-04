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
}

export interface CalculatorItemProps {
    name: string
    image: string
    functionName: string
}
