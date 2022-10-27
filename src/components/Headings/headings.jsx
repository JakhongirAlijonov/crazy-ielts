import './Style.css'

function Heading({subChildren , titleChildren}) {
  return (
    <div className='titles-wrapper'>
        <h4 className="sub_title">{subChildren}</h4>
        <h1 className="main_title">{titleChildren}</h1>
        
    </div>
  )
}

export default Heading