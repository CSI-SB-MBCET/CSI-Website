// radiance.js
import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Radiance = () => {
    const backgroundImage = "/assets/bgeventpage.png"; // make sure this image is in /public/assets
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div
            className="event-details-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >

            <div className="event-content-wrapper">
                <div className="event-image_event" data-aos="fade-right">
                    <img
                        src="/assets/radianceevent.png" // Ensure this image is in /public/assets
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Radiance</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        Radiance, a one-day event conducted by CSI SB MBCET in association with the Department 
                        of Computer Science and Engineering exclusively for first-year students as part of the 
                        introductory session to professional body activities, was successfully held, providing 
                        participants with valuable insights and engagement opportunities. 
                        <br></br>
                        The Radiance event commenced with enthusiastic first-year participants registering and 
                        receiving CSI merchandise, followed by a warm welcome and an ice-breaker bingo game to 
                        promote networking. Teams were formed for collaborative activities, starting with Scenario 
                        Enacting, which encouraged creativity and teamwork. A guest speaker session featuring 
                        seniors Varsha Renjith, Chris Dylan John and Adlu Rahman provided valuable advice, while 
                        the Brain Write & Presentation session allowed teams to brainstorm and present innovative 
                        solutions. After lunch, students participated in an exciting Treasure Hunt and a Themed 
                        Pictionary game. The event concluded with reflections on CSI's role in their professional 
                        development, prize distribution, and group photos, leaving a lasting impression on the first-year students.

                        <br></br>
                        The event was organised by Niranj R, Vedha Mahadevan, Chris Thomas Abraham (all from S3 CS2),and  
                        Anoushka L Nair (S7), with valuable volunteer support from Nayana Anna Binu (S3 CS2), 
                        V S Sabarinath (S3 ME1), Sara Robin Baby (S3CS2), Shibin S R (S3 EL), Sradhya Renish (S3 CS2), 
                        and Vasundhara S R (S3 CS2).
                        <br></br>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Radiance;
