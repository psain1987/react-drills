import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
      
      this.state = {
        foodString: '',
        food: ['Bananas', 'Bacon', 'Salad', 'Chicken', 'Pasta']
      }
  }

  handleChange(filter){
    this.setState({foodString: filter})
  }

  render(){
    let foodBuffet = this.state.food
    .filter((e, i) => {
      return e.includes(this.state.foodString)
    })
    .map((e, i) => {
      return <h2 key={i} > {e}</h2>
    })
  
  return (
    <div className="App">
    <input onChange={e => this.handleChange(e.target.value)} type="text" />
    {foodBuffet}
  </div>
  );
  }
}


export default App;
