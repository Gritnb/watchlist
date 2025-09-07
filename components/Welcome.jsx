export default function Welcome({text}) {
    return (
        <div className='welcome-container'>
            <i className='fa-solid fa-film welcome-icon'></i>
            <h2 className='welcome-message'>{text}</h2>
        </div>
    )
}
