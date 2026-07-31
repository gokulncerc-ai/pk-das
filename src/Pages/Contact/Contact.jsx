import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const departmentNumbers = [
    { label: "General Enquiry", number: "0466 23 44 500" },
    { label: "Emergency", number: "0466 23 44 511" },
    { label: "Emergency", number: "0466 23 44 599" },
    { label: "Radiology", number: "0466 23 44 520" },
    { label: "Insurance", number: "0466 23 44 555" },
    { label: "Dialysis", number: "0466 23 44 544" },
    { label: "Pharmacy", number: "0466 23 44 521" },
    { label: "Laboratory", number: "0466 23 44 510" },
    { label: "HR Office", number: "0466 23 44 568" },
];

const socialLinks = [
    { icon: "fa fa-facebook", label: "Facebook", url: "https://www.facebook.com/pkdims" },
    {
        icon: "fa fa-youtube-play",
        label: "Youtube",
        url: "https://www.youtube.com/@pkdasinstituteofmedicalsci2104",
    },
    {
        icon: "fa fa-instagram",
        label: "Instagram",
        url: "https://www.instagram.com/pkdashospital/",
    },
];

const Contact = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        // TODO: wire this up to your contact_mail endpoint
    };

    return (
        <>
            {/* ===================== HERO ===================== */}
            <section className="gm-hero gm-hero--compact">
                <div className="gm-overlay"></div>
                <div className="container">
                    <div className="gm-hero-content">
                        <nav aria-label="breadcrumb" className="gm-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Contact Us
                                </li>
                            </ol>
                        </nav>

                        <span className="gm-badge">
                            <i className="fa fa-phone me-2"></i>&nbsp;Get In Touch
                        </span>

                        <h1>Contact Us</h1>
                        <p>Book a Complimentary Appointment by Visiting or Calling Us!</p>
                    </div>
                </div>
            </section>

            {/* ===================== CONTACT INFO + FORM ===================== */}
            <section className="pt-contact">
                <div className="container">
                    <div className="row g-0 pt-contact-wrapper">
                        <div className="col-lg-5">
                            <div className="pt-contact-info">
                                <h3>PK Das Institute of Medical Sciences</h3>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </span>
                                    <div>
                                        <h5>PK Das Institute of Medical Sciences</h5>
                                        <p>Vaniamkulam, Ottapalam</p>
                                    </div>
                                </div>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </span>
                                    <div>
                                        <h5>info@pkdashospital.com</h5>
                                        <p>Need support? Drop us an email</p>
                                    </div>
                                </div>

                                <div className="pt-contact-item">
                                    <span className="pt-contact-icon">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <div>
                                        <h5>0466 2344511 / 2344599</h5>
                                        <p>Have a question? Call us now</p>
                                    </div>
                                </div>

                                <div className="contact-social-icons">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            title={social.label}
                                        >
                                            <i className={social.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="pt-contact-form-wrapper">
                                <span className="gm-section-tag">What We Do</span>
                                <h2>Contact Us</h2>
                                <p className="pt-contact-form-desc">
                                    We offer extensive medical procedures to outbound and inbound patients, and
                                    we are very proud of achieving patient recovery.
                                </p>

                                <form className="pt-contact-form" onSubmit={handleContactSubmit}>
                                    <label>
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </label>
                                    <label>
                                        <i className="fa fa-mobile"></i>
                                        <input type="text" name="phone" placeholder="Cell Phone" required />
                                    </label>
                                    <label>
                                        <i className="fa fa-envelope-o"></i>
                                        <input type="email" name="email" placeholder="Email" required />
                                    </label>
                                    <label className="pt-contact-form-textarea">
                                        <i className="fa fa-comment-o"></i>
                                        <textarea name="message" rows={3} placeholder="Message" required></textarea>
                                    </label>
                                    <button type="submit" className="gm-primary-btn">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* ===================== DEPARTMENT NUMBERS ===================== */}
                    <div className="contact-numbers-wrapper">
                        <ul className="contact-numbers-list">
                            {departmentNumbers.map((dept, idx) => (
                                <li key={`${dept.label}-${idx}`}>
                                    <a href={`tel:${dept.number.replace(/\s+/g, "")}`}>
                                        <span className="contact-number-label">{dept.label}</span>
                                        <span className="contact-number-value">{dept.number}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31354.970392703253!2d76.326977!3d10.782848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c723734a47875b4!2sPK%20DAS%20Institute%20of%20Medical%20Sciences%20-%20Hospital%20and%20Medical%20College!5e0!3m2!1sen!2sin!4v1602675560911!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="PK Das Institute of Medical Sciences location"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;