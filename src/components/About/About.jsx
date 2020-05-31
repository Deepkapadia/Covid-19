import React from 'react'

export default function About() {
    return (
        <section class="section-lg section shape-a" id="about">
        <div class="container">
            <div class="row space-y-40 align-items-center justify-content-between">
                <div class="col-md-5">
                    <div class="covid-about-img">
                        <img src="images/content-b.png" alt=""/>
                    </div>
                </div>
                <div class="col-md-7 col-xl-6">
                    <div class="covid-about">
                        <span class="covid-top">ABOUT COVID -19</span>
                        <div class="covid-about-text">
                            <h2>About Coronavirus (COVID-19)</h2>
                            <p><span class="text-strong">Coronavirus disease (COVID-19)</span> is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moder ate respiratory illness and recover without requiring special treatment.</p>
                            <p class="mb-md-3 mt-md-3">There are several measures you can take to protect yourself from #COVID19.</p>
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
