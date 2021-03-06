import React,{useEffect} from 'react';
import Aos from 'aos';

export default function Prevention() {
    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);
    
    return (
        <section className="section-lg covid-prevention" id="prevention">
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-lg-8 col-12">
                           <div data-aos="fade-down" className="covid-head text-center">
                                <span className="covid-top">COVID -19 Prevention</span>
                                <h2>Coronavirus Prevention</h2>
                                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience</p>
                          </div>
                       </div>
                   </div>
                   <div className="row space-y-40 align-items-center justify-content-between">
                       <div className="col-md-6 col-12 order-md-last">
                           <div data-aos="fade-left" className="covid-prevention-img">
                               <img src="images/content-c.png" alt=""/>
                           </div>
                       </div>
                       <div className="col-md-5">
                           <div data-aos="fade-right" className="covid-prevention-text">
                               <h3>“There are Decades Where Nothing Happens, and There are Weeks Where Decades Happen”</h3>
                               <p>There are millions of people who got affected around the world with CORONAVIRUS or officially COVID-19. In this tragic situation, let’s support each other and spread love to families who have lost their loved ones.</p>
                               <div className="covid-prevention-list">
                                   <h4>Let’s practice:</h4>
                                   <ul>
                                       <li>Maintain social distance</li>
                                       <li>Avoid touching eyes, nose, and mouth</li>
                                       <li>Practice respiratory hygiene</li>
                                       <li>Drink more water</li>
                                       <li>Cover your face with a mask</li>
                                       <li>Stay informed and follow given advice.</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
    )
}
