import React from 'react'
import "./AboutPkDas.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Cta from '../../Components/Cta-Buttons/Cta'
import { Container, Row, Col } from "react-bootstrap";
// ----------Images-----------
import wideangle from "../../assets/Images/wideangle.webp"
import generaldepartment from "../../assets/Images/generaldepartment.webp"


const AboutPkDas = () => {
    return (
        <>
            {/* ----------Header---------- */}
            {/* <div><Header /></div> */}
            {/* --------CTA Buttons------------ */}
            {/* <Cta /> */}
            {/*------------About Content Starts ----------------*/}
            {/* ===========================
                HERO SECTION
            =========================== */}

            <section className="about-hero">

                <Container>

                    <Row className="align-items-center">

                        {/* Left Content */}

                        <Col lg={6}>

                            <div className="about-hero-content">

                                <div className="breadcrumb-box">

                                    <span>Home</span>

                                    <i className="bi bi-chevron-right"></i>

                                    <span className="active-page">
                                        About Us
                                    </span>

                                </div>


                                <span className="hero-tag">

                                    ABOUT PK DIMS

                                </span>


                                <h1>

                                    Compassionate Healthcare
                                    <br />
                                    Backed by Innovation

                                </h1>


                                <p>

                                    PK DAS Institute of Medical Sciences is one
                                    of Kerala's leading super speciality hospitals,
                                    delivering exceptional healthcare with modern
                                    technology, experienced specialists and a
                                    patient-first approach.

                                </p>


                                {/* <div className="hero-buttons">

                                    <button className="primary-btn">

                                        Book Appointment

                                        <i className="bi bi-arrow-right"></i>

                                    </button>


                                    <button className="secondary-btn">

                                        Explore Hospital

                                    </button>

                                </div> */}

                            </div>

                        </Col>


                        {/* Right Image */}

                        <Col lg={6}>

                            <div className="about-hero-image">

                                <img
                                    src={wideangle}
                                    alt="PK DIMS Hospital"
                                    loading='eager'
                                />



                                <div className="floating-card">

                                    <div className="floating-icon">

                                        <i className="bi bi-heart-pulse-fill"></i>

                                    </div>

                                    <div>

                                        <h5>

                                            Trusted Healthcare

                                        </h5>

                                        <p>

                                            Advanced Medical Care with
                                            Compassion & Excellence

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* ==========================================
                             WHO WE ARE SECTION
               ========================================== */}

            <section className="about-intro">

                <Container>

                    <Row className="align-items-center gy-5">

                        {/* Left Image */}

                        <Col lg={6}>

                            <div className="about-intro-image">

                                <img
                                    src={generaldepartment}
                                    alt="PK DIMS Hospital"
                                />

                                {/* Experience Card */}

                                <div className="experience-card">

                                    <h2>25+</h2>

                                    <span>
                                        Years of Excellence
                                    </span>

                                </div>

                            </div>

                        </Col>


                        {/* Right Content */}

                        <Col lg={6}>

                            <div className="about-intro-content">

                                <span className="section-tag">

                                    WHO WE ARE

                                </span>


                                <h2>

                                    Excellence In Healthcare
                                    With Compassion

                                </h2>


                                <p>

                                    PK DAS Institute of Medical Sciences is a leading
                                    super-speciality hospital situated in the heart of
                                    Ottapalam, Kerala. Our mission is to provide
                                    affordable, accessible and world-class healthcare
                                    through advanced technology, experienced medical
                                    professionals and patient-centred care.

                                </p>


                                <p>

                                    With modern infrastructure, highly qualified doctors
                                    and state-of-the-art diagnostic facilities, we ensure
                                    that every patient receives the highest standard of
                                    treatment in a comfortable and caring environment.

                                </p>


                                {/* Features */}

                                <Row className="g-3 feature-list">

                                    <Col md={6}>

                                        <div className="feature-item">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Multi-Speciality Hospital

                                            </span>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="feature-item">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Expert Doctors

                                            </span>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="feature-item">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                Advanced Technology

                                            </span>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="feature-item">

                                            <i className="bi bi-check-circle-fill"></i>

                                            <span>

                                                24×7 Emergency Care

                                            </span>

                                        </div>

                                    </Col>

                                </Row>


                                {/* <button className="about-btn">

                                    Discover More

                                    <i className="bi bi-arrow-right"></i>

                                </button> */}

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* ==========================================
                          HOSPITAL HIGHLIGHTS
              ========================================== */}

            <section className="hospital-highlights">

                <Container>

                    {/* Section Heading */}

                    <div className="section-heading text-center">

                        <span className="section-tag">

                            WHY CHOOSE US

                        </span>

                        <h2>

                            Healthcare Designed Around You

                        </h2>

                        <p>

                            Combining compassionate care, advanced technology, and experienced
                            professionals to deliver exceptional healthcare services.

                        </p>

                    </div>


                    <Row className="g-4 mt-2">

                        {/* Card 1 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-calendar-check-fill"></i>

                                </div>

                                <h4>

                                    Online Appointment

                                </h4>

                                <p>

                                    Schedule appointments quickly and conveniently from
                                    anywhere with our easy online booking system.

                                </p>

                            </div>

                        </Col>


                        {/* Card 2 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-geo-alt-fill"></i>

                                </div>

                                <h4>

                                    Easy Accessibility

                                </h4>

                                <p>

                                    Conveniently located with modern facilities and easy
                                    access for patients across Kerala.

                                </p>

                            </div>

                        </Col>


                        {/* Card 3 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-graph-up-arrow"></i>

                                </div>

                                <h4>

                                    Continuous Innovation

                                </h4>

                                <p>

                                    We continuously enhance our medical services by adopting
                                    the latest healthcare technologies and practices.

                                </p>

                            </div>

                        </Col>


                        {/* Card 4 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-heart-pulse-fill"></i>

                                </div>

                                <h4>

                                    Patient-Centred Care

                                </h4>

                                <p>

                                    Every treatment plan is carefully designed around the
                                    individual needs of each patient.

                                </p>

                            </div>

                        </Col>


                        {/* Card 5 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-hospital-fill"></i>

                                </div>

                                <h4>

                                    Modern Infrastructure

                                </h4>

                                <p>

                                    Our hospital features world-class infrastructure,
                                    advanced operation theatres and diagnostic facilities.

                                </p>

                            </div>

                        </Col>


                        {/* Card 6 */}

                        <Col lg={4} md={6}>

                            <div className="highlight-card">

                                <div className="highlight-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h4>

                                    Quality & Safety

                                </h4>

                                <p>

                                    We follow internationally accepted safety standards to
                                    provide reliable and high-quality healthcare.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

            {/* ==========================================
                         HOSPITAL STATISTICS
              ========================================== */}

            <section className="hospital-stats">

                <Container>

                    <div className="stats-wrapper">

                        <Row className="align-items-center">

                            {/* Left Content */}

                            <Col lg={5}>

                                <div className="stats-content">

                                    <span className="section-tag">

                                        OUR ACHIEVEMENTS

                                    </span>

                                    <h2>

                                        Delivering Trusted Healthcare
                                        Every Single Day

                                    </h2>

                                    <p>

                                        With years of excellence, highly experienced doctors,
                                        advanced medical technology, and a patient-first
                                        approach, PK DAS Institute of Medical Sciences
                                        continues to be one of Kerala's most trusted
                                        healthcare destinations.

                                    </p>

                                </div>

                            </Col>


                            {/* Right Statistics */}

                            <Col lg={7}>

                                <Row className="g-4">

                                    <Col md={6}>

                                        <div className="stats-card">

                                            <div className="stats-icon">

                                                <i className="bi bi-calendar2-check-fill"></i>

                                            </div>

                                            <h3 className='text-light'>

                                                25+

                                            </h3>

                                            <p>

                                                Years of Excellence

                                            </p>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="stats-card">

                                            <div className="stats-icon">

                                                <i className="bi bi-person-heart"></i>

                                            </div>

                                            <h3 className='text-light'>

                                                250+

                                            </h3>

                                            <p>

                                                Experienced Doctors

                                            </p>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="stats-card">

                                            <div className="stats-icon">

                                                <i className="bi bi-hospital-fill"></i>

                                            </div>

                                            <h3 className='text-light'>

                                                30+

                                            </h3>

                                            <p>

                                                Medical Departments

                                            </p>

                                        </div>

                                    </Col>


                                    <Col md={6}>

                                        <div className="stats-card">

                                            <div className="stats-icon">

                                                <i className="bi bi-heart-pulse-fill"></i>

                                            </div>

                                            <h3 className='text-light'>

                                                5 Lakh+

                                            </h3>

                                            <p>

                                                Happy Patients

                                            </p>

                                        </div>

                                    </Col>

                                </Row>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>

            {/* ==========================================
                       OUR MEDICAL EXPERTS
           ========================================== */}

            <section className="medical-team">

                <Container>

                    {/* Section Heading */}

                    <div className="section-heading text-center">

                        <span className="section-tag">

                            OUR TEAM

                        </span>

                        <h2>

                            Meet Our Medical Experts

                        </h2>

                        <p>

                            Our experienced doctors combine clinical excellence with
                            compassionate care, ensuring every patient receives the
                            highest standard of treatment.

                        </p>

                    </div>



                    <Row className="g-4 mt-3">

                        {/* Doctor 1 */}

                        <Col lg={3} md={6}>

                            <div className="doctor-card">

                                <div className="doctor-image">

                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                                        alt="Doctor"
                                    />

                                    <span className="doctor-department">

                                        General Medicine

                                    </span>

                                </div>


                                <div className="doctor-content">

                                    <h4>

                                        Dr. Vinod V S

                                    </h4>

                                    <p>

                                        Senior Consultant

                                    </p>

                                    <div className="doctor-experience">

                                        <i className="bi bi-award-fill"></i>

                                        <span>

                                            18+ Years Experience

                                        </span>

                                    </div>


                                    <div className="doctor-social">

                                        <a href="#">

                                            <i className="bi bi-facebook"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-linkedin"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-envelope-fill"></i>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/* Doctor 2 */}

                        <Col lg={3} md={6}>

                            <div className="doctor-card">

                                <div className="doctor-image">

                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                                        alt="Doctor"
                                    />

                                    <span className="doctor-department">

                                        Cardiology

                                    </span>

                                </div>


                                <div className="doctor-content">

                                    <h4>

                                        Dr. Riyas C

                                    </h4>

                                    <p>

                                        Consultant Physician

                                    </p>

                                    <div className="doctor-experience">

                                        <i className="bi bi-award-fill"></i>

                                        <span>

                                            15+ Years Experience

                                        </span>

                                    </div>


                                    <div className="doctor-social">

                                        <a href="#">

                                            <i className="bi bi-facebook"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-linkedin"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-envelope-fill"></i>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/* Doctor 3 */}

                        <Col lg={3} md={6}>

                            <div className="doctor-card">

                                <div className="doctor-image">

                                    <img
                                        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
                                        alt="Doctor"
                                    />

                                    <span className="doctor-department">

                                        Neurology

                                    </span>

                                </div>


                                <div className="doctor-content">

                                    <h4>

                                        Dr. Sneha Nair

                                    </h4>

                                    <p>

                                        Consultant Neurologist

                                    </p>

                                    <div className="doctor-experience">

                                        <i className="bi bi-award-fill"></i>

                                        <span>

                                            12+ Years Experience

                                        </span>

                                    </div>


                                    <div className="doctor-social">

                                        <a href="#">

                                            <i className="bi bi-facebook"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-linkedin"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-envelope-fill"></i>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/* Doctor 4 */}

                        <Col lg={3} md={6}>

                            <div className="doctor-card">

                                <div className="doctor-image">

                                    <img
                                        src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f"
                                        alt="Doctor"
                                    />

                                    <span className="doctor-department">

                                        Orthopaedics

                                    </span>

                                </div>


                                <div className="doctor-content">

                                    <h4>

                                        Dr. Anoop Kumar

                                    </h4>

                                    <p>

                                        Orthopaedic Surgeon

                                    </p>

                                    <div className="doctor-experience">

                                        <i className="bi bi-award-fill"></i>

                                        <span>

                                            20+ Years Experience

                                        </span>

                                    </div>


                                    <div className="doctor-social">

                                        <a href="#">

                                            <i className="bi bi-facebook"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-linkedin"></i>

                                        </a>

                                        <a href="#">

                                            <i className="bi bi-envelope-fill"></i>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>



                    {/* Button */}

                    <div className="team-btn text-center">

                        <button className="about-btn">

                            View All Doctors

                            <i className="bi bi-arrow-right"></i>

                        </button>

                    </div>

                </Container>

            </section>
            {/* ==========================================
                     WHY CHOOSE PK DIMS
             ========================================== */}

            <section className="why-choose">

                <Container>

                    <Row className="align-items-center g-5">

                        {/* Left Image */}

                        <Col lg={6}>

                            <div className="why-image">

                                <img
                                    src={generaldepartment}
                                    alt="Why Choose PK DIMS"
                                />

                                <div className="quality-badge">

                                    <i className="bi bi-patch-check-fill"></i>

                                    <div>

                                        <h5>Trusted Healthcare</h5>

                                        <span>Quality Treatment Since 2000</span>

                                    </div>

                                </div>

                            </div>

                        </Col>



                        {/* Right Content */}

                        <Col lg={6}>

                            <div className="why-content">

                                <span className="section-tag">

                                    WHY CHOOSE US

                                </span>

                                <h2>

                                    Healthcare Built Around
                                    Trust & Excellence

                                </h2>

                                <p>

                                    At PK DAS Institute of Medical Sciences, we combine
                                    advanced medical technology, experienced healthcare
                                    professionals and compassionate patient care to
                                    deliver exceptional treatment for every individual.

                                </p>



                                <Row className="g-4 mt-2">

                                    <Col sm={6}>

                                        <div className="choose-card">

                                            <div className="choose-icon">

                                                <i className="bi bi-heart-pulse-fill"></i>

                                            </div>

                                            <div>

                                                <h5>

                                                    Patient First

                                                </h5>

                                                <p>

                                                    Personalized healthcare
                                                    with compassion.

                                                </p>

                                            </div>

                                        </div>

                                    </Col>



                                    <Col sm={6}>

                                        <div className="choose-card">

                                            <div className="choose-icon">

                                                <i className="bi bi-cpu-fill"></i>

                                            </div>

                                            <div>

                                                <h5>

                                                    Modern Technology

                                                </h5>

                                                <p>

                                                    Advanced diagnostic and
                                                    treatment facilities.

                                                </p>

                                            </div>

                                        </div>

                                    </Col>



                                    <Col sm={6}>

                                        <div className="choose-card">

                                            <div className="choose-icon">

                                                <i className="bi bi-person-check-fill"></i>

                                            </div>

                                            <div>

                                                <h5>

                                                    Expert Specialists

                                                </h5>

                                                <p>

                                                    Highly qualified doctors
                                                    across all specialties.

                                                </p>

                                            </div>

                                        </div>

                                    </Col>



                                    <Col sm={6}>

                                        <div className="choose-card">

                                            <div className="choose-icon">

                                                <i className="bi bi-shield-check"></i>

                                            </div>

                                            <div>

                                                <h5>

                                                    Safe Environment

                                                </h5>

                                                <p>

                                                    International healthcare
                                                    safety standards.

                                                </p>

                                            </div>

                                        </div>

                                    </Col>

                                </Row>



                                <button className="about-btn mt-4">

                                    Learn More

                                    <i className="bi bi-arrow-right"></i>

                                </button>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================
        MISSION & VISION
========================================== */}

            <section className="mission-vision">

                <Container>

                    <div className="section-heading text-center">

                        <span className="section-tag">

                            OUR PURPOSE

                        </span>

                        <h2>

                            Driven By Purpose, Guided By Vision

                        </h2>

                        <p>

                            Every step we take is focused on providing compassionate,
                            innovative and world-class healthcare for every patient.

                        </p>

                    </div>



                    <Row className="g-4 mt-3">

                        {/* Mission */}

                        <Col lg={6}>

                            <div className="mission-card">

                                <div className="mission-icon">

                                    <i className="bi bi-bullseye"></i>

                                </div>

                                <h3>

                                    Our Mission

                                </h3>

                                <p>

                                    Our hospital is committed to treating every patient
                                    with compassion, dignity and respect while
                                    continuously improving the quality of healthcare
                                    services through innovation, education and research.

                                </p>

                                <ul className="check-list">

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Compassionate Patient Care

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Advanced Medical Technology

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Research & Academic Excellence

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Skilled Healthcare Professionals

                                    </li>

                                </ul>

                            </div>

                        </Col>



                        {/* Vision */}

                        <Col lg={6}>

                            <div className="vision-cards">

                                <div className="vision-icon">

                                    <i className="bi bi-eye-fill"></i>

                                </div>

                                <h3 className='text-light'>

                                    Our Vision

                                </h3>

                                <p>

                                    To become one of India's most trusted healthcare
                                    institutions by setting new standards in
                                    patient-centred care, medical innovation and
                                    community well-being.

                                </p>

                                <ul className="check-list">

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        World-Class Healthcare

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Innovative Treatments

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Inclusive Patient Care

                                    </li>

                                    <li>

                                        <i className="bi bi-check-circle-fill"></i>

                                        Community Wellness

                                    </li>

                                </ul>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================
        OUR CORE VALUES
========================================== */}

            <section className="core-values">

                <Container>

                    {/* Section Heading */}

                    <div className="section-heading text-center">

                        <span className="section-tag">

                            OUR VALUES

                        </span>

                        <h2>

                            The Values That Define Us

                        </h2>

                        <p>

                            Every member of our healthcare family is guided by these
                            principles to provide exceptional care, build trust and
                            improve the lives of our patients every day.

                        </p>

                    </div>



                    <Row className="g-4 mt-3">

                        {/* Value 1 */}

                        <Col lg={3} md={6}>

                            <div className="value-card">

                                <div className="value-icon">

                                    <i className="bi bi-heart-fill"></i>

                                </div>

                                <h4>

                                    Compassion

                                </h4>

                                <p>

                                    Caring for every patient with kindness,
                                    empathy and respect.

                                </p>

                            </div>

                        </Col>



                        {/* Value 2 */}

                        <Col lg={3} md={6}>

                            <div className="value-card">

                                <div className="value-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                                <h4>

                                    Integrity

                                </h4>

                                <p>

                                    Honest, transparent and ethical healthcare
                                    in every interaction.

                                </p>

                            </div>

                        </Col>



                        {/* Value 3 */}

                        <Col lg={3} md={6}>

                            <div className="value-card">

                                <div className="value-icon">

                                    <i className="bi bi-lightbulb-fill"></i>

                                </div>

                                <h4>

                                    Innovation

                                </h4>

                                <p>

                                    Adopting modern medical technology and
                                    continuous improvement.

                                </p>

                            </div>

                        </Col>



                        {/* Value 4 */}

                        <Col lg={3} md={6}>

                            <div className="value-card">

                                <div className="value-icon">

                                    <i className="bi bi-people-fill"></i>

                                </div>

                                <h4>

                                    Teamwork

                                </h4>

                                <p>

                                    Working together to achieve the best
                                    possible patient outcomes.

                                </p>

                            </div>

                        </Col>

                    </Row>



                    {/* Bottom Banner */}

                    <div className="values-banner">

                        <Row className="align-items-center">

                            <Col lg={8}>

                                <h3 className='text-light'>

                                    Together We Create Healthier Communities

                                </h3>

                                <p>

                                    Our commitment extends beyond treating illnesses.
                                    We strive to educate, support and inspire healthier
                                    lifestyles while building lasting relationships
                                    with our community.

                                </p>

                            </Col>

                            <Col lg={4} className="text-lg-end">

                                <button className="about-btn">

                                    Learn More

                                    <i className="bi bi-arrow-right"></i>

                                </button>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>
            {/* <div><Footer /></div> */}






        </>
    )
}

export default AboutPkDas
