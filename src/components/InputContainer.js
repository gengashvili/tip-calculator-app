import React from 'react'
import './inputContainer.styles.css'
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

const error={
  border:"1px #E17052 solid"
}

function InputContainer(props) {
  return (
    <div className='input-container'>
          <h3>Bill</h3>

          <div className='input-logo-wraper'>
            <input
              className='input'
              min='1'
              type='number'
              value={props.billValue}
              onChange={e => props.setBillValue(e.target.value)}
            />
            <img src={dollarIcon} alt=''/>
          </div>

          <h3 className='select-h3'>Select Tip %</h3>

          <div className='tips-wraper'>
              <button  className='tip' onClick={()=>props.setTipValue(5)}>5%</button>
              <button  className='tip' onClick={()=>props.setTipValue(10)}>10%</button>
              <button  className='tip' onClick={()=>props.setTipValue(15)}>15%</button>
              <button  className='tip' onClick={()=>props.setTipValue(25)}>25%</button>
              <button  className='tip' onClick={()=>props.setTipValue(50)}>50%</button>

              <input
                className='input-tip'
                placeholder='CUSTOM'
                min='1'
                type='number'
                value={props.tipValue}
                onChange={e => props.setTipValue(e.target.value)}
                />
          </div>

          <h3 className='select-h3'>
            Number of People
            {props.numOfPeople===0?(<span className='error-message'>can't be zero</span>):""}
          </h3>

          <div className='input-logo-wraper'>
            <input 
              className='input'
              min='1'
              type='number'
              value={props.numOfPeople}
              onChange={e => props.setNumOfPeople(e.target.value)}
              style={props.numOfPeople===0?error:{display:"block"}}
            />
            <img src={personIcon} alt=''/>
          </div> 
    </div>
  )
}



export default InputContainer