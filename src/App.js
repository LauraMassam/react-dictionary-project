import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className = "App-header">
          DICTIONARY
        </header>       
        < Dictionary />
      </div>
      <footer className="coded-by">
        open source code by {""}
        <a 
        href ="https://github.com/LauraMassam/react-dictionary-project"
        target="_blank">
         Laura Massam
        </a>
      </footer>
    </div>
  );
}

