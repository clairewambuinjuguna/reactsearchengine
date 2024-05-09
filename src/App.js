import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://github.com/clairewambuinjuguna" target="_blank" rel="noreferrer">
              Claire Njuguna
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/clairewambuinjuguna/reactsearchengine"
              target="_blank" rel="noreferrer" >
              gitHub
            </a>{" "}
            
            and {""}
            <a
              href="https://weatherappbuiltwithreact.netlify.app/"
              target="_blank" rel="noreferrer"
            >
              hosted on netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
