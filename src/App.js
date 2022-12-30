import './App.css';
import Keyboard from './keyboard';

function App() {

  function handleClick() {
    console.log('handleclick is working');
    // add code here s that speechsynthesis will say "hello, this is the letter A"
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>חתול</h1>
        <h1>_ _ _</h1>
        <Keyboard />
        <button onClick={handleClick}>say the letter A</button>
      </header>
    </div>
  );
}

export default App;
