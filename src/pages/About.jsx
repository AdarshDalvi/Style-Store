import './page-CSS/About.scss'
import {useNavigate} from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <h2>About us</h2>
      <p>
        Welcome to Stylish Store! We specialize in offering a fantastic selection of Nike shoes. As avid enthusiasts of athletic footwear, we understand the importance of finding the perfect pair that not only matches your style but also supports your active lifestyle.
      </p>
      <p>
        Our website is meticulously designed to provide you with an exceptional shopping experience across all devices. Whether you're browsing from your desktop computer, tablet, or smartphone, our responsive layout ensures that you can easily explore our extensive collection of shoes with just a few taps or clicks.
      </p>
      <p>
        We take pride in curating a diverse range of Nike shoes that caters to different tastes and preferences. Whether you're an avid runner, a gym enthusiast, or simply seeking comfortable and stylish sneakers for everyday wear, our store has you covered. From iconic Nike Air Max models to cutting-edge performance running shoes, we offer an extensive selection to suit every individual.
      </p>
      <p>
        Thank you for choosing Stylish Store! We are passionate about delivering exceptional products and service to our valued customers. Start browsing our collection now and find the perfect pair of Nike shoes that will elevate your performance and style to new heights.
      </p>
      <button onClick={()=>navigate('/products/6')}>Explore Shop</button>
    </div>
  )
}
