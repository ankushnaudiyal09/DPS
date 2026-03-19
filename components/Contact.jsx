import Navbar from "./Navbar";
import "./Contact.css"
import { FaPhoneAlt, FaEnvelope, FaUserClock } from "react-icons/fa"
import { useState } from "react";
import Footer from "./Footer";

export default function Contact(){

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

    return(

        <>
            <Navbar />

            <section
            className="contact-hero"
            style={{ backgroundImage: "url('/ContactBG.png')" }}
            >

            <div className="contact-overlay"></div>

            <div className="contact-hero-content">

            <h1>Get In Touch With Us</h1>

            <p>
            Have questions about a property or ready to start your search?
            Our team is here to help every step of the way.
            </p>

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
                            Have Questions Or Need <br/> Assistance?
                            </h2>
            
                            <p>
                           We’re here to help! Whether you have inquiries about our services,
                            need guidance on your next steps, or require support,
                            our team is ready to assist you.
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

            <section className="map-section">

                <div className="map-container">

                <iframe
                title="property-location"
                src="https://www.google.com/maps?q=Dehradun&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                </div>

            </section>

            <Footer />
        
        </>

    )

}