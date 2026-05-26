//import logo from './logo.svg';
import './App.css';
import SketchPage from "./components/SketchPage";

function App() {
  return (
    <div id='App' className="App">
      <header id='header' className="App-header">
        <SketchPage  />
        {/*  <TextEditor/>*/}
        {/*  <TextManipulation />*/}
        {/*  <TextHighlighter  />*/}
        {/*  <Placement />*/}
        {/*  <Trapezoid  />*/}
      </header>
    </div>
  );
}

export default App;
