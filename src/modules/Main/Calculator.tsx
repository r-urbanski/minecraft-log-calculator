import { useState, useEffect } from 'react'
import { CalculatorProps, LogsCount } from '../../assets/utils/interfaces'
import CalculatorItem from './CalculatorItem'

const Calculator: React.FC<CalculatorProps> = ({ selectedList, calculatorList, setAllNeededLogs }) => {
    const [logsCount, setLogsCount] = useState<LogsCount>({
        wood: 0,
        log: 0,
        planks: 0,
        slab: 0,
        stairs: 0,
        fence: 0,
        fence_gate: 0,
        door: 0,
        trapdoor: 0,
        sign: 0,
    })

    useEffect(() => {
        let allLogsSum = 0
        Object.values(logsCount).forEach(numOfLogs => (allLogsSum += numOfLogs))
        setAllNeededLogs(allLogsSum)
    }, [logsCount])

    useEffect(() => {
        selectedList.map(item => {
            if (item.selected === false) {
                setLogsCount(prev => ({ ...prev, [item.name]: 0 }))
            }
        })
    }, [selectedList])

    return (
        <section className='calculator'>
            <article className='header-row'>
                <div className='cell heading icon'>Item</div>
                <div className='cell heading item'>Count</div>
                <div className='cell heading logs'>Logs Needed</div>
            </article>
            {calculatorList.length === 0 ? (
                <article className='info'>
                    <h3>Nothing here yet...</h3>
                </article>
            ) : (
                ''
            )}
            {calculatorList.map(({ name, image, functionName }, index) => (
                <CalculatorItem key={index} name={name} image={image} functionName={functionName} setLogsCount={setLogsCount} />
            ))}
        </section>
    )
}

export default Calculator
