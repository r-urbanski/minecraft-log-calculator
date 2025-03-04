import { useState } from 'react'
import { CalculatorItemProps } from '../../assets/utils/interfaces'
import { Calculations } from '../../assets/utils/calculations'

const CalculatorItem: React.FC<CalculatorItemProps> = ({ name, image, functionName }) => {
    const [count, setCount] = useState<string>('')
    const [logsNeeded, setLogsNeeded] = useState<string>('')

    const stripToFour = (functionName: string, inputValue: string) => {
        const possibleKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '']
        const lastChar = inputValue.slice(-1)

        if (!possibleKeys.includes(lastChar)) return
        if (inputValue.length === 1 && inputValue === '0') return

        let newValue: string = inputValue
        if (inputValue.length > 4) newValue = inputValue.slice(0, -1)
        setCount(newValue)

        if (inputValue.length === 0) {
            setLogsNeeded('')
            return
        }

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

        const logsNumber = functionsMap[functionName](newValue)
        setLogsNeeded(`${logsNumber}`)
    }

    return (
        <tr>
            <td className='item'>
                <img src={image} alt={name} />
                <p>{name}</p>
            </td>
            <td>
                <input type='text' value={count} onChange={event => stripToFour(functionName, event.target.value)} />
            </td>
            <td>
                <input type='text' value={logsNeeded} disabled />
            </td>
        </tr>
        // <div className='item'>
        //     <img src={image} alt={name} />
        //     <p>{name}</p>
        // </div>
    )
}

export default CalculatorItem
