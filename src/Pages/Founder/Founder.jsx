import React from 'react'
import "./Founder.css"
import Header from '../../Components/Header/Header'
import { Container, Row, Col, Badge } from "react-bootstrap";
import founderimg from "../../assets/Images/founderimg.png"
import founder1 from "../../assets/Images/founder1.webp"
import founder2 from "../../assets/Images/founder2.webp"


const Founder = () => {
    return (
        <>
            {/* ==========================================================
            HERO SECTION
        ========================================================== */}

            <section className="founder-hero">

                <div className="founder-overlay"></div>

                <Container>

                    <Row className="align-items-center gy-5">

                        {/* ==========================
                        LEFT CONTENT
                    ========================== */}

                        <Col lg={6}>

                            <div className="founder-content">

                                <Badge className="founder-badge">

                                    <i className="bi bi-award-fill"></i>

                                    Our Founder

                                </Badge>

                                <h1>

                                    Late Sri.
                                    <span> P. K. Das</span>

                                </h1>

                                <h4>

                                    The Visionary Behind A Legacy
                                    of Educational Excellence

                                </h4>

                                <p>

                                    A distinguished academician, philanthropist,
                                    institution builder and visionary leader whose
                                    unwavering commitment transformed higher education
                                    across Kerala and Tamil Nadu.

                                </p>

                                <div className="founder-quote">

                                    <i className="bi bi-quote"></i>

                                    <p>

                                        True leadership is measured not by what one
                                        builds for oneself, but by what one leaves
                                        behind for generations.

                                    </p>

                                </div>

                                <div className="founder-scroll">

                                    <span>

                                        Explore His Journey

                                    </span>

                                    <i className="bi bi-arrow-down-circle-fill"></i>

                                </div>

                            </div>

                        </Col>

                        {/* ==========================
                        RIGHT IMAGE
                    ========================== */}

                        <Col lg={6}>

                            <div className="founder-image-wrapper">

                                <div className="image-background-circle circle-one"></div>

                                <div className="image-background-circle circle-two"></div>

                                <img
                                    src={founderimg}
                                    alt="Late Sri. P. K. Das"
                                    className="img-fluid founder-image"
                                />

                                {/* <div className="founder-floating-card">

                                    <div className="floating-icon">

                                        <i className="bi bi-mortarboard-fill"></i>

                                    </div>

                                    <h3>

                                        1968

                                    </h3>

                                    <span>

                                        Beginning of an Extraordinary Legacy

                                    </span>

                                </div> */}

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
    BIOGRAPHY SECTION
========================================================== */}

            <section className="founder-biography">

                <Container>

                    <Row className="align-items-center gy-5">

                        {/* ======================================
                LEFT CONTENT
            ====================================== */}

                        <Col lg={7}>

                            <div className="section-subtitle">

                                The Visionary Leader

                            </div>

                            <div className="section-heading">

                                <h2>

                                    A Legacy Built Through
                                    <span> Vision, Dedication & Excellence</span>

                                </h2>

                            </div>

                            <div className="biography-content">

                                <p>

                                    Whenever the name <strong>Nehru College</strong> is
                                    mentioned, the name of its Founder Chairman,
                                    <strong> Late Sri. P. K. Das</strong>, immediately comes
                                    to mind. His remarkable vision transformed higher
                                    education and established institutions that continue to
                                    inspire generations across Kerala and Tamil Nadu.

                                </p>

                                <p>

                                    Beginning his journey with humble resources in
                                    <strong> 1968</strong>, he devoted his life to creating
                                    world-class educational institutions that became symbols
                                    of quality, discipline, innovation and academic
                                    excellence.

                                </p>

                                <p>

                                    Through unwavering determination, relentless hard work,
                                    and an uncompromising commitment to excellence, he built
                                    an educational empire that today continues to shape the
                                    future of thousands of students.

                                </p>

                            </div>

                        </Col>

                        {/* ======================================
                RIGHT HIGHLIGHTS
            ====================================== */}

                        <Col lg={5}>

                            <div className="founder-highlight-wrapper">

                                {/* Card 1 */}

                                <div className="founder-highlight-card">

                                    <div className="highlight-icon">

                                        <i className="bi bi-building-fill"></i>

                                    </div>

                                    <div>

                                        <h4>

                                            Institution Builder

                                        </h4>

                                        <p>

                                            Established prestigious educational institutions
                                            across Kerala and Tamil Nadu.

                                        </p>

                                    </div>

                                </div>

                                {/* Card 2 */}

                                <div className="founder-highlight-card">

                                    <div className="highlight-icon">

                                        <i className="bi bi-lightbulb-fill"></i>

                                    </div>

                                    <div>

                                        <h4>

                                            Visionary Leader

                                        </h4>

                                        <p>

                                            Inspired generations through innovation,
                                            leadership and a commitment to educational
                                            excellence.

                                        </p>

                                    </div>

                                </div>

                                {/* Card 3 */}

                                <div className="founder-highlight-card">

                                    <div className="highlight-icon">

                                        <i className="bi bi-heart-pulse-fill"></i>

                                    </div>

                                    <div>

                                        <h4>

                                            Healthcare Pioneer

                                        </h4>

                                        <p>

                                            Founded P. K. Das Institute of Medical Sciences
                                            with the vision of providing world-class
                                            healthcare services.

                                        </p>

                                    </div>

                                </div>

                                {/* Card 4 */}

                                <div className="founder-highlight-card">

                                    <div className="highlight-icon">

                                        <i className="bi bi-award-fill"></i>

                                    </div>

                                    <div>

                                        <h4>

                                            Legacy of Excellence

                                        </h4>

                                        <p>

                                            His dedication continues to inspire students,
                                            educators and healthcare professionals across
                                            South India.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
    FOUNDER JOURNEY TIMELINE
========================================================== */}

            <section className="founder-timeline">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="section-heading text-center">

                                <span className="section-subtitle">

                                    His Remarkable Journey

                                </span>

                                <h2>

                                    Milestones That Built
                                    <span> A Lasting Legacy</span>

                                </h2>

                                <p className="section-description">

                                    From humble beginnings to establishing one of South
                                    India's most respected educational groups, every
                                    milestone reflects the determination, vision and
                                    commitment of Late Sri. P. K. Das.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    <div className="timeline-wrapper">

                        {/* =========================
                TIMELINE ITEM
            ========================== */}

                        <div className="timeline-item">

                            <div className="timeline-icon">

                                <i className="bi bi-flag-fill"></i>

                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">

                                    1968

                                </span>

                                <h3>

                                    The Beginning

                                </h3>

                                <p>

                                    Founded the first educational institution with a vision
                                    to provide quality higher education and create
                                    opportunities for future generations.

                                </p>

                            </div>

                        </div>

                        {/* ========================= */}

                        <div className="timeline-item">

                            <div className="timeline-icon">

                                <i className="bi bi-airplane-fill"></i>

                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">

                                    First Milestone

                                </span>

                                <h3>

                                    Aeronautics & Applied Sciences

                                </h3>

                                <p>

                                    Established Nehru College of Aeronautics and Applied
                                    Sciences, introducing one of India's most respected
                                    aviation education institutions.

                                </p>

                            </div>

                        </div>

                        {/* ========================= */}

                        <div className="timeline-item">

                            <div className="timeline-icon">

                                <i className="bi bi-mortarboard-fill"></i>

                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">

                                    Expansion

                                </span>

                                <h3>

                                    Building Institutions

                                </h3>

                                <p>

                                    Expanded the educational network with engineering,
                                    pharmacy, arts & science, architecture, aviation and
                                    management institutions across Kerala and Tamil Nadu.

                                </p>

                            </div>

                        </div>

                        {/* ========================= */}

                        <div className="timeline-item">

                            <div className="timeline-icon">

                                <i className="bi bi-hospital-fill"></i>

                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">

                                    Healthcare Vision

                                </span>

                                <h3>

                                    P. K. Das Institute of Medical Sciences

                                </h3>

                                <p>

                                    Established a state-of-the-art super specialty hospital
                                    to provide world-class healthcare services and fulfill
                                    his dream of medical excellence.

                                </p>

                            </div>

                        </div>

                        {/* ========================= */}

                        <div className="timeline-item">

                            <div className="timeline-icon">

                                <i className="bi bi-stars"></i>

                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">

                                    Today

                                </span>

                                <h3>

                                    An Everlasting Legacy

                                </h3>

                                <p>

                                    His vision continues through the Nehru Group of
                                    Institutions, inspiring thousands of students,
                                    educators and healthcare professionals every year.

                                </p>

                            </div>

                        </div>

                    </div>

                </Container>

            </section>
            {/* ==========================================================
    ACHIEVEMENTS SECTION
========================================================== */}

            <section className="founder-achievements">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="section-heading text-center">

                                <span className="section-subtitle">

                                    Legacy in Numbers

                                </span>

                                <h2>

                                    A Vision That Continues
                                    <span> To Inspire Generations</span>

                                </h2>

                                <p className="section-description">

                                    The extraordinary journey of Late Sri. P. K. Das is
                                    reflected through decades of educational excellence,
                                    healthcare innovation and institutional growth across
                                    South India.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    <Row className="g-4 mt-4">

                        {/* ========================================= */}

                        <Col lg={3} md={6}>

                            <div className="achievement-card">

                                <div className="achievement-icon">

                                    <i className="bi bi-buildings-fill"></i>

                                </div>

                                <h2>

                                    22+

                                </h2>

                                <h5>

                                    Institutions Established

                                </h5>

                                <p>

                                    Educational and healthcare institutions across
                                    Kerala and Tamil Nadu.

                                </p>

                            </div>

                        </Col>

                        {/* ========================================= */}

                        <Col lg={3} md={6}>

                            <div className="achievement-card">

                                <div className="achievement-icon">

                                    <i className="bi bi-calendar-check-fill"></i>

                                </div>

                                <h2>

                                    58+

                                </h2>

                                <h5>

                                    Years of Excellence

                                </h5>

                                <p>

                                    A remarkable journey since laying the foundation
                                    in 1968.

                                </p>

                            </div>

                        </Col>

                        {/* ========================================= */}

                        <Col lg={3} md={6}>

                            <div className="achievement-card">

                                <div className="achievement-icon">

                                    <i className="bi bi-geo-alt-fill"></i>

                                </div>

                                <h2>

                                    2

                                </h2>

                                <h5>

                                    States Served

                                </h5>

                                <p>

                                    Transforming education and healthcare across
                                    Kerala and Tamil Nadu.

                                </p>

                            </div>

                        </Col>

                        {/* ========================================= */}

                        <Col lg={3} md={6}>

                            <div className="achievement-card">

                                <div className="achievement-icon">

                                    <i className="bi bi-people-fill"></i>

                                </div>

                                <h2>

                                    Thousands

                                </h2>

                                <h5>

                                    Lives Impacted

                                </h5>

                                <p>

                                    Students, educators and healthcare professionals
                                    continue to benefit from his enduring vision.

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
    VISION & PHILOSOPHY
========================================================== */}

            <section className="founder-vision">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={10}>

                            <div className="vision-card">

                                {/* Decorative Quote */}

                                <div className="vision-quote-icon">

                                    <i className="bi bi-quote"></i>

                                </div>

                                <span className="section-subtitle">

                                    The Vision

                                </span>

                                <h2>

                                    "Education is the Foundation of Progress,
                                    Healthcare is the Service of Humanity."

                                </h2>

                                <p className="vision-description">

                                    Late Sri. P. K. Das believed that true success lies in
                                    creating opportunities that transform lives. His dream
                                    was never limited to establishing institutions—it was
                                    about nurturing knowledge, character, innovation, and
                                    compassion that would continue serving society for
                                    generations to come.

                                </p>

                                <Row className="g-4 mt-4">

                                    {/* Vision Card */}

                                    <Col md={4}>

                                        <div className="vision-feature">

                                            <div className="vision-icon">

                                                <i className="bi bi-lightbulb-fill"></i>

                                            </div>

                                            <h4>

                                                Innovation

                                            </h4>

                                            <p>

                                                Encouraging creativity and embracing
                                                emerging technologies to shape the future.

                                            </p>

                                        </div>

                                    </Col>

                                    {/* Excellence */}

                                    <Col md={4}>

                                        <div className="vision-feature">

                                            <div className="vision-icon">

                                                <i className="bi bi-award-fill"></i>

                                            </div>

                                            <h4>

                                                Excellence

                                            </h4>

                                            <p>

                                                Building institutions that consistently
                                                uphold the highest standards of education
                                                and healthcare.

                                            </p>

                                        </div>

                                    </Col>

                                    {/* Service */}

                                    <Col md={4}>

                                        <div className="vision-feature">

                                            <div className="vision-icon">

                                                <i className="bi bi-heart-pulse-fill"></i>

                                            </div>

                                            <h4>

                                                Service

                                            </h4>

                                            <p>

                                                Serving society with compassion,
                                                integrity, responsibility and a
                                                lifelong commitment to humanity.

                                            </p>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
    CONTINUING THE LEGACY
========================================================== */}

            <section className="leadership-legacy">

                <Container>

                    <Row className="justify-content-center">

                        <Col lg={8}>

                            <div className="section-heading text-center">

                                <span className="section-subtitle">

                                    Continuing the Legacy

                                </span>

                                <h2>

                                    Carrying Forward
                                    <span> His Vision & Values</span>

                                </h2>

                                <p className="section-description">

                                    Though Late Sri. P. K. Das is no longer with us, his
                                    vision continues through the dedicated leadership of
                                    the next generation, ensuring that his commitment to
                                    educational excellence and healthcare innovation
                                    continues to inspire society.

                                </p>

                            </div>

                        </Col>

                    </Row>

                    <Row className="g-4 justify-content-center mt-4">

                        {/* ===============================
                MANAGING TRUSTEE
            =============================== */}

                        <Col lg={5} md={6}>

                            <div className="leader-card">

                                <div className="leader-image">

                                    <img
                                        src={founder1}
                                        alt="Adv. P. Krishnadas"
                                        className="img-fluid"
                                    />

                                </div>

                                <div className="leader-content">

                                    <span className="leader-role">

                                        Managing Trustee

                                    </span>

                                    <h3>

                                        Adv. P. Krishnadas

                                    </h3>

                                    <p>

                                        Continuing the founder's mission with a strong
                                        commitment to academic excellence, institutional
                                        development and value-based education while
                                        strengthening the Nehru Group of Institutions.

                                    </p>

                                    <div className="leader-social">

                                        <i className="bi bi-person-badge-fill"></i>

                                        <span>

                                            Nehru College of Educational &
                                            Charitable Trust

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Col>

                        {/* ===============================
                CEO & SECRETARY
            =============================== */}

                        <Col lg={5} md={6}>

                            <div className="leader-card">

                                <div className="leader-image">

                                    <img
                                        src={founder2}
                                        alt="Dr. P. Krishnakumar"
                                        className="img-fluid"
                                    />

                                </div>

                                <div className="leader-content">

                                    <span className="leader-role">

                                        CEO & Secretary

                                    </span>

                                    <h3>

                                        Dr. P. Krishnakumar

                                    </h3>

                                    <p>

                                        Leading the Nehru Group with innovation,
                                        strategic vision and a continued dedication
                                        to world-class education and healthcare
                                        excellence across South India.

                                    </p>

                                    <div className="leader-social">

                                        <i className="bi bi-hospital-fill"></i>

                                        <span>

                                            Nehru Group of Institutions

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            {/* ==========================================================
    CLOSING TRIBUTE
========================================================== */}

            <section className="founder-tribute">

                <Container>

                    <Row className="justify-content-center">

                        <Col xl={9} lg={10}>

                            <div className="tribute-card">

                                {/* Decorative Icon */}

                                <div className="tribute-icon">

                                    <i className="bi bi-stars"></i>

                                </div>

                                <span className="section-subtitle">

                                    A Timeless Legacy

                                </span>

                                <h2>

                                    His Vision Lives On
                                    <span> Through Every Life We Touch</span>

                                </h2>

                                <p>

                                    The legacy of <strong>Late Sri. P. K. Das</strong>
                                    continues to inspire every student who learns,
                                    every educator who teaches, every healthcare
                                    professional who serves, and every patient who
                                    receives compassionate care.

                                </p>

                                <p>

                                    His dream of building institutions rooted in
                                    knowledge, integrity, innovation and humanity
                                    continues to guide the Nehru College of
                                    Educational & Charitable Trust and
                                    P. K. Das Institute of Medical Sciences.

                                </p>

                                <div className="tribute-divider"></div>

                                <blockquote>

                                    "A great leader's legacy is not measured by the
                                    institutions he built, but by the countless lives
                                    he transformed."

                                </blockquote>

                                <div className="tribute-signature">

                                    <h4>

                                        Late Sri. P. K. Das

                                    </h4>

                                    <span>

                                        Founder Chairman

                                    </span>

                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


        </>
    )
}

export default Founder
