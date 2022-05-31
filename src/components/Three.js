import Button from './Button'
import vid from '../Page3/page3.mp4'
const Three = (props) => {
  const herostyle = {
    width:'100vw',
  }
  return (
  <div style={herostyle}> 
  <video className='bgvid' autoPlay loop muted >
    <source src={vid}/>
  </video>
    <Button text="Explore Galary" />
  </div>
  )
}

export default Three