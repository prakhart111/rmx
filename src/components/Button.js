import {useEffect,useRef} from 'react'
import { gsap } from "gsap";

const Button = ({text,click}) => {

  const buttonRef = useRef()
  useEffect(()=>{gsap.fromTo(buttonRef.current, { y:'100%' },{ y:'0%' } )})

  // const q = gsap.utils.selector(buttonRef);
  // useEffect(()=>{gsap.fromTo(q(".btn"), { y:'100%' },{ y:'0%' } )})

  
  return (
    <button style={styling} class='btn' ref={buttonRef} onClick={click}>{text}</button>
  )
}
const styling = {
    backgroundColor:'#000',
    color:'#fff',
    outline:'none',
    padding:'0.5em 1em 0.5em 1em',
    border:'none',
    letterSpacing:'0.3em',
    fontSize:'1em',
    borderRadius:'10px',
    textTransform:'uppercase',
}

export default Button