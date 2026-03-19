import "./Footer.css"

export default function Footer(){

return(

<footer className="footer">

<div className="footer-container">

{/* LEFT */}

<div className="footer-about">

<div className="footer-logo">

<img src="/logo.png" alt="logo"/>

<div>
<h3>Dehradun Property Solutions</h3>
<span>REAL ESTATE EXPERTS</span>
</div>

</div>

<p>
Your Trusted partner for buying,selling, and building in
Dehradun, Honest advice, real results.
</p>

</div>


{/* SERVICES */}

<div className="footer-col">

<h4>SERVICES</h4>

<ul>
<li>Residential Plots</li>
<li>Commercial Plots</li>
<li>Farm Lands</li>
<li>House Construction</li>
<li>Villa Development</li>
</ul>

</div>


{/* COMPANY */}

<div className="footer-col">

<h4>COMPANY</h4>

<ul>
<li>About Us</li>
<li>Our Team</li>
<li>Testimonials</li>
<li>Blog</li>
<li>Careers</li>
</ul>

</div>


{/* LEGAL */}

<div className="footer-col">

<h4>LEGAL & SUPPORTS</h4>

<ul>
<li>Legal Assistance</li>
<li>Loan Guidance</li>
<li>Privacy Policy</li>
<li>Terms of Service</li>
<li>Contact</li>
</ul>

</div>

</div>


{/* BOTTOM */}

<div className="footer-bottom">

<p>
2025 Dehradun Property Solution. All rights reserved.
</p>

<p>
Made with heart for Dehradun | dps248005@gmail.com
</p>

</div>

</footer>

)

}