
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather/>
        <footer>
          <p>
            This project was coded by{" "}
            <a href="/" target="_blank">
              Claire Njuguna
            </a>{" "}
            and is <a href="#" target="_blank"></a>open-sourced on{" "}
            <a href="#">gitHub</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
