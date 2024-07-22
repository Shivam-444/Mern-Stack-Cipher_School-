import logo from './logo.svg';
import './App.css';
import {Component} from "react";

// function App() {
//   const NAME="Cipher Schools"
//   return (
//     <>
//     <div>
//       <h1 style={{
//         color:"Green",
//         textAlign: "center",
//       }}>
//         Hello From {NAME}</h1>
//     </div>
//     <div><p>Hello</p></div>
//     </>
//   )
// }

class App extends Component{
  name="Cipher Schools";
  render(){
    return(
      <>
      <div>
        <h1>This is {this.name}</h1>
      </div>
      <div>
        <p>This is a CP</p>
      </div>
      </>
    );
  }
}

export default App;
