
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
            <a href="/" target="_blank">
              Claire Njuguna
            </a>{" "}
            and is open-sourced on{" "}
            <a href="/" target="_blank">
              gitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
