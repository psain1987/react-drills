import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      food: ['Bananas', 'Bacon', 'Salad', 'Chicken', 'Pasta']
    }
  }

  render(){
    let foodShown = this.state.food.map((e, i) => {
    return  <h2 key={i}>{e}</h2>
    })
    return <div className="App">{foodShown}</div>
    
  }
}

export default App;
