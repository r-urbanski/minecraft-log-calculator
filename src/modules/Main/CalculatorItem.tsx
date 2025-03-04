import { useState } from 'react'
import { CalculatorItemProps } from '../../assets/utils/interfaces'
import Calculations from '../../assets/utils/Calculations.ts'

const CalculatorItem: React.FC<CalculatorItemProps> = ({ name, image, functionName, setLogsCount }) => {
    const [count, setCount] = useState<string>('')
    const [logsNeeded, setLogsNeeded] = useState<number>(0)

    const stripToFour = (functionName: string, inputValue: string) => {
        const possibleKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '']
        const lastChar = inputValue.slice(-1)

        if (!possibleKeys.includes(lastChar)) return
        if (inputValue.length === 1 && inputValue === '0') return

        let newValue: string = inputValue
        if (inputValue.length > 4) {
            newValue = inputValue.slice(0, -1)
            return
        }

        setCount(newValue)

        const calculations = new Calculations(newValue)
        const functionsMap: Record<string, Function> = {
            wood: () => calculations.wood(),
            log: () => calculations.logs(),
            planks: () => calculations.planks(),
            slab: () => calculations.slabs(),
            stairs: () => calculations.stairs(),
            fence: () => calculations.fences(),
            fence_gate: () => calculations.fenceGates(),
            door: () => calculations.doors(),
            trapdoor: () => calculations.trapdoors(),
            sign: () => calculations.signs(),
        }

        let logsNumber = 0
        if (inputValue.length === 0) {
            setLogsNeeded(0)
            // return
        } else {
            logsNumber = functionsMap[functionName](newValue)
        }

        setLogsCount(prev => {
            console.log(prev)
            return { ...prev, [functionName]: logsNumber }
        })

        setLogsNeeded(logsNumber)
    }

    return (
        <article className='item-row'>
            <div className='cell icon'>
                <img src={image} alt={name} />
                <p>{name}</p>
            </div>
            <div className='cell item'>
                <input type='text' value={count} onChange={event => stripToFour(functionName, event.target.value)} />
            </div>
            <div className='cell logs'>
                <input type='text' value={logsNeeded} disabled />
            </div>
        </article>
    )
}

export default CalculatorItem
