import './App.css';
import { useEffect, useState } from 'react';
import logo from './images/logo.svg'
import ResultContainer from './components/ResultContainer'
import InputContainer from './components/InputContainer'

function App() {

  const [billValue,setBillValue] = useState(100);
  const [tipValue, setTipValue] = useState(10);
  const [numOfPeople,setNumOfPeople] = useState(1)

  const tipAmount = ((billValue / 100) * tipValue) / numOfPeople;
  const total = (billValue/numOfPeople) + tipAmount;

  return (

    <div className="App">

      <div className='img'><img src={logo} alt="logo"/></div>

      <div className="main-container">

          <InputContainer
              billValue={billValue}
              tipValue={tipValue}
              numOfPeople={numOfPeople}
              setBillValue={setBillValue}
              setTipValue={setTipValue}
              setNumOfPeople={setNumOfPeople}
          />

          <ResultContainer
            tipAmount={tipAmount}
            total={total}
            setBillValue={setBillValue}
            setTipValue={setTipValue}
            setNumOfPeople={setNumOfPeople}
          />

      </div>

    </div>

  );

}

export default App;
