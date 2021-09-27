import React from 'react'
import App from '../../App';
import ReactDOM from 'react-dom';
import Part from '../Navbar(name_lists)/Part';

let rerender = () => {

}

let state = {
  data000: [
    {id:0 , nick: 'raz'},
    {id:1 , nick: 'dva'},
    {id:2 , nick: 'tri'}
    
  ],
  data0: [
    {id:1 , name: 'Bob', value:'2'},
    {id:2 , name: 'Dok', value:'1'},
    {id:3 , name: 'BRat', value:'5'}
  ],
   data1: [
    {id:1 , name: 'Rero', value:'33'},
    {id:2 , name: 'Kenedy', value:'12'},
    {id:3 , name: 'Shmish', value:'76'}
  ],
   data2:  [
    {id:1 , name: 'Conlock', value:'243'},
    {id:2 , name: 'Senior', value:'143'},
    {id:3 , name: 'Faser', value:'567'}
  ],
 number:1,
 status:'tablet'
}

// ОФОРМИТЬ ДЛЯ МАССИВА
// ОФОРМИТЬ ДЛЯ КНОПКИ
// ОФОРМИТЬ ДЛЯ КНОПКИ
  export let addTable  = (name) =>{
let newName= {
  nick:name
 }
  
rerender()
} 

// ОФОРМИТЬ ДЛЯ КНОПКИ
// ОФОРМИТЬ ДЛЯ КНОПКИ
// ОФОРМИТЬ ДЛЯ КНОПКИ

export let Redact  = (heading) =>{
state.status = heading
rerender()
} 
export let Delete  = () =>{

  rerender()
  } 
export const subscribe = (observer) =>{
rerender = observer;
}

 export default state
