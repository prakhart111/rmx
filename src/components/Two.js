import Button from './Button'
import tag from '../Page2/creating-life.png'
const Two = (props) => {
  const herostyle = {
    width:'100vw',
    height:'100vh',
  }
  const tagS = {
    position:'absolute',
    top:'-5%',
    right:'-25%',
  }
  const butt = {
    position:'relative',
    top:'80%',
  }
  return (
    
    <div style={herostyle}>
      <div className="tagline" style={tagS}>
        <img src={tag} alt="" width='45%' />
      </div>
      <div className="buttCont" style={butt}>
    <Button text="Explore Galary" />
      </div>
    </div>
    
  )
}

export default Two