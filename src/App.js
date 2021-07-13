import './App.css';
import React from 'react';
/*import { clear } from './handler/clear';*/
/* import { backspace } from './handler/backspace';

import {numbers} from './handler/numbers';
import { result } from './handler/result' */


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  clear = () => {
    this.setState({
      value: 0
    })

  }

  numbers = (event) => {
    if (this.state.value === "ERROR") {

      console.log("hahaha form error")

      this.setState({
        value: ""
      })

    }

    else if (this.state.value === 0) {

      this.setState({
        value: event.target.name
      })

    }
    else {

      this.setState({
        value: this.state.value += event.target.name
      })

    }
  }

  backspace = (event) => {
    console.log(this.state.value, "fornivn abxsdcvklsv")
    if (this.state.value == 0) {
      this.setState({
        value: 0
      })
    }
    else if (this.state.value === "ERROR") {
      this.setState({
        value: 0
      })

    } else {
      this.setState({
        value: this.state.value.slice(0, -1)
      })
    }
  }



  operation = (event) => {

    console.log(this.state.value)

   /*  if (this.state.value === "ERROR") {

      console.log("hahaha form error")
      this.setState({
        value: event.target.value
      })
    } */
    // {
      this.setState({
        value: this.state.value += event.target.name
      })
    // }

    /*  if (/[*,/]/g.test(this.state.value.slice(-1)) === true) {
       this.setState(
         {
           value: this.state.value[this.state.value.length - 1] += event.target.name
         }
       )
 
     } else {
       
     } */
  }



  result = (event) => {
    console.log(this.state, "result ke andar se")
    try {

      if (this.state.value === 0) {
        this.setState({
          value: 0
        })
      }
      else {
        // console.log(typeof this.state.value, Number(this.state.value), "andar se")
        if (this.state.value.length > 1) {
          this.state.value = this.state.value.split(/(?=[+,/,*,-,+])|(?<=[+,/,*,-,+])/g)
            .map(num => {
              if (Number(num)) {
                return Number(num)
              } else {
                return num
              }
            })
            .join("")
        }

        this.setState({
          value: eval(this.state.value).toString()
        })
      }

    } catch (e) {

      this.setState({
        value: "ERROR"
      })

    }
  }

  render() {
    console.log(this.state.value, "dbcvdfe vj");

    return (
      <div className="main" >

        <input value={this.state.value} type="text" id="screen" /* maxlength={Infinit} */ readOnly></input>

        <div id="cal-bdy">
          <button id="clr-btn" onClick={this.clear} className="wide fnbutton">C</button>
          <button id="del" onClick={this.backspace} name="DEl" className="wide fnbutton">DEL</button>

          <button onClick={this.operation} name="/" className="wide fnbutton">÷</button>
          <button onClick={this.operation} name="*" className="wide fnbutton">x</button>

          <button onClick={this.numbers} name='7' className="wide button">7</button>
          <button onClick={this.numbers} name='8' className="wide button">8</button>
          <button onClick={this.numbers} name='9' className="wide button">9</button>

          <button onClick={this.numbers} name="-" className="wide fnbutton">-</button>

          <button onClick={this.numbers} name='4' className="wide button">4</button>
          <button onClick={this.numbers} name='5' className="wide button">5</button>
          <button onClick={this.numbers} name='6' className="wide button">6</button>

          <button onClick={this.operation} name="+" className="wide fnbutton">+</button>

          <button onClick={this.numbers} name='1' className="wide button">1</button>
          <button onClick={this.numbers} name='2' className="wide button">2</button>
          <button onClick={this.numbers} name='3' className="wide button">3</button>

          <button onClick={this.result} id="equal" className="wide fnbutton">=</button>

          <button onClick={this.operation} name='0' id="zero" className="wide button">0</button>

          <button onClick={this.operation} name="." className="wide button">.</button>
        </div>

      </div >
    );
  }
}

export default App;
