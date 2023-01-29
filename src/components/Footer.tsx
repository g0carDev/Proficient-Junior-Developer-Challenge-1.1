import houseIcon from '../assets/icons/house.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import whatsappIcon from '../assets/icons/WhatsApp.svg'
import './styles/Footer.styles.css'

export const Footer = () => {
    return (
        <footer className='footer bg-orange'>
            <div className='container grid'>
                <div className='col'>
                    <img src={houseIcon} alt='House' />
                    <p className='footer__p'>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
                    <div className='socialMedia'>
                        <div className='circle'>
                            <img src={twitterIcon} alt='Twitter' />
                        </div>
                        <div className='circle'>
                            <img src={facebookIcon} alt='Facebook' />
                        </div>
                        <div className='circle'>
                            <img src={instagramIcon} alt='Instagram' />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='footer__title'>About Us</h3>
                    <div className='footer__links'>
                        <a href="#" className='footer__link'>About</a>
                        <a href="#" className='footer__link'>Privacy & Policy</a>
                        <a href="#" className='footer__link'>Terms & Conditions</a>
                        <a href="#" className='footer__link'>Faq</a>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='footer__title'>Navigate</h3>
                    <div className='footer__links'>
                        <a href="#" className='footer__link'>How We Work</a>
                        <a href="#" className='footer__link'>Services</a>
                        <a href="#" className='footer__link'>Faq</a>
                        <a href="#" className='footer__link'>Contact</a>
                        <a href="#" className='footer__link'>Free Quote</a>
                    </div>
                </div>
                <div className='col'>
                    <h3 className='footer__title'>Navigate</h3>
                    <div className='footer__links'>
                        <a href="#" className='footer__link'>Ricardo Margain 444</a>
                        <a href="#" className='footer__link'>Call: +52 81 1234 5678</a>
                        <a href="#" className='footer__link'>Email: info@challenge.com</a>
                    </div>
                    <img src={whatsappIcon} alt='WhatsApp' style={{ cursor: 'pointer' }}/>
                </div>
            </div>
        </footer>
    )
}
