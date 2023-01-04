import React from 'react'
import ContactImg from '../../assets/contact.svg'
import Heading from '../../components/Headings/headings'

function HomeContact() {
  return (
    <div>
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
    </div>
  )
}

export default HomeContact
