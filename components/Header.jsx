import { useState } from 'react'
import watchlistLogo from '/assets/images/watchlist-logo.png'
import Burger from '/components/Burger.jsx'
import Nav from '/components/Nav.jsx'
import GitLink from '/components/GitLink.jsx'

export default function Header({display, setDisplay}) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <header>
            <section className='head'>
                <div className='logo-container'>
                    <img src={watchlistLogo} 
                         id='logo-img'
                         alt='The Watchlist Logo. '/>
                </div>
                <div className='header-icons'>
                    {/* <input type="checkbox" LIGHT / DARK SWITCH/> */}
                    <i className='fa-solid fa-bell notifications-container'>
                        <div className='notifications'>
                            <span className='dummy-notif'>2</span>
                        </div>
                    </i>
                    <i className='fa-solid fa-arrow-right-from-bracket'></i>
                </div>
                <Burger isOpened={isOpened} 
                        setIsOpened={setIsOpened}/>
            </section>
            <Nav display={display}
                 setDisplay={setDisplay}
                 extended={isOpened}
                 setExtended={setIsOpened}/>
            <GitLink />
        </header>
    )
}
