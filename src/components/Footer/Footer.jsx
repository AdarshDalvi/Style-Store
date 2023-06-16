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
          <p>Welcome to Stylish Store! We specialize in offering a fantastic selection of Nike shoes. As avid enthusiasts of athletic footwear, we understand the importance of finding the perfect pair that not only matches your style but also supports your active lifestyle.</p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="/general/main-logo.png" alt="footer logo image" />
          <p>© Stylish Copyrights 2023.</p>
        </div>
        <div className="right">
          <p>Pay Securely With</p>
          <img src="/general/payment.png" alt="" />
        </div>
      </div>
    </footer>
  )
}
