import { useState } from 'react'
import Header from '/components/Header.jsx'
import MainContent from '/components/MainContent.jsx'

export default function App() {

    const [displayedComponent, setDisplayedComponent] = useState('search')
    
    return (
        <>
            <Header display={displayedComponent}
                    setDisplay={setDisplayedComponent}/>

            <MainContent display={displayedComponent}
                         setDisplay={setDisplayedComponent}/>
        </>
    )
}
