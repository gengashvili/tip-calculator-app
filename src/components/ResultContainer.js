import React from 'react'
import './resultContainer.styles.css'
import { useState } from 'react'

function ResultContainer(props) {

  const reset=()=>{
    props.setBillValue(0)
    props.setTipValue(0)
    props.setNumOfPeople(0)
  }
  
  return (
    <div className='result-container'>
      <div className='tip-amount-box'>
          <div className='txt-box'>
              <h3>Tip Amount</h3>
              <p>/ person</p>
          </div>
          <div className='tip-amount-result'>
              ${props.tipAmount.toFixed(2)}
          </div>
      </div>
      <div className='tip-amount-box'>
          <div className='txt-box'>
              <h3>Total</h3>
              <p>/ person</p>
          </div>
          <div className='tip-amount-result'>
              ${props.total.toFixed(2)}
          </div>
      </div>
      <button className='reset-btn' onClick={reset}>RESET</button>
    </div>
  )
}

export default ResultContainer