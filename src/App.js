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
      value: ""
    }
  }

  clear = () => {
    this.setState({
      value: ""
    })

  }

  numbers = (event) => {
    if (this.state.value === "") {

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
    this.setState({
      value: this.state.value.slice(-1)
    }
    )
  }



  operation = (event) => {
    console.log(this.state)

    this.setState({
      value: this.state.value += event.target.name
    })



    /* if (/[\*,\/]/g.test(this.state.value.slice(-1)) === true) {
      this.setState(
        {
          value: this.state.value.concat(event.target.name)
        }
      )

    } else { */





  }

  result = (event) => {
    try {

      this.setState({
        value: eval(this.state.value)
      })

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

        <input value={this.state.value} type="text" id="screen" readOnly></input>

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

          <button className="wide button">.</button>
        </div>

      </div >
    );
  }
}

export default App;
