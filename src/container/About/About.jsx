import React, { useEffect } from 'react';
import Aos from 'aos';

export default function About() {

    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);

    return (
        <section className="section-lg section shape-a" id="about">
        <div className="container">
            <div className="row space-y-40 align-items-center justify-content-between">
                <div className="col-md-5">
                    <div data-aos="fade-right" className="covid-about-img">
                        <img src="images/content-b.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6">
                    <div data-aos="fade-left" className="covid-about">
                        <span className="covid-top">ABOUT COVID -19</span>
                        <div className="covid-about-text">
                            <h2>About Coronavirus (COVID-19)</h2>
                            <p><span className="text-strong">Coronavirus disease (COVID-19)</span> is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moder ate respiratory illness and recover without requiring special treatment.</p>
                            <p className="mb-md-3 mt-md-3">There are several measures you can take to protect yourself from #COVID19.</p>
                            <ul>
                                <li>- Wash your hand properly for 20 seconds,</li>
                                <li>- Do not touch your face,</li>
                                <li>- Wear mask,</li>
                                <li>- Avoid Social gatherings,</li>
                                <li>- Rubbing your hand with an alcohol-based sanitizer,</li>
                                <li>- Avoid shaking hands to help protect yourself and others from</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
