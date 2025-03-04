// import { HeaderProps } from '../assets/utils/interfaces'

interface HeaderProps {
    calculators: { name: string; number: number }[]
    currentCalculator: number
    setCurrentCalculator: React.Dispatch<React.SetStateAction<number>>
}

const Header: React.FC<HeaderProps> = ({ calculators, currentCalculator, setCurrentCalculator }) => {
    return (
        <header>
            <div className='module'>
                <nav className='menu'>
                    {calculators.map(({ name, number }, index) => (
                        <button className={currentCalculator == number ? 'current' : ''} key={index} type='button' onClick={() => setCurrentCalculator(number)}>
                            {name}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
