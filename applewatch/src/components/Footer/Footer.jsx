import React from 'react';
import './footer.scss'
import Facebook from '../../assets/footer/facebook logo.svg'
import Twitter from '../../assets/footer/twitter logo.svg'
import Instagram from '../../assets/footer/Instagram logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__card">
                        <h3 className="footer__card__title">Follow Us.</h3>
                        <p className="footer__card__desc">We are always looking for new <br/> projects and collaborations. <br/>
                            Feel free to contact us.</p>
                        <div className="footer__card__icons">
                            <i className="footer__card__icon">
                                <img src={Facebook} alt="Facebook"/>
                            </i>
                            <i className="footer__card__icon">
                                <img src={Twitter} alt="Twitter"/>
                            </i>
                            <i className="footer__card__icon">
                                <img src={Instagram} alt="Instagram"/>
                            </i>
                        </div>
                    </div>
                    <div className="footer__card">
                        <h3 className="footer__card__title">Contact Us.</h3>
                        <address className="footer__card__address">One Apple Park Way <br/>
                            Cupertino, CA 95014</address>
                        <a className="footer__card__tel" href="tel:+996(555) 55-55-55">+996(555) 55-55-55</a>
                        <a className="footer__card__email" href="#">support@apple.com</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;