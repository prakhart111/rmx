import Button from './Button'
import ddc from '../Page4/ddc-by-pt.png'

const Four = (props) => {

  const herostyle = {
    width:'100vw',
    height:'100vh',
  }
  const ddcS={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  }
  const butt = {
    display:'flex',
    justifyContent:'space-evenly',
    marginTop:'6%',
  }
  return (
    <div style={herostyle}>
      <div style={ddcS}>
        <img src={ddc} alt="" width='50%' />
        <p style={{padding:'0.5%',display:'block', fontFamily:'monospace',paddingTop:'1%'}}>Want  to know more about me? </p>
        <p style={{padding:'0.2%',display:'block', fontFamily:'monospace'}}>OR</p>
        <p style={{padding:'0.5%',display:'block', fontFamily:'monospace'}}>Interested in my other portfolios?</p>
      </div>
    <div className="buttCont" style={butt}>
          <Button text="Developer" />
          <Button text="Tech Writer" />
    </div>
  </div>
  )
}

export default Four