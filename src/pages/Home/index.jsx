import './Style.css'
import HomeImg from '../../assets/homg-img.svg'
import {Link} from 'react-router-dom'
import { FaGraduationCap , FaUserGraduate, FaChalkboardTeacher,FaSmile} from 'react-icons/fa';
import About from '../About';
import Courses from '../Courses';


function Home() {
  return (
    
<section className="home" id="home">

<div class="row">

   <div className="content">
      <h3 className='home-title'>Crazy IELTS<span className='home-span'> learning center</span></h3>
      <Link to={'/contact'}  class="btn">contact us</Link>
   </div>

   <div className="image">
   <img src={HomeImg} alt="studying girl illustration" />
   </div>

</div>


<section className="count">

   <div className="box-container">
      <div className="box">
<FaGraduationCap className='icon-box'/>
         <div className="content">
            <h3>10+</h3>
            <p>courses</p>
         </div>
      </div>

      <div className="box">
      <FaUserGraduate className='icon-box'/>
         <div className="content">
            <h3>1300+</h3>
            <p>students</p>
         </div>
      </div>

      <div className="box">
      <FaChalkboardTeacher className='icon-box'/>

         <div className="content">
            <h3>10+</h3>
            <p>teachers</p>
         </div>
      </div>

      <div className="box">
      <FaSmile className='icon-box'/>

         <div className="content">
            <h3>100%</h3>
            <p>satisfaction</p>
         </div>
      </div>

   </div>

</section>


<About/>
<Courses/>

</section>
  )
}

export default Home