import React, { useEffect } from 'react'
import Aos from 'aos';


export default function Symptoms() {

    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);


    return (
        <section className="section-lg covid-bg pb-md-0" id="symptoms">
        <div className="container">
           <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                    <div data-aos="fade-down" className="covid-head text-center">
                         <span className="covid-top">COVID -19SYMPTOMS</span>
                         <h2>Coronavirus Symptoms</h2>
                         <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience</p>
                   </div>
                </div>
            </div>
            <div className="row space-y-40 align-items-center">
                <div className="col-md-5">
                    <div data-aos="fade-right" className="symptom-left">
                        <img src="images/content-e.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row space-y-40">
                        <div className="col-sm-4 col-6">
                            <div data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-a.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Dry Cough</h4>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-4 col-6">
                            <div data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-b.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Sore Throat</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6">
                            <div  data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-c.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Cold</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6">
                            <div data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-d.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Fever</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6">
                            <div data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-e.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Headache</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-6">
                            <div data-aos="zoom-in" className="symptom-wrap text-center">
                                <div className="symptom-img">
                                     <img src="images/symp-f.png" alt=""/>
                                </div>
                                <div className="symptom-text">
                                        <h4>Vomiting</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
