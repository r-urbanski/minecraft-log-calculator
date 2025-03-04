import { useState } from 'react'
import { CalculatorItems, ListItems } from '../assets/utils/interfaces'
import { woods } from '../assets/utils/wood'

import WoodList from './Main/WoodList'
import Calculator from './Main/Calculator'

const Main: React.FC = () => {
    const [selectedList, setSelectedList] = useState<ListItems[]>(woods)
    const [calculatorList, setCalculatorList] = useState<CalculatorItems[]>([])

    return (
        <main className='module'>
            <section className='items-list-container'>
                <h2>Choose items</h2>
                <WoodList selectedList={selectedList} setSelectedList={setSelectedList} setCalculatorList={setCalculatorList} />
            </section>
            <section className='calculator-container'>
                <h2>How many?</h2>
                <Calculator calculatorList={calculatorList} />
            </section>
        </main>
    )
}

export default Main
