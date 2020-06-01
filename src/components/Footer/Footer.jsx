import React,{useEffect} from 'react';
import Logo from '../../images/logo-dark.png';
import Aos from 'aos';

export default function Footer() {
    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);
    return (
        <footer data-aos="fade-up" className="footer section section-lg" id="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-wgs">
                        <div className="footer-logo footer-sd">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="footer-address">
                            <p><span className="footer-md">Emergency Call:</span><a href="tel:4480999225">+9662520605</a></p>
                            <p><span className="footer-md">Mail Us:</span><a href="mailto:kapadia.deep12@gmail.com">kapadia.deep12@gmail.com</a></p>                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-wgs">
                        <div className="footer-head footer-sd">
                            <h5>Address</h5>
                        </div>
                        <div className="footer-address">
                            <p><span className="footer-md">Contact Address:</span>India, Gujarat, Surat</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-wgs">
                        <div className="footer-wgs">
                        <div className="footer-head footer-sd">
                            <h5>COVID-19 Response Fund</h5>
                        </div>
                        <div className="footer-help covid-help">
                            <h6>We need your Help</h6>
                            <p>Would You like to Help people across the world who are suffering with COVID -19?</p>
                            
                        </div>
                        <div className="footer-social">
                            <ul>
                                <li><a href="https://www.facebook.com/deep.kapadia.927"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/deep_kapadia/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/deep-kapadia-4872a0117/"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
