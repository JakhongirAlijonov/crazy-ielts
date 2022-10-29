import { useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { useFetch } from '../../../hooks/useFetch'
import Heading from '../../../components/Headings/headings'
import CourseOne from "../../../assets/course-1.svg";

import './Style.css'
import Footer from '../../../components/Footer';

function OneCourse() {
  const { id } = useParams()
  const url = 'http://localhost:3000/coursesCards/' + id
  const { data, isPending, error } = useFetch(url)
  return (
    <div className='course-wrapper'>
      {isPending && <Loader />}
      {error && <p className="error">{error}</p>}
      {
        data && <div >
          <Heading subChildren={`About this course`} titleChildren={`${data.title} course `} />
          <div className="course-card">
            <div className="course-content">
            <h2 className="course-title">{data.title}</h2>
            <p className="course-detail"> <span>Description:</span> {data.about}</p>
            <p className="course-costt"> <span>Cost:</span> {data.cost}</p>
            <p className="course-teacher"> <span>Teacher:</span> {data.teacher}</p>
            </div>
            <img src={CourseOne} alt="" />
          </div>
        </div>
      }
      <Footer/>
    </div>
  )
}

export default OneCourse