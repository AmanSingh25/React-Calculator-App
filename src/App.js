import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fi-calculator">
        <div className="display">
      </div>

        <div className="fi-operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>del</button>
        </div>

        <div className="fi-digits">
          { createNums() }
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
