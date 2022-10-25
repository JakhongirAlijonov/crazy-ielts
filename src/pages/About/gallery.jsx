import './Style.css'
import AboutImg  from '../../assets/about-img.svg'

function CrazyGallery() {
  return (
    <div>
        <div className="gallery-wrapper">
        <div>
        <img src={AboutImg} className='one' alt="" />

        </div>
            <img src={AboutImg} className='two' alt="" />
            <img src={AboutImg} className='three' alt="" />
            <img src={AboutImg} className='four' alt="" />
            <img src={AboutImg} className='four' alt="" />
            <img src={AboutImg} className='six' alt="" />
        </div>

    </div>
  )
}

export default CrazyGallery