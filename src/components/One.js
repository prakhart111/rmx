import logo from '../Page1/Logo/Dark.png'
import lens from '../Page1/hero-img1.jpg'
import './one.css'
import Header from './Header'

const One = (props) => {

  const herostyle = {
    width:'100vw',
    height:'100vh',
  }
 
  const icons={
    display:'flex',width:'15%',paddingTop:'10px',alignItems:'center',justifyContent:'center'
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
    <div className="message" >
      <p>This site is specifically designed for desktop devices.</p>
      <div className="icons" style={icons}>
        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt='' style={{padding:'0.1em'}}/>
        <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/new-post.png" alt='' style={{padding:'0.1em'}} />
        </div>
    </div>
    </div>
    <div className="prakhar">PRAKHAR TANDON</div>
    </>
  )
}

export default One


