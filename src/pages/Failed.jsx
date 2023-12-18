import './page-CSS/SuccessFailed.scss'
import { useNavigate } from 'react-router-dom'

export default function Failed() {
  const navigate = useNavigate()
  return (
    <div className='suc-fai-conatiner'>
      <div className='wrapper'>
        <h2>Payment Failed !</h2>
        <p>For any product or site related queries, drop an email to <br /> <span>awesomestylishstore@gmail.com</span> </p>
        <button onClick={() => navigate('/products/3')}>Continue Shopping</button>
      </div>
    </div>
  )
}
