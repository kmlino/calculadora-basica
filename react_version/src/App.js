import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const operators = ['+', '-', '*', '/']

  const insertNum = (val) => {
    setInput(input + val);
  }

  const insertOperator = (val) => {
    if (input === "" || (operators.includes(input[input.length - 1]) && operators.includes(val))) {
      return;
    } else {
      setInput(input + val);
    }
  }

  const calcular = (val) => {
    
  }

  return (
    <>
    <div className="main-content">
      <Button isInput>{input}</Button>
      <div className="buttons">
        <Button onClick={insertNum}>7</Button>
        <Button onClick={insertNum}>8</Button>
        <Button onClick={insertNum}>9</Button>
        <Button onClick={insertOperator}>*</Button>
      </div>
      <div className="buttons">
        <Button onClick={insertNum}>4</Button>
        <Button onClick={insertNum}>5</Button>
        <Button onClick={insertNum}>6</Button>
        <Button onClick={insertOperator}>/</Button>
      </div>
      <div className="buttons">
        <Button onClick={insertNum}>1</Button>
        <Button onClick={insertNum}>2</Button>
        <Button onClick={insertNum}>3</Button>
        <Button onClick={insertOperator}>+</Button>
      </div>
      <div className="buttons">
        <Button onClick={calcular}>=</Button>
      </div>
    </div>
    </>
  );
}

function Button({children, onClick, isInput}) {
  const isNum = (val) => (!isNaN(val) || val === 'C' || val === '.') ? true : false;
  const isEqSign = (val) => (val === "=") ? true : false;

  return (
    <>
      {isInput ? (<div className="input">{children}</div>) 
      : (
        <div 
          className={`btn ${isEqSign(children) ? "equal" : null}
          ${isNum(children) ? null : "operator"}`}
          onClick={() => onClick(children)}
        >
          {children}
        </div>
      )}   
    </>
  )
}

export default App;
