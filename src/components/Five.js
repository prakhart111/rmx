import Button from './Button'


const Five = (props) => {
  const herostyle = {
    width:'100vw',
    height:'100vh',
    margin:0,
    fontFamily:'Agrandir',
    fontSize:'2em',
  }
  const footer={
    position:'absolute',
    bottom:0,
    width:'100vw',
    height:'8%',
    display:'flex',
    justifyContent:'space-between',
    padding:'0.5em',
    backgroundColor:'#bbbbbb35',
    margin:0,
    letterSpacing:'0.1em',
    fontSize:'0.5em'
  }
  const icons={
    display:'flex',width:'15%',transform:'scale(1.3)',
  }
  return (
    <div style={herostyle}>
      STAY IN TOUCH
      <div className="made" style={footer}>
        <div className="line" style={{paddingTop:'0.5em'}}>
          MADE WITH ❤️ BY PRAKHAR TANDON
        </div>
        <div className="icons" style={icons}>
        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt='' style={{padding:'0.5em'}}/>
        <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/new-post.png" alt='' style={{padding:'0.5em'}} />
        </div>
      </div>
    </div>
  )
}

export default Five