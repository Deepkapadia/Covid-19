import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row space-y-40 justify-content-center"><h1 style={{color:'#ff5d5d'}}>Loading....</h1></div></div></div></div>;
      }
    return (
        <section className="section-lg pt-lg-0 counter-wt">
        <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <div className="row space-y-40 justify-content-center">
                         <div className="col-lg-4 col-sm-6">
                             <div className="counter-single counter-single-Confirmed">
                                <span className="counter-amount"><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></span>
                                <h4 className="counter-title">Confirmed cases</h4>
                                <span className="counter-date">{new Date(lastUpdate).toDateString()}</span>
                                <p>Number of active cases of COVID-19.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-sm-6">
                             <div className="counter-single counter-single-Recovered">
                                 <span className="counter-amount"><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></span>
                                 <h4 className="counter-title">Total Recovered</h4>
                                 <span className="counter-date">{new Date(lastUpdate).toDateString()}</span>
                                 <p>Number of recoveries from COVID-19.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-sm-6">
                             <div className="counter-single counter-single-Deaths">
                                 <span className="counter-amount"><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></span>
                                 <h4 className="counter-title">Confirmed deaths</h4>
                                 <span className="counter-date">{new Date(lastUpdate).toDateString()}</span>
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