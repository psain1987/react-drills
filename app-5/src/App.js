import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image'

class App extends Image{
  render(){
    return(
      <div className='App'>
        <Image url={'https://i.imgflip.com/2zfooq.jpg'}/>
      </div>
    )
  }
}

export default App;
