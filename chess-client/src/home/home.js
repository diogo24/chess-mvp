import logo from '../logo.svg';
import '../App.css';

export function Home() {
    return (
        <>
               <div className="App">
      <header className="App-header">
        <a className="" href="./menu" target="_blank">
          Menu
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </>
    );
};