import Loader from '../../../components/Loader'
import { useFetch } from '../../../hooks/useFetch'
import Heading from '../../../components/Headings/headings'
import { useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'

function OneTeacher() {
    const {phone} = useParams()
    const url = 'https://randomuser.me/api/?results=1&inc=name,picture,phone,id' + phone
    const { data, isPending, error } = useFetch(url)
    const {picture , name} = data.results[0]
    return (
      <div className='course-wrapper'>
        {isPending && <Loader />}
        {error && <p className="error">{error}</p>}
        {
          data && (
         <>
            <p>{phone}</p>
            <h1>{name.first}</h1>
            <img src={picture.medium} alt="" />
         </>
           )
          
           
        }
        <Footer/>
      </div>
    )
}

export default OneTeacher