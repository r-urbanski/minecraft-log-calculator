const Header: React.FC = () => {
    return (
        <header>
            <div className='module'>
                <nav className='menu'>
                    {/* {calculators.map(({ name, number }, index) => (
                        <button className={currentCalculator == number ? 'current' : ''} key={index} type='button' onClick={() => setCurrentCalculator(number)}>
                            {name}
                        </button>
                    ))} */}
                    <button type='button'>
                        <span>Minecraft</span> Log Calculator
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
