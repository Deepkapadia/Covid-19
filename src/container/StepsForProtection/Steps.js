import React,{useEffect} from 'react'
import Aos from 'aos';

export default function Steps() {
    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);
    return (
        <section id="wash" className="wash-bg section-lg shape-d">
        <div className="container">
           <div className="row justify-content-center">
               <div className="col-lg-9 col-12">
                   <div data-aos="fade-down" className="covid-head text-center">
                        <span className="covid-top">Hand Wash Process</span>
                        <h2>Set of Rules How to Wash your Hands</h2>
                        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience</p>
                  </div>
               </div>
           </div>
           <div className="row space-y-30">
                   <div className="col-lg-12">
                       <div className="row space-y-40 justify-content-center wash-row">
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in-right" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-a.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Water and Soap</h6>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in-right" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-b.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Palm to Palm</h6>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-c.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Between Fingurs</h6>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-d.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Focus on Thumbs</h6>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-e.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Back of Hands</h6>
                                </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-sm-6 col-xl-3">
                               <div data-aos="zoom-in" className="wash-wrap text-center">
                                <div className="wash-img">
                                    <img src="images/wash-f.png" alt=""/>
                                </div>
                                <div className="wash-text">
                                    <h6>Focus on Wrists</h6>
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
