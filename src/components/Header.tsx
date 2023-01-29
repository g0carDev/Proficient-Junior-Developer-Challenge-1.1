import houseIcon from '../assets/icons/house.svg'
import './styles/Header.styles.css'

export const Header = () => {
    return (
        <header className='bg-orange'>
            <div className='container header'>
                <img src={houseIcon} alt='House' />
                <nav className='nav'>
                    <a href="#" className='nav__link'>How We Work</a>
                    <a href="#" className='nav__link'>Services</a>
                    <a href="#" className='nav__link'>Free Quote</a>
                    <a href="#" className='nav__link'>Contact</a>
                </nav>
            </div>
        </header>
    )
}
