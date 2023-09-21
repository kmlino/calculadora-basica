import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { evaluate } from 'mathjs';

export default function App() {
  const [input, setInput] = useState("");
  const operators = ['+', '-', '*', '/']

  const insertNum = (val) => {
    if (input.length > 14) return;
    // Incomplete logic *to repair*
    if (input.split("").includes(".") && val === ".") return;
    setInput(input + val);
  }

  const insertOperator = (val) => {
    if (input.length > 14) return;
    if (input === "" || (operators.includes(input[input.length - 1]) && operators.includes(val))) {
      return;
    } else {
      setInput(input + val);
    }
  }

  const calc = () => {
    const lIndex = input[input.length - 1]
    if (input === "" || operators.includes(lIndex)) {
      return input;
    } else {
      setInput(evaluate(input));
    }
    
  }

  return (
    <>
    <div className="app">
    <h1>Calculadora React</h1>
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
          <Button onClick={insertNum}>0</Button>
          <Button onClick={insertNum}>.</Button>
          <Button onClick={() => setInput("")}>C</Button>
          <Button onClick={insertNum}>-</Button>
        </div>
        <div className="buttons">
          <Button onClick={() => calc()}>=</Button>
        </div>
      </div>
    </div>
    </>
  );
}

function Button({children, onClick, isInput}) {
  const isNum = (val) => (!isNaN(val) || val === 'C' || val === '.') ? true : false;
  const isEqSign = (val) => (val === "=") ? true : false;

  const c = {color: "red"}

  return (
    <>
      {isInput ? (<div className="input">{children}</div>) 
      : (
        <div
          className={`btn ${isEqSign(children) ? "equal" : null}
          ${isNum(children) ? null : "operator"}`}
          onClick={() => onClick(children)}
          style={children === 'C' ? c : null}
        >
          {children}
        </div>
      )}   
    </>
  )
}
