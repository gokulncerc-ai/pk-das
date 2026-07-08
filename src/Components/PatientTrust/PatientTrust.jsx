import React from 'react'
import './PatientTrust.css'
import awards from '../../assets/Images/awards.jpg'
import healthExcellence from '../../assets/Images/healthExcellence.jpg'
import insurance from '../../assets/Images/insurance.jpg'
import teaching from '../../assets/Images/teaching.jpg'
import testimonials from '../../assets/Images/testimonials.jpg'


const PatientTrust = () => {

const trustCards = [

        {
            icon:"bi bi-shield-plus",
            title:"Healthcare Excellence",
            text:
            "We strive to maintain international standards in treatment, laboratory services and prescribing & dispensing of medicines.",
            image:healthExcellence
        },


        {
            icon:"bi bi-file-earmark-check",
            title:"Insurance & Cashless Care",
            text:
            "Guarding your health, securing your future with our wide network of insurance partners.",
            image:insurance
        },


        {
            icon:"bi bi-mortarboard-fill",
            title:"Education & Awareness",
            text:
            "Join us in fostering a healthier community through knowledge and awareness.",
            image:teaching
        },


        {
            icon:"bi bi-chat-dots",
            title:"Patient Testimonials",
            text:
            "Grateful hearts, healed lives. Hear what our patients have to say – real stories, real triumphs.",
            image:testimonials
        },


        {
            icon:"bi bi-award",
            title:"Awards & Recognition",
            text:
            "Grateful for the recognition that inspires us to continue delivering excellence in healthcare.",
            image:awards
        }

    ];

  return (
    <div>
       <section className="trust-section">


            <div className="container">


                {/* Heading */}


                <div className="trust-heading">


                    <div className="trust-small-title">

                        <span></span>

                        WHY PATIENTS TRUST PKDAS

                        <span></span>

                    </div>



                    <h2>

                        Excellence in Care. Every Step of the Way.

                    </h2>



                    <p>

                        From world-class treatment to patient support and education,
                        <br/>
                        we are committed to your health and well-being.

                    </p>


                </div>




                {/* Cards */}


                <div className="trust-grid">


                    {
                        trustCards.map((card,index)=>(


                            <div 
                                className="trust-card"
                                key={index}
                            >


                                <div className="trust-card-content">


                                    <div className="trust-icon">

                                        <i className={card.icon}></i>

                                    </div>



                                    <h3>

                                        {card.title}

                                    </h3>



                                    <p>

                                        {card.text}

                                    </p>



                                    <a href="#">

                                        View more 
                                        <i className="bi bi-arrow-right"></i>

                                    </a>


                                </div>




                                <div className="trust-image">


                                    <img 
                                        src={card.image}
                                        alt={card.title}
                                    />


                                </div>



                            </div>


                        ))
                    }


                </div>


            </div>


        </section>
    </div>
  )
}

export default PatientTrust
