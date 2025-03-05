import { useEffect, useState } from 'react'
import { CalculatorItems, ListItems } from '../assets/utils/interfaces'
import { woods } from '../assets/utils/wood'

import List from './Main/List'
import Calculator from './Main/Calculator'

const Main: React.FC = () => {
    const [selectedList, setSelectedList] = useState<ListItems[]>(woods)
    const [calculatorList, setCalculatorList] = useState<CalculatorItems[]>([])
    const [allNeededLogs, setAllNeededLogs] = useState<number>(0)
    const [logsInStacks, setLogsInStacks] = useState<string>('0')

    const convertToStacks = (logs: number): string => {
        let stacksNum = Math.floor(logs / 64)
        let logsRest = logs % 64
        let logsNumStacked = `${stacksNum} stacks + ${logsRest}`
        return logsNumStacked
    }

    useEffect(() => {
        let stacks = convertToStacks(allNeededLogs)
        setLogsInStacks(stacks)
    }, [allNeededLogs])

    return (
        <main>
            <section className='items-list-container module'>
                <h2>
                    Choose <span>items</span>
                </h2>
                <List selectedList={selectedList} setSelectedList={setSelectedList} setCalculatorList={setCalculatorList} />
            </section>
            <section className='calculator-container module'>
                <h2>
                    How <span>many</span> items?
                </h2>
                <Calculator selectedList={selectedList} calculatorList={calculatorList} setAllNeededLogs={setAllNeededLogs} />
            </section>
            <section className='summary-container module'>
                <h2>
                    <span>S</span>u<span>m</span>m<span>a</span>r<span>y</span>!
                </h2>
                <aside className='all-needed-logs'>
                    <h2>
                        All needed <span>logs</span>: {allNeededLogs}
                    </h2>
                    <h2>
                        in <span>stacks</span>: {logsInStacks}
                    </h2>
                </aside>
            </section>
        </main>
    )
}

export default Main
