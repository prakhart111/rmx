import React from 'react'

const Header = () => {
    const navS = {
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        padding:'5px',
        paddingLeft:'5%',
        paddingRight:'5%',
        fontFamily:'Robolt',
        fontSize:'1.2em',
        fontWeight:'800',
    }
const rightyS = {
    display:'flex',
    justifyContent:'space-between',
}
const pad = {
    paddingRight:'30px',
}
  return (
    <div className='nav' style={navS}>
        <div className="lefty">
            HOME
        </div>
        <div className="righty" style={rightyS}>
            <div className="link1" style={pad}>ABOUT</div>
            <div className="link2" style={pad}>GALARY</div>
        </div>
    </div>
  )
}

export default Header