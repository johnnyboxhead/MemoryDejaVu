import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wave from "./components/Wave"
import waves from "./waves.json"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"

// let randomWave = Math.floor(Math.random() * waves.length)
// console.log(randomWave)

//https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    waves
  }

  selectWave = id => {
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
    const shuffledWaves = shuffleArray(waves);
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {shuffledWaves.map(wave => (
          <Wave
            randomWave={this.randomWave}
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
