import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaSmile } from 'react-icons/fa';
import './Style.css'

function Counter() {
    const incrementBox = [
        {id:'ad',
           target: '10+',
           title: 'courses',
           icon: <FaGraduationCap className='icon-box' />,
        },
        {id:'ac',
           target: '500+',
           title: 'students',
           icon: <FaChalkboardTeacher className='icon-box' />,
  
        },
        {id:'ab',
           target: '10+',
           title: 'teachers',
           icon: <FaUserGraduate className='icon-box' />
  
        },
        {id:'aa',
           target: '100%',
           title: 'satisfaction',
           icon: <FaSmile className='icon-box' />
        },
     ]

  return (
    <div>
          <section className="count">
               <div className="box-container">
                  {
                     incrementBox.map((box) => {
                        return (
                           <div className="box" key={box.id}>
                              <div className="counter-box">{box.icon}</div>
                              <div className="content">
                                 <h3 className='counter' data-target="10">{box.target}</h3>
                                 <p>{box.title}</p>
                              </div>
                           </div>
                        )
                     })
                  }


               </div>
            </section>
    </div>
  )
}

export default Counter