import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="item">
          <h2>categories</h2>
          <p>men</p>
          <p>women</p>
          <p>shoes</p>
        </div>
        <div className="item">
          <h2>links</h2>
          <p>faq</p>
          <p>stores</p>
          <p>pages</p>
        </div>
        <div className="item">
          <h2>About</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aut voluptas dolorem non a quo. Deserunt, architecto iste atque, nesciunt recusandae vitae aliquam veritatis, voluptatibus cumque ea fugit qui quas minima dolor? Quasi, atque molestiae?</p>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga itaque quo recusandae quasi quia temporibus in quae ullam aut amet? Quis, sapiente perspiciatis delectus, voluptatum ullam est ad quod, illo magnam ipsum accusantium animi.</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="/images/main-logo.png" alt="footer logo image" />
          <p>© Stylish Copyrights 2023.</p>
        </div>
        <div className="right">
          <p>Pay Securely With</p>
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </footer>
  )
}
