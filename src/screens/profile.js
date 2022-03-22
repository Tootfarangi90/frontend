import {useEffect} from 'react'
import Yes from './img/FuckYEA.jpg'

export default function Profile() {
   
  useEffect(()=>{
    document.title = "Profile"
    })
    
  return (
    <div className='hej'>
<img className="yes" src={Yes} alt="yes"></img>
    </div>
  )

}