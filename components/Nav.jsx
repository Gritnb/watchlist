import { clsx } from 'clsx'

export default function Nav({display, setDisplay, extended, setExtended}) {
    
    return (
        <nav className={clsx('nav',
                              extended && 'extended')}>
            <ul>
                <hr className='custom-split'/>
                <li className={clsx(display === 'search' && 'active')} 
                    onClick={() => {
                        setDisplay('search')
                        setExtended(false)}}>
                    <i className='fa-solid fa-magnifying-glass  nav-icon'></i>Search</li>
                <hr className='custom-split'/>

                <li className={clsx(display === 'ai' && 'active')}
                    onClick={() => {
                        setDisplay('ai')
                        setExtended(false)}}>
                    <i className='fa-solid fa-wand-sparkles  nav-icon'></i>AI Assistant
                    <span className='new-feature'>N<span className='capitals'>ew</span>!</span>
                </li>
                <hr className='custom-split'/>

                <li className={clsx(display === 'watchlist' && 'active')}
                    onClick={() => {
                        setDisplay('watchlist')
                        setExtended(false)}}>
                    <i className='fa-solid fa-list-ul nav-icon' ></i>Watchlist</li>
                <hr className='custom-split'/>

                <li className={clsx(display === 'history' && 'active')}
                    onClick={() => {
                        setDisplay('history')
                        setExtended(false)}}>
                    <i className='fa-solid fa-clock-rotate-left  nav-icon'></i>History</li>
                <hr className='custom-split'/>
            </ul>
        </nav>
    )
}
