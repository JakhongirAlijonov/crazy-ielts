import './Style.css'
import { Circles } from  'react-loader-spinner'

function Loader() {
  return (
    <div>
        <Circles
  height="80"
  width="80"
  color="#FEDB39"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass="loader"
  visible={true}
/>
    </div>
  )
}

export default Loader