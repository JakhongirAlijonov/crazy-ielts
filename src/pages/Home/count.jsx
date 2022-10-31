import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaSmile } from 'react-icons/fa';
import './Style.css'
import CauntUp from 'react-countup';
function Counter() {
    const incrementBox = [
        {id:'ad',
           target: 100,
           tg: '+',
           title: 'courses',
           icon: <FaGraduationCap className='icon-box' />,
        },
        {id:'ac',
           target: 500,
           tg: '+',
           title: 'students',
           icon: <FaChalkboardTeacher className='icon-box' />,
  
        },
        {id:'ab',
           target: 10,
           tg: '+',
           title: 'teachers',
           icon: <FaUserGraduate className='icon-box' />
  
        },
        {id:'aa',
           target: 100,
           tg: '%',
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
                                 <h3 className='counter' data-target="10"><CauntUp start={0} end={box.target} duration={2} deley={0}/>
                                 <span>{box.tg}</span>
                                 </h3>
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