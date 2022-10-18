import './Style.css'
import HomeImg from '../../assets/homg-img.svg'
import {Link} from 'react-router-dom'
import { FaGraduationCap , FaUserGraduate, FaChalkboardTeacher,FaSmile} from 'react-icons/fa';
import About from '../About';
import Courses from '../Courses';
import {useEffect,useState} from 'react'
import Teachers from '../Teachers';


function Home() {

const incrementBox =[
   {
      target: '10+',
      title:'courses',
      icon: <FaGraduationCap className='icon-box'/>,
   },
   {
      target: '500+',
      title:'students',
      icon:<FaChalkboardTeacher className='icon-box'/>,

   },
   {
      target: '10+',
      title:'teachers',
      icon:<FaUserGraduate className='icon-box'/>
      
   },
   {
      target: '100%',
      title:'satisfaction',
      icon: <FaSmile className='icon-box'/>
   },
]

const [count, setCount] = useState(0);

useEffect(
        () => {
            const timer = () => {
                setCount(count + 1);
            }

            // if you want it to finish at some point
            if (count >= 1100) {
                return;
            }
            const id = setInterval(timer, 0.01);
            return () => clearInterval(id);
        },
        [count]
    );





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
      {
         incrementBox.map((box)=>{
            return (
               <div className="box">
               <div className="counter-box">{box.icon}</div>
         <div className="content">
            <h3 className='counter' data-target="10">{count}</h3>
            <p>{box.title}</p>
         </div>
      </div>
            )
         })
      }

      
   </div>

</section>


<About/>
<div className="quote">
   Don't be lazy start today , not tomorrow!!!
</div>
<Courses/>
<Teachers/>
</section>
  )
}

export default Home