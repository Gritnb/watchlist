import { clsx } from 'clsx'
import Card from '/components/Card.jsx'
import Welcome from '/components/Welcome.jsx'

export default function Container({watchlist, setWatchlist, display, setDisplay, history, setHistory}) {

    const data = display === 'history' ? history : watchlist

    const dataElements = data.length === 0
            ?   []
            :   data.map(item => {
                    return (
                        <Card content={item}
                              key={item.imdbID}
                              id={item.imdbID}
                              watchlist={watchlist}
                              setWatchlist={setWatchlist}
                              display={display}
                              history={history}
                              setHistory={setHistory}
                        />
                    )
                })

    return (
        <section className='movies'>
            <div className='movie-header'>
                <h1 className='movie-header-txt'>{display === 'history' ? 'Previously Watched' : 'Your watchlist'}</h1>
            </div>
            <div className={clsx('search-results',
                                  data.length === 0 && 'empty',
                                  data.length >0 && 'results')}>
                {
                    data.length === 0
                    ?   <>
                            <Welcome text={display === 'history' ? 'Nothing watched yet' : 'Your watchlist is empty'}/>
                            <button className='empty-watchlist-btn'
                                    onClick={() => setDisplay('search')}>Browse Movies!
                            </button>
                        </>
                    : dataElements
                }
            </div>
        </section>
    )
}
