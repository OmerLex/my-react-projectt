import logo from './logo.svg';
import img from "./img/prinsess_cupcakes.jpg";
import Header from './components/Header';

import './App.css';

// function Header(){
//   return (
//     <h1>This message from Header Component.</h1>
//   );
// }

// const Header = () => {
//   return (
//     <>
//       <h1>This message from Header Component.</h1>
//       <h2>This code will show error</h2>
//     </>
//   );
// }

function App() {
  const name = "John";
  const x = false;
  return (
    <div className="App">
      <Header />
      <h1>Hello React!!!</h1>
      <h2>Hello {name}</h2>
      <h2> {x ? 'Yes': 'No'}</h2>
      <img src={img} />
      {/* Component */}
      <Header />
      <h3>This line is for testing</h3>

     
    </div>
    
  );
}

export default App;
