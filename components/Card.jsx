export default function Card({content, id, watchlist, setWatchlist, display, history, setHistory}) {
    
    const genreElements = content.Genre.split(', ')
        .map((genre, index) => {
            return (
                <div className='genre' key={index}>{genre}</div>
            )
        })

    const isInWatchlist = watchlist.filter(item => Object.values(item).includes(id)).length > 0
    const isInHistory = history.filter(item => Object.values(item).includes(id)).length > 0

    function handleAddWatchlist() {
        if (!isInHistory) setWatchlist(prevWatchlist => [...prevWatchlist, content])
    }

    function handleRevert() {
        setWatchlist(prevWatchlist => prevWatchlist.filter(item => item.imdbID !== id))
    }

    function handleAddHistory() {
        setHistory(prevHistory => [...prevHistory, content])
        setWatchlist(prevWatchlist => prevWatchlist.filter(item => item.imdbID !== id))
    }

    function handleDelete() {
        setHistory(prevHistory => prevHistory.filter(item => item.imdbID !== id))
    }

    return (
        <article className='movie-card'>
            <div className='poster-container'>
                {
                    content.Poster === 'N/A'
                    ? ( 
                        <a  href="https://www.flaticon.com/free-icons/movie" 
                            title="movie icons"
                            target="_blank">
                            <img src={'/assets/images/movie-placeholder.png'}
                                 alt="Original poster hasn't been found. This is a placeholder image. "
                                 className='movie-poster'/>
                        </a>
                    ) : (
                        <a href={content.Poster} target='_blank'>
                            <img src={content.Poster} 
                                 alt={'Original poster from the movie' + content.Title + ' .'}
                                 className='movie-poster'
                                 onError={(event) => {
                                    event.target.onerror = null
                                    event.target.src='/assets/images/movie-placeholder.png'
                                 }}
                            />
                        </a>
                    )
                }
            </div>
            <div className='movie-details'>
                <div className='title-rating'>
                    <h2 className='movie-title'>{content.Title}</h2>
                    <div className='ratings-container'>
                        <i className='fa-solid fa-star rating-icon'></i>
                        <span className='ratings'>{content.imdbRating} <span className='slash'>/</span> 10 from {content.imdbVotes} votes.</span>
                    </div>
                </div>
                <span className='movie-runtime'>Duration:<span style={{marginInline: '5px'}}>{content.Runtime.split(' ')[0]}</span>Minutes</span>
                <div className='genres'>
                    {genreElements}
                </div>
                    <h3 className='movie-summary-header'>Summary</h3>
                    <p className='summary'>{content.Plot}</p>
                <small className={'directed' + (content.Director === 'N/A' ? ' hidden' : '')}>Directed by:
                    <span style={{marginLeft: '.5em'}}>{content.Director}, {content.Year}</span>
                </small>
            </div>
            <div className='buttons-container'>
                {
                    (display === 'search' || display === 'ai') && (
                        isInWatchlist
                        ? (
                            <button className='watchlist-btn added' onClick={() => handleRevert()}>
                                <i className='fa-solid fa-check watchlist-icon'></i>
                                In your watchlist
                            </button>
                        ) : isInHistory
                            ? (
                                <button className='watchlist-btn watched'>
                                    <i className='fa-solid fa-check watchlist-icon'></i>
                                    Already watched!
                                </button>
                            ) : (
                                <button className='watchlist-btn add' onClick={() => handleAddWatchlist()}>
                                    <i className='fa-solid fa-plus watchlist-icon'></i>
                                    Add to Watchlist
                                </button>
                            )
                    ) 
                }
                {
                    display === 'watchlist' && (
                        <button className='watchlist-btn remove' onClick={() => handleAddHistory()}> 
                            <i className='fa-solid fa-bookmark watchlist-icon'></i>
                            Mark as Watched
                        </button>
                    )
                }
                {
                    display === 'history' && (
                        <button className='watchlist-btn delete' onClick={() => handleDelete()}> 
                            <i className='fa-solid fa-trash watchlist-icon'></i>
                            Delete
                        </button>
                    )
                }
                <div className='misc-container'>
                    <i className='fa-solid fa-thumbs-up misc-icon'></i>
                    <i className='fa-solid fa-download misc-icon'></i>
                    <i className='fa-solid fa-share-nodes misc-icon'></i>
                </div>
            </div>
        </article>
    )
}
