import { useEffect } from 'react'

import Header from './modules/Header'
import Main from './modules/Main'
import Footer from './modules/Footer'

const App = () => {
    useEffect(() => {
        console.log(window.innerWidth, window.innerHeight)
    }, [])
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
