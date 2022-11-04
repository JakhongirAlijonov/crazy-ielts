import React from 'react'
import './Style.css'
import ContactImg from '../../assets/contact-img.svg'
import Footer from '../../components/Footer'
import Heading from '../../components/Headings/headings'
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import ContactImgO from '../../assets/contact.svg'

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
<div className="hero">
  <h1 className="hero_title">
    Get in touch with us
  </h1>
  <img src={ContactImgO} alt="" />
</div>
<hr className="divider-hr" />
      <Heading subChildren={'Contact'} titleChildren={'Get in touch'}/>


<div className="contact-row">

   <div className="contact-image">
      <img src={ContactImg} alt="" />
   </div>

   <form action="" method="post">
      <span>your name</span>
      <input type="text" required placeholder="enter your full name"  name="name" className="box" />
      <span>your email</span>
      <input type="email" required placeholder="enter your valid email"  name="email" className="box" />
      <span>your number</span>
      <input type="number" required placeholder="enter your valid number" max="9999999999" min="0" name="number" className="box"  />
      
      
      <input type="submit" value="send message" className="btn" name="send"/>
   </form>

</div>
<hr className="divider-hr" />
<div className="contact-details">
  
  <div className="contact-detail">
  <Heading subChildren={'Location'} titleChildren={'Easy to find'}/>

    <div className="map">
    <div className='map-dets'>
    <h3>Location</h3>
    <p className="loc">
      Uzbekistan , Fergana city , Ma'rifat street
    </p>
    <h3>
    Contact numbers
    </h3>
   <div className="numbers">
   <a href="tel:+998901234567">+998901234567</a> <br />
    <a href="tel:+998901234567">+998901234567</a> <br />
    <a href="tel:+998901234567">+998901234567</a>
   </div>
    <h3>Social networks</h3>
    <div class="share">
        <a href="https://t.me/hugo_bola">
          <FaTelegramPlane />
        </a>
        <a href="https://t.me/hugo_bola">
          <FaFacebook />
        </a>
        <a href="https://t.me/hugo_bola">
          <FaInstagram />
        </a>
      </div>
    </div>
    <div className="iframe">
    <iframe title='Our location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12156.824554708275!2d71.7890605!3d40.3821237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54100f3db438dccc!2sCrazy%20IELTS!5e0!3m2!1suz!2s!4v1666284067921!5m2!1suz!2s" width="400" height="300"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  </div>
  
</div>
</section>
<Footer></Footer>
    </div>
  )
}

export default Contact