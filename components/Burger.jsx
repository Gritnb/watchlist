import { clsx } from "clsx"

export default function Burger({isOpened, setIsOpened}) {

    return (
        <button className='burger-btn'
                onClick={() => setIsOpened(prevState => !prevState)}>
            <i className={clsx('fa-solid fa-grip-lines burger-i',
                                isOpened && 'opened')}></i>
        </button>
    )
}
