import React from "react";
import "./Homepage.css";
// import { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import wideangle from "../../assets/Images/wideangle.jpeg";
import PatientTrust from "../../Components/PatientTrust/PatientTrust";
import HealthCare from "../../Components/HealthCare/HealthCare";
import Network from "../../Components/Network/Network";


const Homepage = () => {

    // const networkRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //             }
    //         },
    //         {
    //             threshold: 0.2,
    //         }
    //     );

    //     if (networkRef.current) {
    //         observer.observe(networkRef.current);
    //     }

    //     return () => observer.disconnect();
    // }, []);

    return (

        <div>

            <Header />

            {/*---------------- Hero Section starts ------------------ */}
            <section
                className="hero"
                style={{
                    backgroundImage: `url(${wideangle})`
                }}
            >


                {/* Overlay */}

                <div className="hero-overlay"></div>



                <div className="container hero-container">


                    <div className="hero-content">


                        {/* Add your heading later */}

                        {/* 
                        <h1>
                            Your Health Is
                            <br/>
                            Our Priority
                        </h1>


                        <p>
                            Providing world-class healthcare services with
                            advanced technology and compassionate care.
                        </p>
                        */}



                    </div>



                    {/* Bottom Buttons */}

                    <div className="hero-buttons">


                        <button className="hero-appointment-btn">
                            Book Appointment
                        </button>



                        <button className="hero-call-btn">
                            <i className="bi bi-telephone-fill"></i>
                            Make a Call
                        </button>


                    </div>



                </div>


            </section>

            {/* ----------Hero Section Ends------------- */}

            {/* Patient Trust + Healthcare Stack */}

            <div className="section-stack">

                <div className="patient-sticky">

                    <PatientTrust />

                </div>

                <div className="healthcare-flow">

                    <HealthCare />

                </div>


            </div>




            {/* <div
                ref={networkRef}
                className={`network-animation ${isVisible ? "show" : ""}`}
            > */}
                <Network />
            {/* </div> */}





        </div>

    );
};


export default Homepage;