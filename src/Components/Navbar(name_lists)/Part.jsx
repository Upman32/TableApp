import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import c from './Schedule.module.css'

// Названия таблиц между которыми можно переключаться и меняется составляющее (Route, buttons)



const Part = (props) => {

let [editMode, seteditMode] = useState(false)
let [existMode, setexistMode] = useState(false)
 const activate = () =>{
        seteditMode(true)}

 const deactivate = () => {
        seteditMode(false)}
   
  const deleted = () => {
    setexistMode(true)}
    

   const newpelement = React.createRef()
  
   const addName = () => {
  let text = newpelement.current.value
 props.addTable(text);
   ;
}
const redacttag = () => {
    let text = newpelement.current.value
    props.Redact(text);
}





    return( 
   
   
   <nav>


 {!existMode &&
  <div className={c.item}>



{!editMode && 
<div className={c.item}>
<NavLink to={"/table" +  props.id} activeClassName={c.activeLink}>{props.nick}</NavLink> 
<button onClick={activate}>R</button>
<button onClick={deleted}>-</button>
</div> }


{editMode &&
   <div>
   <textarea onChange={redacttag} ref={newpelement} value={props.state.nick}
  autoFocus={true} onBlur={deactivate} onDoubleClickCapture={addName}/>
    </div> } 
    
    
      </div>}
      {existMode && ""}

  
    </nav>
    )}
    
export default Part