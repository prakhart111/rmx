import logo from '../Page1/Logo/Dark.png'
import lens from '../Page1/hero-img1.jpg'
import './one.css'
import Header from './Header'

const One = (props) => {

  const herostyle = {
    width:'100vw',
    height:'100vh',
  }
  return (
    <>
    <Header />
    <div style={herostyle} className='contOne'>
      <div className='logo'>
        <img src={logo} alt="" width='75%'  />
      </div>
      <div className='lens'>
        <img src={lens} alt="" width='120%' />
      </div>

    </div>
    <div className="prakhar">PRAKHAR TANDON</div>
    </>
  )
}

export default One


