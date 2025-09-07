import gitLogo from '/assets/images/github-mark.svg'

export default function GitLink() {
    return (
        <section className='git-sct'>
            <p className='author'>© {new Date().getFullYear()} GCarlott</p>
            <a href='https://github.com/Gritnb/watchlist' target='_blank'>
            <img src={gitLogo}
                 alt='Github Logo'
                 className='git-logo'/>
            </a>
        </section>
    )
}
