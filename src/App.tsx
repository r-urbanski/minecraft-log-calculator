import Header from './modules/Header'
import Main from './modules/Main'
import Footer from './modules/Footer'

const App = () => {
    // const [currentCalculator, setCurrentCalculator] = useState(1)

    // const calculators = [
    //     { name: 'Minecraft Log Calculator', number: 1 },
    //     // { name: 'Cobble Calculator', number: 2 },
    // ]

    return (
        <>
            {/* <Header calculators={calculators} currentCalculator={currentCalculator} setCurrentCalculator={setCurrentCalculator} /> */}
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
