import React,{useEffect} from 'react'
import Aos from 'aos';

export default function Protection() {

    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);

    return (
        <section className="section-lg pb-0">
        <div className="container">
            <div className="row space-y-40 align-items-center justify-content-between">
                <div className="col-lg-5 col-12 order-md-last">
                    <div data-aos="fade-left" className="measure-img">
                        <img src="images/content-f.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div data-aos="fade-right" className="measure-text">
                        <h2>Basic protective measures against the new coronavirus</h2>
                        <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:</p>
                        <p><span className="text-strong">Wash your hands frequently:</span> Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
                        <p><sapn className="text-strong">Maintain social distancing:</sapn> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
                        <p><span className="text-strong">Avoid touching eyes, nose and mouth:</span> Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick</p>
                        <p><span className="text-strong">Practice respiratory hygiene:</span> Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
                        <p><span className="text-strong">If you have fever, cough and difficulty breathing, seek medical care early:</span> Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>
                        <p><span className="text-strong">If you have fever, cough and difficulty breathing, seek medical care early</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
