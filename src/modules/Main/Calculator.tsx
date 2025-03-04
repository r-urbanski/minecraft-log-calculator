import { CalculatorProps } from '../../assets/utils/interfaces'
import CalculatorItem from './CalculatorItem'

const Calculator: React.FC<CalculatorProps> = ({ calculatorList }) => {
    return (
        <section className='calculator'>
            <table className='calculator-inner'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Logs Needed</th>
                    </tr>
                </thead>
                <tbody>
                    {calculatorList.map(({ name, image, functionName }, index) => (
                        <CalculatorItem key={index} name={name} image={image} functionName={functionName} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calculator
