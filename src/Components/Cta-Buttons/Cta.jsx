import React from 'react'
// ------icons-------
import './Cta.css'

const Cta = () => {
    // ---Cta buttons------
    const ctaButtons = [
        {
            icon: "bi bi-telephone-fill",
            title: "Call Now",
            link: "tel:+919876543210",
            className: "call-btns",
        },
        {
            icon: "bi bi-whatsapp",
            title: "WhatsApp",
            link: "https://wa.me/919876543210",
            className: "whatsapp-btn",
        },
    ];
    return (
        <>
            {/* ----------code to add the cta buttons------starts--------- */}
            <div className="cta-buttons">
                {ctaButtons.map((button, index) => (
                    <a
                        key={index}
                        href={button.link}
                        target={button.link.startsWith("https") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`cta-btn ${button.className}`}
                        aria-label={button.title}
                    >
                        <i className={button.icon}></i>
                        <span><small>{button.title}</small></span>
                    </a>
                ))}
            </div>
            {/* -------code to add the cta buttons ---------ends-------- */}
        </>
    )
}

export default Cta
