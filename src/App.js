import Clock from './clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <a href="https://github.com/faizanu94/clock" target="_blank" rel="noreferrer">
          <img className="logo-img" alt="github-logo" src="./logo/github-mark.svg" width={30} height={30}/>
        </a>
      </div>
      <Clock />
    </div>
  );
}

export default App;
