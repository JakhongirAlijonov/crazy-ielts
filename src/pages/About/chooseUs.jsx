import './Style.css'
import {FaChalkboardTeacher ,FaBuilding } from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ChooseUs() {
  return (
    <div>
    <h1 className="heading">
          Why choose <span>us ?</span>
        </h1>
        <div className='choose-wrapper'>
        <div className="choose-card">
                <FaChalkboardTeacher className='choose-icon'/>
                <h2 className="choose-crd-title">Best teachers for you </h2>
                <p className="choose-card-detail">
                In our learning center you will be teached by the best teachers using the best methods 
                </p>
                <Link to={'/teachers'}  className='choose-links btn'>See more </Link>
        </div>
        <div className="choose-card">
                <FaBuilding className='choose-icon'/>
                <h2 className="choose-crd-title">comfortable  classrooms </h2>
                <p className="choose-card-detail">
                You will be educated in modern classrooms and atmosphere will be amazing !. Our center is also conveniently located in the city center 
                </p>
                <Link to={'/contact'}  className='choose-links btn'>See more</Link>
        </div><div className="choose-card">
                <BsBook className='choose-icon'/>
                <h2 className="choose-crd-title">The best IELTS books </h2>
                <p className="choose-card-detail">
                You can also find here a collection of Crazy books written by the organizer of the center 
                </p>
                <Link to={'/books'} className='choose-links btn' path>See more </Link>
        </div>

    </div>
    </div>
  )
}

export default ChooseUs