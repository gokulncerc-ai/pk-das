// import React from 'react'
// import "./Cardiology.css"
// import cardiology1 from "../../../../assets/Images/cardiology1.webp"
// import cardiology2 from "../../../../assets/Images/cardiology2.webp"
// import cardiology3 from "../../../../assets/Images/cardiology3.webp"
// import { Container, Row, Col, Card } from "react-bootstrap";


// const Cardiology = () => {

//     const highlights = [

//         {
//             icon: "bi-heart-pulse-fill",
//             title: "24×7 Cardiac Care"
//         },

//         {
//             icon: "bi-hospital-fill",
//             title: "Advanced Cath Lab"
//         },

//         {
//             icon: "bi-shield-check",
//             title: "Experienced Specialists"
//         },

//         {
//             icon: "bi-activity",
//             title: "Modern Diagnostics"
//         }

//     ];

//     return (
//         <>
//             {/*=========================================
//                 Hero Section
//             =========================================*/}

//             <section className="cardiology-hero">

//                 <Container>

//                     <Row className="align-items-center">

//                         <Col lg={6}>

//                             <div className="hero-content">

//                                 <span className="department-badge">

//                                     <i className="bi bi-heart-pulse-fill me-2"></i>

//                                     Centre for Cardiology

//                                 </span>

//                                 <h1>

//                                     Advanced Cardiac Care With
//                                     <span> Compassion & Excellence</span>

//                                 </h1>

//                                 <p>

//                                     Our Department of Cardiology provides
//                                     comprehensive heart care through advanced
//                                     diagnostics, interventional cardiology,
//                                     preventive cardiology and emergency cardiac
//                                     services delivered by experienced specialists.

//                                 </p>

//                                 <div className="hero-buttons">

//                                     <button className="appointment-btn">

//                                         Book Appointment

//                                     </button>

//                                     <button className="services-btn">

//                                         Our Services

//                                     </button>

//                                 </div>

//                             </div>

//                         </Col>

//                         <Col lg={6}>

//                             <div className="hero-image">

//                                 <img
//                                     src={HeroImage}
//                                     alt="Cardiology Department"
//                                 />

//                             </div>

//                         </Col>

//                     </Row>

//                 </Container>

//             </section>





//             {/*=========================================
//                 Department Overview
//             =========================================*/}

//             <section className="department-overview">

//                 <Container>

//                     <Row className="align-items-center g-5">

//                         <Col lg={6}>

//                             <div className="overview-image">

//                                 <img
//                                     src={DepartmentImage}
//                                     alt="Cardiology Department"
//                                 />

//                             </div>

//                         </Col>

//                         <Col lg={6}>

//                             <div className="overview-content">

//                                 <span className="section-tag">

//                                     About Department

//                                 </span>

//                                 <h2>

//                                     Comprehensive Cardiology Services

//                                 </h2>

//                                 <p>

//                                     The Department of Cardiology provides a broad
//                                     range of services in the diagnosis,
//                                     management and prevention of heart diseases.
//                                     We believe that excellent cardiac care is
//                                     achieved through a partnership between the
//                                     patient, family and healthcare team.

//                                 </p>

//                                 <p>

//                                     Equipped with advanced diagnostic equipment,
//                                     a modern Cath Lab and experienced
//                                     cardiologists, we provide world-class care
//                                     for both emergency and elective cardiac
//                                     conditions.

//                                 </p>

//                             </div>

//                         </Col>

//                     </Row>

//                 </Container>

//             </section>





//             {/*=========================================
//                 Department Highlights
//             =========================================*/}

//             <section className="department-highlights">

//                 <Container>

//                     <Row className="g-4">

//                         {

//                             highlights.map((item, index) => (

//                                 <Col lg={3} md={6} key={index}>

//                                     <Card className="highlight-card border-0">

//                                         <Card.Body>

//                                             <div className="highlight-icon">

//                                                 <i className={`bi ${item.icon}`}></i>

//                                             </div>

//                                             <h5>

//                                                 {item.title}

//                                             </h5>

//                                         </Card.Body>

//                                     </Card>

//                                 </Col>

//                             ))

//                         }

//                     </Row>

//                 </Container>

//             </section>



//         </>
//     )
// }

// export default Cardiology
