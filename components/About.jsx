import Navbar from "./Navbar";
import "./About.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";





export default function About(){

    
useEffect(() => {

  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        let count = 0;

        const update = () => {

          const increment = target / 100;

          count += increment;

          if (count < target) {
            el.innerText = Math.floor(count);
            requestAnimationFrame(update);
          } 
          else {
            el.innerText = target;
          }

        };

        update();

        obs.unobserve(el);

      }

    });

  }, { threshold: 0.6 });

  counters.forEach((counter) => observer.observe(counter));

}, []);



    return (

        <>    
        
            <Navbar />

            <section
                className="contact-hero"
                style={{backgroundImage:`url('/BGHERO.png')`}}
                >

                <div className="contact-overlay"></div>

                <div className="contact-hero-content">

                <div className="hero-label">
                <span></span>
                ABOUT DEHRADUN PROPERTY SOLUTIONS
                </div>

                <h1>
                Built on <br/>
                <span className="highlight">Trust</span>, <br/>
                Rooted in <br/>
                Dehradun
                </h1>

                <p className="hero-quote">
                “We don’t just sell properties - we help families find homes and
                investors find futures”
                </p>

                </div>

            </section>

            <section className="about-story">

                <div className="about-container">

                <h2>
                Explore Your real estate dream into reality.
                </h2>

                <p className="about-desc">
                What started as a one-man mission to simplify property buying in Dehradun
                has grown into a full-service real estate agency trusted by hundreds of
                families, investors, and businesses across Uttarakhand.
                </p>


                <div className="about-values">

                <div></div> {/* empty column for spacing */}

                <div className="value-box">
                <h4>Mission</h4>
                <p>
                Our mission is to simplify property ownership through trust,
                transparency, expertise, care, commitment, and innovation.
                </p>
                </div>

                <div className="value-box">
                <h4>Vision</h4>
                <p>
                Our vision is to redefine real estate experiences through
                innovation, excellence, accessibility, trust, technology,
                and lasting value.
                </p>
                </div>

                </div>


                <div className="about-image">

                <img src="/public/About1.png" alt="property"/>

                </div>


                </div>

            </section>

            <section className="stats-section">

            <div className="stats-top">

            <div className="stats-title">
            <h2>Don’t just buy real estate — experience it.</h2>
            </div>

            <div className="stats-desc">
            <p>
            Don’t just look to buy real estate - discover a smoother,
            smarter journey with us, Our team brings years of market
            knowledge, client success stories.
            </p>
            </div>

            </div>


            <div className="stats-grid">

                <div className="stat-box">
                <h3>
                    <span className="counter" data-target="100">0</span><span className="symbol">+</span>
                </h3>
                <span className="stat-title">Properties listed</span>
                <p>Listed property reflects value, location, and condition.</p>
                </div>

                <div className="stat-box">
                <h3>
                    <span className="counter" data-target="5">0</span><span className="symbol">k</span>
                </h3>
                <span className="stat-title">Happy Client Served</span>
                <p>Happy clients trust us for seamless experiences.</p>
                </div>

                <div className="stat-box">
                <h3>
                    <span className="counter" data-target="10">0</span><span className="symbol">+</span>
                </h3>
                <span className="stat-title">Professional Agent</span>
                <p>Professional agents delivering expertise, trust, and results.</p>
                </div>

                <div className="stat-box">
                <h3>
                    <span className="counter" data-target="95">0</span><span className="symbol">%</span>
                </h3>
                <span className="stat-title">Satisfaction Rate</span>
                <p>High satisfaction rate from happy, loyal client</p>
                </div>  

            </div>

            </section>

            <section class="hero">

            <div class="hero-card">

                <h1>Turning your real estate dreams true!</h1>

                <p class="hero-desc">
                We help you find more than just a property - we help you find your dream lifestyle.
                </p>
                
                <Link to={"/contact"}>
                <button class="hero-btn2">
                Get a Quate →
                </button>
                </Link>

                <div class="feature-block">

                <div class="feature">
                    <span class="num">01</span>
                    <div>
                    <h3>Expert Local Knowledge</h3>
                    <p>With personalized service and expert guidance</p>
                    </div>
                </div>

                <hr/>

                <div class="feature">
                    <span class="num">02</span>
                    <h3>Hassls-Free Transactions</h3>
                </div>

                <hr/>

                <div class="feature">
                    <span class="num">03</span>
                    <h3>Comprehensive support</h3>
                </div>

                </div>

            </div>

            </section>

            <section class="partner-section">

            <div class="container">

                <h2 class="section-title">
                Your Trusted Real Estate Partner
                </h2>

                <div class="partner-grid">

                <div class="partner-card">
                    <div class="icon">🔍</div>
                    <h3>Personalizes Search</h3>
                    <p>Personalized search tailored to your unique needs.</p>
                </div>

                <div class="partner-card">
                    <div class="icon">👥</div>
                    <h3>Experienced Team</h3>
                    <p>Experienced team delivering trust, results, and guidance.</p>
                </div>

                <div class="partner-card">
                    <div class="icon">🎯</div>
                    <h3>Track Record</h3>
                    <p>Proven track record of success and satisfaction.</p>
                </div>

                <div class="partner-card">
                    <div class="icon">🤝</div>
                    <h3>Client-Centric</h3>
                    <p>Client-centric approach focused on your satisfaction.</p>
                </div>

                </div>

            </div>

            </section>


            <section class="team-section">

            <div class="container">

                <div class="team-header">

                <span class="team-label">
                    <span class="line"></span>
                    THE PEOPLE BEHIND DPS
                </span>

                <h2>Meet Our Team</h2>

                </div>


                <div class="team-grid">

                <div class="team-card">

                    <div class="team-img"></div>

                    <h3>Nitin Bijalwan</h3>

                    <p class="role">FOUNDER & DIRECTOR</p>

                    <p class="desc">
                    15+ years navigating Dehradun’s real estate landscape.
                    The vision behind DPS
                    </p>

                </div>


                <div class="team-card">

                    <div class="team-img"></div>

                    <h3>Nitin Bijalwan</h3>

                    <p class="role">SENIOR PROPERTY ADVISOR</p>

                    <p class="desc">
                    Expert in residential and commercial plots with deep
                    knowledge of Dehradun localities.
                    </p>

                </div>


                <div class="team-card">

                    <div class="team-img"></div>

                    <h3>Nitin Bijalwan</h3>

                    <p class="role">LEGAL & DOCUMENTATION HEAD</p>

                    <p class="desc">
                    Ensure every transaction is legally sound — from title
                    checks to final registration.
                    </p>

                </div>


                <div class="team-card">

                    <div class="team-img"></div>

                    <h3>Nitin Bijalwan</h3>

                    <p class="role">CONSTRUCTION MANAGER</p>

                    <p class="desc">
                    Oversees all house and villa construction projects,
                    ensuring quality and timely delivery.
                    </p>

                </div>

                </div>

            </div>

            </section>


            <section class="cta-section">

            <div class="cta-overlay"></div>

            <div class="cta-content">

                <p class="cta-top">
                <span class="line"></span>
                READY TO BEGIN?
                </p>

                <h2>
                Your Dream Property<br/>
                is Waiting in Dehradun
                </h2>

                <p class="cta-desc">
                Whether you’re a first buyer, seasoned investor, or looking to build your dream home
                — our team is ready to make it happen.
                </p>

                <div class="cta-buttons">

                <a href="#" class="btn primary">
                    SCHEDULE A CONSULTATION
                </a>

                <a href="#" class="btn outline">
                    BROWSE PROPERTIES
                </a>

                </div>

            </div>

            </section>

            <Footer />

        
        
        </>
    )

}