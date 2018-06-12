import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wave from "./components/Wave"
import waves from "./waves.json"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"

class App extends Component {
  state = {
    waves
  }
  
  selectWave = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const waves = this.state.waves.filter(wave => wave.id !== id);
    // Set this.state.friends equal to the new friends array
    this.state.waves.map(wave => {
      if (wave.id === id){
        if (wave.clicked === true) {
          console.log("Game Over")
        }
        wave.clicked = true
      }
    })

    this.setState({ waves });
  };

  

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.waves.map(wave => (
          <Wave
            selectWave={this.selectWave}
            id={wave.id}
            key={wave.id}
            name={wave.name}
            image={wave.image}
            clicked={wave.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
