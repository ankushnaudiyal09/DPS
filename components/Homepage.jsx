import "./Homepage.css"
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi"
import { FaShareAlt } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaUserCheck } from "react-icons/fa"
import { FaHandshake } from "react-icons/fa"
import { FaPhoneAlt, FaEnvelope, FaUserClock } from "react-icons/fa"
import { useState } from "react"
import Footer from "./Footer";
import Navbar from "./Navbar";


const services = [
"Commercial Space",
"Residential Plots",
"Investment Consulting",
"Residential Plots",
"Farm Houses",
"Villa Development",
"Residential Plots",
"Investment Consulting",
"Residential Plots",
"Farm Houses",
"Villa Development",
"Commercial Space",
"Residential Plots",
"Investment Consulting",
"Residential Plots",
"Farm Houses",
"Villa Development",
"Residential Plots",
"Investment Consulting",
"Residential Plots",
"Farm Houses",
"Villa Development"
]

export default function HomePage() {

    const [form,setForm]=useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
        })

        const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        }

        const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(form)

        alert("Form Submitted Successfully")
        }

    return (
        <>
            <Navbar />
            {/* hero */}
            
            <section
                className="hero"
                id="home"
                style={{backgroundImage:`url('/public/Hero.png')`}}
                >

                <div className="overlay"></div>

                <div className="hero-left">

                <span className="tag">Build to inspire</span>

                <motion.h1
                initial={{opacity:0,y:40}}
                animate={{opacity:1,y:0}}
                transition={{duration:1}}
                >
                Your Real state <br/>
                Journey starts here
                </motion.h1>

                <p>
                Discover properties that match your lifestyle from city
                condos to suburban home, we've got you covered
                </p>

                </div>

                <div className="hero-stats">

                <div className="stat-circle">
                <h3>50+</h3>
                <span>Project complete</span>
                </div>

                <div className="stat-circle">
                <h3>100Cr</h3>
                <span>Property value</span>
                </div>

                <div className="stat-circle">
                <h3>10+</h3>
                <span>Expert teams</span>
                </div>

                </div>

            </section>

            <section className="services-bar">

            <div className="services-scroll">

            <div className="services-track">

            {services.concat(services).map((service,index)=>(
            <span key={index} className="service-item">
            {service}
            </span>
            ))}

            </div>

            </div>

            </section>

            <section className="about-section">

                <div className="about-container">

                    {/* HEADER */}

                    <div className="about-header">

                    <span className="about-pill">
                        Who We Are
                    </span>

                    <h2>
                        We’re a trusted real estate agency helping people find
                        their dream and investments.
                        <span> Helping you find home, effortlessly.</span>
                    </h2>

                    </div>


                    {/* GRID */}

                    <div className="about-grid">


                    {/* LEFT CARD */}

                    <div className="about-left">

                        <img
                        src="/WhoWeAre.png"
                        alt="property"
                        />

                        <div className="mission-vision">

                        <div className="info-card">

                            <h4>Mission</h4>

                            <p>
                            Our mission is to simplify property ownership through
                            trust, transparency, expertise, care, commitment,
                            and innovation.
                            </p>

                        </div>

                        <div className="info-card">

                            <h4>Vision</h4>

                            <p>
                            Our vision is to redefine real estate experiences
                            through innovation, excellence, accessibility,
                            trust, technology, and lasting value.
                            </p>

                        </div>

                        </div>

                    </div>


                    {/* RIGHT STATS */}

                    <div className="about-right">

                        <div className="stat-card">

                        <h3>50+</h3>
                        <p>Project complete</p>

                        </div>


                        <div className="stat-card">

                        <h3>10+</h3>
                        <p>Expert team</p>

                        </div>


                        <div className="stat-card">

                        <h3>100Cr</h3>
                        <p>Project value</p>

                        </div>


                        <div className="stat-card">


                        <h3>90+</h3>
                        <p>Client retention rate</p>

                        </div>

                    </div>

                    </div>

                </div>

            </section>

            <section id="service" className="services-section">

            <div className="services-container">

                {/* HEADER */}

                <div className="services-header">

                <span className="services-pill">
                    what we offer
                </span>

                <h2>
                    Comprehensive Property Services
                </h2>

                </div>


                {/* GRID */}

                <div className="services-grid">


                {/* CARD 1 */}

                <div className="service-card">

                    <img src="/public/PropertyOne.png" alt="plots"/>

                    <h4>
                    Sale & Purchase of <br/>
                    Residential / Commercial Plots
                    </h4>

                </div>


                {/* CARD 2 */}

                <div className="service-card">

                    <img src="/public/PropertyTwo.png" alt="farm"/>

                    <h4>
                    Farm Land <br/> & <br/> Farm Houses
                    </h4>

                </div>


                {/* CARD 3 */}

                <div className="service-card">

                    <img src="/public/PropertyThree.png" alt="construction"/>

                    <h4>
                    Construction of houses
                    </h4>

                </div>


                {/* CARD 4 */}

                <div className="service-card">

                    <img src="/public/PropertyFour.png" alt="legal"/>

                    <h4>
                    Legal assistance <br/> & <br/> Loan Facility
                    </h4>

                </div>


                </div>

            </div>

            </section>


            <section className="featured-section">

            <div className="featured-container">

            {/* TOP HEADER */}

            <div className="featured-header">

            <div className="featured-title">

            <span className="featured-label">
            FEATURED PROPERTIES
            </span>

            <h2>
            Handpicked <br/> Listings
            </h2>

            </div>


            </div>


            {/* GRID */}

            <div className="featured-grid">

            {/* BIG CARD */}

            <div className="featured-big">

            <img src="/public/BigPlot.png" alt="" />

            <div className="featured-overlay">

            <h3>Premium Hill-View Plots</h3>

            <p>Mussoorie Road, Dehradun-From ₹45 lac</p>

            </div>

            </div>


            {/* RIGHT GRID */}

            <div className="featured-right">

            <div className="featured-card">

            <img src="/public/smallPlot1.png" alt="" />

            <div className="featured-overlay small">

            <h4>Valley-Farmhouse Retreat</h4>

            <p>Thano Road - ₹1.2Cr</p>

            </div>

            </div>


            <div className="featured-card">

            <img src="/public/smallPlot2.png" alt="" />

            <div className="featured-overlay small">

            <h4>Valley-Farmhouse Retreat</h4>

            <p>Saura Saroli - ₹85 Lac</p>

            </div>

            </div>


            <div className="featured-card">

            <img src ="/public/smallPlot3.png" alt="" />

            <div className="featured-overlay small">

            <h4>Valley-Farmhouse Retreat</h4>

            <p>Saura Saroli - On Request</p>

            </div>

            </div>


            <div className="featured-card">

            <img src ="/public/smallPlot4.png" alt="" />

            <div className="featured-overlay small">

            <h4>Valley-Farmhouse Retreat</h4>

            <p>Thano Road - ₹65Lac</p>

            </div>

            </div>

            </div>

            </div>

            </div>

            </section>


            <section className="process">

            <div className="process-container">

            <div className="process-header">

            <div className="process-label">
            <span></span>
            HOW IT WORKS
            </div>

            <h2>Our Simple 4-Step Process</h2>

            </div>


            <div className="process-timeline">

            <div className="timeline-line"></div>


            <div className="process-step">

            <div className="process-icon">
            <FaShareAlt/>
            </div>

            <h4>Share Your Requirement</h4>

            <p>
            Tell us what you're looking for - location, budget,
            type of property. We listen carefully.
            </p>

            </div>


            <div className="process-step">

            <div className="process-icon active">
            <FaHome/>
            </div>

            <h4>Property Shortlisting</h4>

            <p>
            We curate a matched list of verified properties
            that fit your exact needs and budget.
            </p>

            </div>


            <div className="process-step">

            <div className="process-icon">
            <FaUserCheck/>
            </div>

            <h4>Site Visit & Evaluation</h4>

            <p>
            We accompany you for site visits and help you
            evaluate each option objectively.
            </p>

            </div>


            <div className="process-step">

            <div className="process-icon active">
            <FaHandshake/>
            </div>

            <h4>Deal & Documentation</h4>

            <p>
            We handle all legal paperwork, loan coordination
            and registration for a seamless closure.
            </p>

            </div>


            </div>

            </div>

            </section>


            <section className="contact-section">

                <div className="contact-container">


                {/* LEFT SIDE */}

                <div className="contact-left">

                <div className="contact-label">
                <span></span>
                Get In Touch
                </div>

                <h2>
                Let’s Find <br/> Your Property
                </h2>

                <p>
                Whether you’re buying, selling, or building-
                our team is ready to guide you every step of the way.
                </p>


                <div className="contact-info">

                <div className="info-item">
                <FaPhoneAlt/>
                <div>
                <span>PHONE</span>
                <p>7265945632</p>
                </div>
                </div>

                <div className="info-item">
                <FaEnvelope/>
                <div>
                <span>EMAIL</span>
                <p>dps28005@gmail.com</p>
                </div>
                </div>

                <div className="info-item">
                <FaUserClock/>
                <div>
                <span>OFFICE HOURS</span>
                <p>Mon-Fri: 10am-6pm - Sat: 10am-2pm</p>
                </div>
                </div>

                </div>

                </div>



                {/* RIGHT SIDE FORM */}

                <div className="contact-form-box">

                <form onSubmit={handleSubmit}>

                <label>Full Name</label>
                <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                />

                <label>Email Address</label>
                <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                />

                <label>Phone Number</label>
                <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                />

                <label>Subject</label>
                <input
                type="text"
                name="subject"
                placeholder="Enter The Subject of your message"
                value={form.subject}
                onChange={handleChange}
                />

                <label>Message</label>
                <textarea
                name="message"
                placeholder="Enter your message here"
                value={form.message}
                onChange={handleChange}
                />

                <button type="submit">
                Submit
                </button>

                </form>

                </div>

                </div>

            </section>


            <Footer />






        </>
    )
}