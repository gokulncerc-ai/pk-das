import React from 'react'
import "./HealthCare.css"
import consultingDoctor from "../../assets/Images/consultingDoctor.png"

const HealthCare = () => {

    const features = [

        {
            icon: "bi bi-heart-pulse",
            title: "Compassionate Care",
            text: "Patient-first approach with empathy and respect"
        },


        {
            icon: "bi bi-cpu",
            title: "Advanced Technology",
            text: "Modern infrastructure for accurate diagnosis & treatment"
        },


        {
            icon: "bi bi-shield-check",
            title: "Safe & Reliable",
            text: "International standards of safety and hygiene"
        },


        {
            icon: "bi bi-people",
            title: "Care for Every Age",
            text: "Specialized care for all stages of life"
        }

    ];

    return (
        <div>
            <section className="healthcare-section">


                <div className="container">


                    <div className="healthcare-wrapper">



                        {/* LEFT CONTENT */}

                        <div className="healthcare-content">


                            <div className="healthcare-badge">

                                <i className="bi bi-shield-check"></i>

                                Trusted Care. Healthier Tomorrow.

                            </div>




                            <h2>

                                Time Can’t Be Resisted,
                                <br />

                                But
                                 <span>
                                     Aging
                                 </span>
                                Can Be Managed

                            </h2>




                            <h4>

                                Committed to Trusted Healthcare Excellence.

                            </h4>



                            <p>

                                We provide advanced medical care,
                                preventive health solutions and compassionate
                                treatment for every stage of life.

                            </p>





                            {/* Buttons */}


                            <div className="healthcare-buttons">


                                <button className="healthcare-primary-btn">

                                    <i className="bi bi-calendar-check"></i>

                                    APPOINTMENT

                                </button>



                                <button className="healthcare-secondary-btn">

                                    <i className="bi bi-play-circle"></i>

                                    SEE HOW WE CAN HELP

                                </button>


                            </div>




                            {/* Contact Box */}


                            <div className="healthcare-contact">


                                <div>

                                    <i className="bi bi-telephone"></i>


                                    <div>

                                        <small>
                                            Get Your Quote or Call:
                                        </small>


                                        <strong>
                                            04662344500
                                        </strong>

                                    </div>


                                </div>



                                <div>

                                    <i className="bi bi-whatsapp"></i>


                                    <div>

                                        <small>
                                            WhatsApp
                                        </small>


                                        <strong>
                                            8089989932
                                        </strong>


                                    </div>


                                </div>



                            </div>



                        </div>






                        {/* RIGHT IMAGE */}


                        <div className="healthcare-image-wrapper">


                            <img
                                src={consultingDoctor}
                                alt="Healthcare"
                                className="healthcare-main-image"
                            />




                            {/* Floating Cards */}


                            <div className="healthcare-floating-card card-one">

                                <i className="bi bi-person-check"></i>

                                <div>

                                    <small>
                                        Expert
                                    </small>

                                    <b>
                                        Doctors
                                    </b>

                                </div>

                            </div>



                            <div className="healthcare-floating-card card-two">

                                <i className="bi bi-building"></i>

                                <div>

                                    <small>
                                        35+
                                    </small>

                                    <b>
                                        Specialities
                                    </b>

                                </div>

                            </div>




                            <div className="healthcare-floating-card card-three">

                                <i className="bi bi-shield-check"></i>

                                <div>

                                    <small>
                                        Trusted
                                    </small>

                                    <b>
                                        Healthcare
                                    </b>

                                </div>

                            </div>




                            <div className="healthcare-floating-card card-four">

                                <i className="bi bi-alarm"></i>

                                <div>

                                    <small>
                                        24×7
                                    </small>

                                    <b>
                                        Emergency Care
                                    </b>

                                </div>

                            </div>



                        </div>


                    </div>





                    {/* FEATURES */}


                    <div className="healthcare-features">


                        {
                            features.map((item, index) => (


                                <div
                                    className="healthcare-feature"
                                    key={index}
                                >

                                    <div className="healthcare-feature-icon">

                                        <i className={item.icon}></i>

                                    </div>


                                    <div>

                                        <h5>
                                            {item.title}
                                        </h5>

                                        <p>
                                            {item.text}
                                        </p>

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

export default HealthCare
