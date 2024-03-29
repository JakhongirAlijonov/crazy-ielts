import Footer from '../../components/Footer/index'
import './Style.css'
import { FaFacebook , FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import teachers from '../../mocks/teachersMock'
import 'swiper/css';
import {Link} from 'react-router-dom'



function Teachers() {

  return (
    <div>
  
        <section className="teachers" id="teachers">
        <h1 className="heading">
          expert <span>tutors</span>
        </h1>
<div className="teacher-wrapper">
  
{
 teachers.map((teacher)=>{
  return (
      <div key={teacher.id} className='teacher-card'>
      <img src={teacher.img} alt={teacher.name} />

            <div className="share">
            <a href={teacher.telegram}><FaTelegramPlane/></a>
            <a href={teacher.facebook}><FaFacebook/></a>
            <a href={teacher.instagram}><FaInstagram/></a>
            </div>
            <h3>{teacher.name }</h3>

      </div>
    )
  })
} 
</div>

<div className="hiring">
  <h2 className="hire-title">
    Are You a good teacher?
  </h2>
  <div className="hire-detail">
  If you consider yourself self-confident, inquisitive, cheerful and ambitious, our team is for you.
<br />
<p className="hire-detail">Requirements:</p>
<ol className="reqs-list">
  <li>
 IELTS 7 or higher.

  </li>
  <li>
   At least 1+ years teaching experience

  </li>
</ol>

Send your resume and we will contact you when appropriate
  </div>
  <a href="https://t.me/hugo_bola" className="send-cv btn">Send resume</a>
</div>
       
      </section>
      <Footer/>
      </div>
  );
}

export default Teachers;
