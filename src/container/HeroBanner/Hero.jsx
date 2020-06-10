import React from 'react'


const Hero = ({WorldTotalData :  confirmed }) => {
    
    if(!confirmed){
        return 'Loading..!!';
    }

    return (
            <div className="banner banner-wt">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-9">
                            <div className="banner-text banner-text-wt banner-border text-center">
                                <h1 data-aos="zoom-in-down" className="">Prevention from Corona Virus <span className="text-col-a">(COVID-19)</span> Stay Home, Stay Safe</h1>
                                    <h1> World wide <span className="text-col-a">" {confirmed.value} "</span>  cases </h1>
                                <div className="banner-btn">
                                    <a href="#prevention" data-aos="zoom-in-right" className="btn"><i className="las la-shield-alt"></i> Prevention</a>
                                    <a href="#about" data-aos="zoom-in-left" className="btn btn-alt"><i className="las la-sync"></i> COVID-19</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Hero;
