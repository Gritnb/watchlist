import { useState, useEffect } from 'react'
import MoviesComponent from '/components/MoviesComponent.jsx'
import SearchComponent from '/components/SearchComponent.jsx'

export default function MainContent({display, setDisplay}) {

    const [watchlist, setWatchlist] = useState(
        () => JSON.parse(localStorage.getItem('user-watchlist')) || [])

    const [userHistory, setUserHistory] = useState(
        () => JSON.parse(localStorage.getItem('user-history')) || [])

    useEffect(() => {
        localStorage.setItem('user-watchlist', JSON.stringify(watchlist))
    }, [watchlist])

    useEffect(() => {
        localStorage.setItem('user-history', JSON.stringify(userHistory))
    }, [userHistory])

    return (
        <main className='main'>
            {
                (display === 'search' || display === 'ai') &&
                    <SearchComponent watchlist={watchlist}
                                     setWatchlist={setWatchlist}
                                     display={display}
                                     history={userHistory}
                                     setHistory={setUserHistory}/>
            }
            {
                (display === 'watchlist' || display === 'history') &&
                    <MoviesComponent watchlist={watchlist} 
                                     setWatchlist={setWatchlist}
                                     display={display}
                                     setDisplay={setDisplay}
                                     history={userHistory}
                                     setHistory={setUserHistory}/>
            }
        </main>
    )
}
