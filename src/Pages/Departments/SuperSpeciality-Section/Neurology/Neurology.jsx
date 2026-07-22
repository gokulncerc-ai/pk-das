import React from 'react'
import "./Neurology.css"
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Button
} from "react-bootstrap";
import neuro1 from "../../../../assets/Images/neuro1.webp";
import neuro2 from "../../../../assets/Images/neuro2.webp";
import generaldoc1 from "../../../../assets/Images/generaldoc1.webp"


const Neurology = () => {
  const highlights = [

    {
      icon: "bi bi-prescription2",
      title: "Advanced Neuro Care"
    },

    {
      icon: "bi bi-activity",
      title: "Stroke Emergency Care"
    },

    {
      icon: "bi bi-hospital-fill",
      title: "Modern ICU Facilities"
    },

    {
      icon: "bi bi-shield-check",
      title: "Expert Neurologists"
    }

  ];

  return (
    <>
      {/*=================================
                HERO SECTION
        =================================*/}


      <section
        className="neurology-hero"
        style={{
          backgroundImage: `url(${neuro1})`
        }}
      >


        <div className="neurology-overlay"></div>



        <Container>


          <Row className="justify-content-center">


            <Col lg={10}>


              <div className="neurology-hero-content">



                <Breadcrumb className="neurology-breadcrumb">


                  <Breadcrumb.Item href="/">

                    Home

                  </Breadcrumb.Item>


                  <Breadcrumb.Item href="/departments">

                    Departments

                  </Breadcrumb.Item>


                  <Breadcrumb.Item active>

                    Neurology & Neurosurgery

                  </Breadcrumb.Item>


                </Breadcrumb>





                <span className="neurology-badge">


                  Department of Neurology


                </span>





                <h1>

                  Advanced Neurological Care With
                  Compassion & Precision


                </h1>





                <p>

                  Providing comprehensive diagnosis and treatment
                  for disorders affecting the brain, spinal cord,
                  nerves and muscles through advanced technology,
                  experienced specialists and patient-centred care.

                </p>





                {/* <div className="neurology-hero-buttons">



                  <Button className="neurology-primary-btn">


                    <i className="bi bi-calendar-check me-2"></i>


                    Book Appointment


                  </Button>





                  <Button className="neurology-secondary-btn">


                    <i className="bi bi-telephone me-2"></i>


                    Contact Department


                  </Button>




                </div> */}



              </div>



            </Col>



          </Row>


        </Container>



      </section>









      {/*=================================
            QUICK INFORMATION CARDS
        =================================*/}



      <section className="neurology-quick-info">


        <Container>



          <Row className="g-4">



            {

              highlights.map((item, index) => (


                <Col lg={3} md={6} key={index}>


                  <div className="neurology-info-card">



                    <div className="neurology-info-icon">


                      <i className={item.icon}></i>


                    </div>





                    <h3>


                      {item.title}


                    </h3>



                    <p>

                      Advanced Neurological Services

                    </p>




                  </div>



                </Col>


              ))

            }



          </Row>


        </Container>



      </section>













      <section className="neurology-about">


        <Container>



          <Row className="align-items-center g-5">





            <Col lg={6}>


              <div className="neurology-about-image">



                <img

                  src={neuro2}

                  alt="Neurology Department"

                  className="img-fluid"

                />


              </div>


            </Col>







            <Col lg={6}>


              <div className="neurology-about-content">





                <span className="neurology-section-tag">


                  About Department


                </span>







                <h2>


                  Excellence In Neurology & Neurosurgical Care


                </h2>







                <p>


                  The Department of Neurology and Neurosurgery
                  provides comprehensive facilities for diagnosis
                  and treatment of diseases affecting the brain,
                  spinal cord, nerves and muscles.

                </p>







                <p>


                  Equipped with advanced neuro-radiology,
                  neurophysiology investigations and modern
                  critical care facilities, our team provides
                  accurate diagnosis, emergency treatment and
                  rehabilitation support for neurological disorders.


                </p>







                <div className="neurology-highlights">





                  <div className="neurology-highlight-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Stroke Management & Thrombolytic Therapy

                    </span>


                  </div>







                  <div className="neurology-highlight-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Advanced MRI & CT Neuro Imaging

                    </span>


                  </div>








                  <div className="neurology-highlight-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      EEG, EMG & Nerve Conduction Studies

                    </span>


                  </div>







                  <div className="neurology-highlight-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Dedicated Neuro Rehabilitation

                    </span>


                  </div>






                </div>






              </div>


            </Col>




          </Row>



        </Container>



      </section>

      {/*=================================
            WHY CHOOSE NEUROLOGY
=================================*/}


      <section className="neurology-features">


        <Container>



          <Row className="justify-content-center">


            <Col lg={8}>


              <div className="neurology-section-heading">


                <span>

                  Why Choose Us

                </span>




                <h2>

                  Comprehensive Neurological Care With Advanced Technology

                </h2>




                <p>

                  Our Neurology Department combines experienced specialists,
                  advanced diagnostics and modern treatment approaches to
                  deliver complete neurological care for patients of all ages.

                </p>



              </div>



            </Col>


          </Row>







          <Row className="g-4">






            <Col lg={4} md={6}>


              <div className="neurology-feature-card">


                <div className="neurology-feature-icon">


                  <i className="bi bi-hospital-fill"></i>


                </div>




                <h4>

                  Advanced Neuro Diagnostics

                </h4>




                <p>

                  Comprehensive neurological investigations including MRI,
                  CT scan, EEG, EMG and nerve conduction studies.

                </p>




              </div>



            </Col>







            <Col lg={4} md={6}>


              <div className="neurology-feature-card">


                <div className="neurology-feature-icon">


                  <i className="bi bi-heart-pulse-fill"></i>


                </div>




                <h4>

                  Stroke Emergency Care

                </h4>




                <p>

                  Dedicated stroke management services with thrombolytic
                  therapy and round-the-clock emergency support.

                </p>




              </div>



            </Col>







            <Col lg={4} md={6}>


              <div className="neurology-feature-card">


                <div className="neurology-feature-icon">


                  <i className="bi bi-person-heart"></i>


                </div>




                <h4>

                  Expert Neurologists

                </h4>




                <p>

                  Experienced specialists providing accurate diagnosis,
                  personalized treatment and rehabilitation support.

                </p>




              </div>



            </Col>





          </Row>




        </Container>



      </section>













      <section className="neurology-advantages">


        <Container>




          <Row className="align-items-center g-5">





            <Col lg={5}>


              <div className="neurology-advantages-image">


                <img

                  src={neuro1}

                  alt="Advanced Neurological Care"

                  className="img-fluid"

                />


              </div>



            </Col>







            <Col lg={7}>


              <div className="neurology-advantages-content">



                <span className="neurology-section-tag">

                  Our Advantages

                </span>





                <h2>

                  Advanced Treatment For Complete Neurological Wellness

                </h2>





                <p>

                  Our department provides comprehensive management for
                  neurological disorders affecting the brain, spinal cord,
                  nerves and muscles with advanced facilities and
                  multidisciplinary care.

                </p>







                <div className="row g-3">






                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Brain & Spinal Cord Disorders

                      </span>


                    </div>


                  </div>








                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Stroke Clinic & Emergency Care

                      </span>


                    </div>


                  </div>








                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Epilepsy Management

                      </span>


                    </div>


                  </div>








                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Movement Disorder Treatment

                      </span>


                    </div>


                  </div>








                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Neuro Rehabilitation

                      </span>


                    </div>


                  </div>








                  <div className="col-md-6">


                    <div className="neurology-advantage-card">


                      <i className="bi bi-check-circle-fill"></i>


                      <span>

                        Pediatric Neurology Expertise

                      </span>


                    </div>


                  </div>







                </div>



              </div>



            </Col>




          </Row>



        </Container>



      </section>











      <section className="neurology-services">


        <Container>





          <Row className="justify-content-center">


            <Col lg={8}>


              <div className="neurology-section-heading">


                <span>

                  Services Offered

                </span>





                <h2>

                  Specialized Neurology Services

                </h2>





                <p>

                  Our department offers comprehensive neurological
                  services covering diagnosis, treatment and long-term
                  management of various neurological conditions.

                </p>



              </div>



            </Col>


          </Row>








          <Row className="g-4">






            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-headset"></i>


                </div>




                <h4>

                  Headache Clinic

                </h4>




                <p>

                  Specialized evaluation and treatment for migraine,
                  chronic headaches and neurological pain conditions.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-activity"></i>


                </div>




                <h4>

                  Movement Disorder Clinic

                </h4>




                <p>

                  Advanced care for Parkinson's disease, tremor,
                  dystonia and movement-related disorders.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-shield-plus"></i>


                </div>




                <h4>

                  Epilepsy Clinic

                </h4>




                <p>

                  Specialized diagnosis and treatment for different
                  types of seizure disorders.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-diagram-3-fill"></i>


                </div>




                <h4>

                  Neuro Infectious Diseases

                </h4>




                <p>

                  Comprehensive management of infections affecting
                  the nervous system.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-eye-fill"></i>


                </div>




                <h4>

                  Neuro Ophthalmology

                </h4>




                <p>

                  Diagnosis and treatment of neurological conditions
                  affecting vision pathways.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-service-card">


                <div className="neurology-service-icon">


                  <i className="bi bi-person-walking"></i>


                </div>




                <h4>

                  Neuro Rehabilitation

                </h4>




                <p>

                  Dedicated physiotherapy and rehabilitation services
                  for neurological recovery.

                </p>




              </div>


            </Col>





          </Row>





        </Container>



      </section>

      {/*=================================
        NEURO DIAGNOSTIC FACILITIES
=================================*/}


      <section className="neurology-diagnostics">


        <Container>




          <Row className="align-items-center g-5">





            <Col lg={6}>


              <div className="neurology-diagnostics-content">



                <span className="neurology-section-tag">

                  Advanced Diagnostics

                </span>





                <h2>

                  State-of-the-Art Neuro Diagnostic Facilities

                </h2>





                <p>

                  Our department is equipped with advanced neuro-radiological
                  and neurophysiological facilities that help in accurate
                  diagnosis and effective treatment planning for neurological
                  conditions.

                </p>





                <p>

                  Advanced imaging and investigation facilities including MRI,
                  CT scan, neck vessel Doppler, EEG, EMG, NCV and Evoked
                  Potential studies are available to provide comprehensive
                  neurological evaluation.

                </p>







                <div className="neurology-diagnostic-list">





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    MRI & CT Neuro Imaging

                  </div>





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Electro Encephalography (EEG)

                  </div>





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Nerve Conduction Velocity Study (NCV)

                  </div>





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Electromyography (EMG)

                  </div>





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Visual & Auditory Evoked Potentials

                  </div>





                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Doppler Studies

                  </div>




                </div>



              </div>



            </Col>








            <Col lg={6}>


              <div className="neurology-diagnostics-image">


                <img

                  src={neuro1}

                  alt="Neuro Diagnostic Facilities"

                  className="img-fluid"

                />


              </div>



            </Col>





          </Row>




        </Container>


      </section>













      <section className="neurology-medicine">


        <Container>





          <Row className="justify-content-center">


            <Col lg={8}>


              <div className="neurology-section-heading">



                <span>

                  Neuro Medicine

                </span>





                <h2>

                  Comprehensive Care For Neurological Disorders

                </h2>





                <p>

                  Our centre of excellence in neuromedicine provides
                  specialized consultation and emergency neurological care
                  with a dedicated team available round-the-clock.

                </p>



              </div>



            </Col>


          </Row>









          <Row className="g-4">







            <Col lg={4} md={6}>


              <div className="neurology-medicine-card">



                <div className="neurology-medicine-icon">


                  <i className="bi bi-lightning-charge-fill"></i>


                </div>





                <h4>

                  Stroke Management

                </h4>





                <p>

                  Emergency stroke care with thrombolytic therapy and
                  advanced monitoring facilities for better outcomes.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-medicine-card">



                <div className="neurology-medicine-icon">


                  <i className="bi bi-activity"></i>


                </div>





                <h4>

                  Epilepsy Treatment

                </h4>





                <p>

                  Specialized treatment plans using advanced medicines
                  based on individual seizure conditions.

                </p>




              </div>


            </Col>









            <Col lg={4} md={6}>


              <div className="neurology-medicine-card">



                <div className="neurology-medicine-icon">


                  <i className="bi bi-person-wheelchair"></i>


                </div>





                <h4>

                  Rehabilitation Care

                </h4>





                <p>

                  Dedicated physiotherapy and rehabilitation support
                  for neurological recovery and functional improvement.

                </p>




              </div>


            </Col>






          </Row>




        </Container>



      </section>













      <section className="neurology-treatment">


        <Container>





          <Row className="align-items-center g-5">





            <Col lg={5}>


              <div className="neurology-treatment-image">


                <img

                  src={neuro2}

                  alt="Neurological Treatment"

                  className="img-fluid"

                />


              </div>



            </Col>







            <Col lg={7}>


              <div className="neurology-treatment-content">





                <span className="neurology-section-tag">

                  Treatment Facilities

                </span>





                <h2>

                  Advanced Treatment For Brain, Nerve & Muscle Disorders

                </h2>





                <p>

                  Our department provides comprehensive treatment options
                  for various neurological disorders including movement
                  disorders, migraine, neuropathic pain, epilepsy and
                  neurological emergencies.

                </p>







                <div className="neurology-treatment-grid">






                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Parkinson's Disease Management

                    </span>


                  </div>







                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Migraine Treatment

                    </span>


                  </div>







                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Neuropathic Pain Care

                    </span>


                  </div>







                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Sciatica Treatment

                    </span>


                  </div>







                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Trigeminal Neuralgia Care

                    </span>


                  </div>







                  <div className="neurology-treatment-item">


                    <i className="bi bi-check-circle-fill"></i>


                    <span>

                      Carpal Tunnel Syndrome

                    </span>


                  </div>






                </div>



              </div>



            </Col>




          </Row>




        </Container>



      </section>

      {/*=================================
            OUR SPECIALISTS
=================================*/}


      <section className="neurology-specialists">


        <Container>





          <Row className="justify-content-center">


            <Col lg={8}>


              <div className="neurology-section-heading">



                <span>

                  Meet Our Expert

                </span>





                <h2>

                  Our Neurology Specialist

                </h2>





                <p>

                  Our experienced neurologist provides comprehensive care
                  for neurological disorders with advanced diagnosis,
                  personalized treatment and compassionate patient support.

                </p>



              </div>



            </Col>


          </Row>









          <Row className="justify-content-center">





            <Col lg={5} md={8}>


              <div className="neurology-doctor-card">





                <div className="neurology-doctor-image">



                  <img

                    src={generaldoc1}

                    alt="Dr. Davis Manuel"

                    className="img-fluid"

                  />





                  <span className="neurology-experience">

                    Neurology Specialist

                  </span>



                </div>









                <div className="neurology-doctor-content">





                  <span className="neurology-doctor-designation">

                    Consultant Neurologist

                  </span>







                  <h3>

                    Dr. Davis Manuel

                  </h3>







                  <p>

                    Experienced neurologist specializing in diagnosis and
                    management of neurological disorders including stroke,
                    epilepsy, movement disorders and neuro emergencies.

                  </p>







                  <div className="neurology-doctor-buttons">





                    <button className="neurology-primary-btn">


                      <i className="bi bi-calendar-check me-2"></i>


                      Book Appointment


                    </button>







                    <button className="neurology-outline-btn">


                      View Profile


                    </button>





                  </div>




                </div>





              </div>



            </Col>




          </Row>




        </Container>



      </section>













      <section className="neurology-cta">


        <Container>





          <Row className="align-items-center">





            <Col lg={7}>


              <div className="neurology-cta-content">





                <span className="neurology-section-tag">


                  We're Here For You


                </span>







                <h2>

                  Need Expert Neurological Care?

                </h2>







                <p>

                  Our Neurology Department provides advanced diagnosis,
                  specialized treatment and emergency neurological support.
                  Schedule your consultation with our experienced team
                  and receive comprehensive neurological care.

                </p>







                <div className="neurology-cta-buttons">






                  <button className="neurology-primary-btn">


                    <i className="bi bi-calendar-check me-2"></i>


                    Book Appointment


                  </button>








                  <button className="neurology-outline-btn">


                    <i className="bi bi-telephone me-2"></i>


                    +91 12345 67890


                  </button>






                </div>




              </div>



            </Col>









            <Col lg={5}>


              <div className="neurology-cta-box">





                <div className="neurology-cta-icon">


                  <i className="bi bi-cpu-fill"></i>


                </div>







                <h3 className='text-light'>

                  24×7 Neurological Emergency Support

                </h3>







                <p>

                  Our dedicated emergency team provides immediate
                  medical assistance for stroke, seizures and critical
                  neurological conditions.

                </p>








                <div className="neurology-cta-features">






                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Emergency Stroke Care

                  </div>







                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Advanced ICU Support

                  </div>







                  <div>

                    <i className="bi bi-check-circle-fill"></i>

                    Expert Neurology Team

                  </div>







                </div>






              </div>



            </Col>




          </Row>




        </Container>



      </section>



    </>
  )
}

export default Neurology
