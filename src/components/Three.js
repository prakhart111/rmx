import Button from './Button'
import vid from '../Page3/page3.mp4'
import Gallery from './Gallery'
const Three = (props) => {
  const herostyle = {
    width:'100vw',
    height:'100vh',
    transform:'translateX(-20px)'
  }
  return (
  <div style={herostyle}> 
  {/* <video className='bgvid' autoPlay loop muted >
    <source src={vid}/>
  </video>
    <Button text="Explore Galary" /> */}
  <Gallery />
  </div>
  )
}

export default Three