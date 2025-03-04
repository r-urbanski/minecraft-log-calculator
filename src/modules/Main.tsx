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
            <WoodList selectedList={selectedList} setSelectedList={setSelectedList} setCalculatorList={setCalculatorList} />
            <Calculator calculatorList={calculatorList} />
        </main>
    )
}

export default Main
