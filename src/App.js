import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import { sampleText } from './sampleText';

render(); {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea className='form-control' rows='35'/>
            // will write text here
        </div>
        <div className='col-sm-6'>
          //will render text here
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

export default App;
