import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Landing_Page = () => {
    return (
        <section className="hero-section">
            <div>
                <div data-aos="fade-up" className="flex-hero">

                    <h1>
                        Your Doctor<br />

                        <span className="text-gradient">

                            Our People
                        </span>
                    </h1>
                    <div class="blob-cont">
                        <div class="blue blob"></div>
                    </div>
                    <div class="blob-cont">
                        <div class="blue1 blob"></div>
                    </div>
                    <h4>
                       We help millions of people find the care they desire using our amzing Doctors that love to help people.
                    </h4>
                    <a href="#services">
                        <button class="button">Get Started</button>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Landing_Page;
