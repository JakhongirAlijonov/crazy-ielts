import Footer from '../../components/Footer/index'
import './Style.css'
import { FaFacebook , FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import {useFetch} from '../../hooks/useFetch'
import teachersList from './teachersList'
import 'swiper/css';
import Loader from '../../components/Loader'
import {Link} from 'react-router-dom'



function Teachers() {
  const {data , isPending , error} = useFetch('https://randomuser.me/api/?results=6&inc=name,id,phone,picture')
  console.log(data);
  return (
    <div>
    {isPending && <Loader/> }
    {error && <p className="error">{error}</p> }
        <section className="teachers" id="teachers">
        <h1 className="heading">
          expert <span>tutors</span>
        </h1>
<div className="teacher-wrapper">
  
{
 data &&  data.results.map(({phone, picture, name})=>{
  return (
      <div key={phone} className='teacher-card'>
      <img src={picture.medium} alt="" />

            <div className="share">
            <a href='https://t.me'><FaTelegramPlane/></a>
            <a href='https://t.me'><FaFacebook/></a>
            <a href='https://t.me'><FaInstagram/></a>
            </div>
            <h3>{name.title } {name.first} {name.last} </h3>
            <Link to={`/teacher/${phone}`} className=' btn'>More about Teacher</Link>

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
