import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Part from './Part'
import c from './Schedule.module.css'

// Названия таблиц между которыми можно переключаться и меняется составляющее (Route, buttons)




    const Navbar = (props) => {
        let Parts = props.state.data000.map(ave => <Part
            nick={ave.nick} 
            id={ave.id}
            addTable={props.addTable} 
            state={props.state}
            Redact={props.Redact} 
            Delete={props.Delete}
           /> )
    return  (  
    <div className={c.Nav}>

        <div>
 {Parts}
</div>
<div>
<button>Add table</button>
    </div>
    </div>
    )}
    
export default Navbar