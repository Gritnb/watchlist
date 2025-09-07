import { useState, useRef, useEffect } from 'react'
import { getMovieFromAi } from "/utils/aiScript.js"
import { getResults } from '/utils/getResults.js'
import { clsx } from 'clsx'
import Welcome from '/components/Welcome.jsx'
import Card from '/components/Card.jsx'

export default function Search({history, setHistory, watchlist, setWatchlist, display}) {

    const [results , setResults] = useState([])
    const [aiResults, setAiResults] = useState([])

    const resultsContainer = useRef()

    useEffect(() => {
        if (results.length !== 0 && resultsContainer) {
            window.scroll({
                top: resultsContainer.current.getBoundingClientRect().top + window.scrollY - 50,
                behavior: 'smooth'
            })
        }
    }, [results])

    async function fetchResults(data) {
        if (display === 'search') {
            const response = await getResults(data.get('user-input'))
            setResults(response)
        } else if (display === 'ai') {
            const response = await getMovieFromAi(data.get('user-input'))
            setAiResults(response)
        }
    }

    const data = display === 'search' ? results : aiResults

    console.log(data)
    const resultElements = data
        .filter(result => result.imdbVotes !== 'N/A' && result.imdbRating !== 'N/A' && result.Plot !== 'N/A')
        .map(result => {
            return result?.Error 
                ? <Welcome text={result.Error}/>
                : <Card content={result} 
                        key={result.imdbID}
                        id={result.imdbID}
                        watchlist={watchlist}
                        setWatchlist={setWatchlist}
                        display={display}
                        history={history}
                        setHistory={setHistory}
                  />
        }
    )

    return (
        <section className='movie-search'>
            <div className='search-header'>
                <h1 className='search-header-txt'>
                    {display === 'search'
                        ? 'Got a movie in mind? Type it in.'
                        : 'Got an idea in mind?'}
                </h1>
                <form className='search-form'
                      action={fetchResults}>
                    <div className='search-bar'>
                        {display === 'search'
                            ? <i className='fa-solid fa-magnifying-glass search-icon'></i>
                            : <i className='fa-solid fa-pencil search-icon'></i>}
                        <input type='text'
                               className='search-input'
                               placeholder={display === 'search' ? 'E.g. Titanic' : 'I want some western!'}
                               name='user-input'
                               required={true}
                               autoComplete='off'
                            />  
                    </div>
                    <div className='search-btn-container'>
                        <button type='submit' className='search-btn'>Search</button>
                    </div>
                </form>
            </div>
            <div className={clsx('search-results',
                                 results.length === 0 && 'empty',
                                 results.length > 0 && results[0]?.Error && 'empty',
                                 results.length > 0 && !results[0]?.Error && 'results')}
                 ref={resultsContainer}>
                {results.length === 0 && <Welcome text={'Start Exploring'}/>}
                {results.length > 0 && resultElements}
            </div> 
            
        </section>
    )
}
