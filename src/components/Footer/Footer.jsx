import React from 'react'

export default function Footer() {
    return (
        <footer class="footer section section-lg" id="footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-wgs">
                        <div class="footer-logo footer-sd">
                            <img src="images/footer-logo.png" alt=""/>
                        </div>
                        <div class="footer-address">
                            <p><span class="footer-md">Emergency Call:</span><a href="tel:4480999225">+4480 999 225</a></p>
                            <p><span class="footer-md">Mail Us:</span><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></p>                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-wgs">
                        <div class="footer-head footer-sd">
                            <h5>Address</h5>
                        </div>
                        <div class="footer-address">
                            <p><span class="footer-md">Contact Address:</span>28 Green Tower, Street Name, New York City, USA</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-wgs">
                        <div class="footer-wgs">
                        <div class="footer-head footer-sd">
                            <h5>COVID-19 Response Fund</h5>
                        </div>
                        <div class="footer-help covid-help">
                            <h6>We need your Help</h6>
                            <p>Would You like to Help people across the world who are suffering with COVID -19?</p>
                            <a href="/#" class="btn">+ Donate Now</a>
                        </div>
                        <div class="footer-social">
                            <ul>
                                <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="/#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="/#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="/#"><i class="fab fa-youtube"></i></a></li>
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
