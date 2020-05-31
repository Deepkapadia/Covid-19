import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
      }
    return (
        <section class="section-lg pt-lg-0 counter-wt">
        <div class="container">
             <div class="row">
                 <div class="col-lg-12">
                     <div class="row space-y-40 justify-content-center">
                         <div class="col-lg-4 col-sm-6">
                             <div class="counter-single counter-single-Confirmed">
                                <span class="counter-amount"><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></span>
                                <h4 class="counter-title">Confirmed cases</h4>
                                <span class="counter-date">{new Date(lastUpdate).toDateString()}</span>
                                <p>Number of active cases of COVID-19.</p>
                             </div>
                         </div>
                         <div class="col-lg-4 col-sm-6">
                             <div class="counter-single counter-single-Recovered">
                                 <span class="counter-amount"><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></span>
                                 <h4 class="counter-title">Total Recovered</h4>
                                 <span class="counter-date">{new Date(lastUpdate).toDateString()}</span>
                                 <p>Number of recoveries from COVID-19.</p>
                             </div>
                         </div>
                         <div class="col-lg-4 col-sm-6">
                             <div class="counter-single counter-single-Deaths">
                                 <span class="counter-amount"><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></span>
                                 <h4 class="counter-title">Confirmed deaths</h4>
                                 <span class="counter-date">{new Date(lastUpdate).toDateString()}</span>
                                 <p>Number of deaths caused by COVID-19.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    </section>
    )
}
export default Counter;