import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {incnum, decnum, restnum} from './actions/index'
import Select from  'react-select'
import { useState } from 'react'
const App = () => {

// use for geting initial state value
  const myState = useSelector((state)=> state.changeNum)
//  use for call all the functions
  const dispatch = useDispatch();
  

//  for changing background colour
let colors = [
  {
    value: 1,
    color:'#ffcdb2',
    label: 'light orange'
  },
  {
    value: 2,
    color:'#a8dadc ',
    label: 'light blue'
  },
  {
    value: 3,
    color:'#a3b18a',
    label: 'drak green'
  },
  
] 
// state for geting the colors code / names
const [bgcolor, setbgcolor] = useState(colors.color)

const bgHandler = (e)=>{
  setbgcolor(e.color)
}

  return (
    <div className='wrapper'>
      <style> {'.wrapper { background-color:'+bgcolor+'}'}</style>
      <div >
        <Select  className='select' options={colors} onChange={bgHandler} placeholder='Change colours'>
           
        </Select>
      </div>


{/* Our counter jsx  */}
      <h1>React Counter</h1>
      <h2>State managment using redux</h2>
      <br />
      <div className='conuter_con'>
        <a href="#" className='minus' onClick={() => dispatch(decnum())}>-</a>

        <input type="text" className='digit' value={myState} />
        <a href="#" className='plus' onClick={() => dispatch(incnum())}>+</a>
        <br />
     
      </div>
      <a href="#" className='rest' onClick={() => dispatch(restnum())}>rest</a>
    </div>
  )
}


export default App