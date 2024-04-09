//import logo from './logo.svg';
import './App.css';
import SketchPage from "./components/SketchPage";
import Trapezoid from "./components/Trapezoid";
import Placement from "./components/Placement";
import TextManipulation from "./components/TextManipulation";
import TextHighlighter from "./components/TextHighlighter";
import TextEditor from "./components/TextEditor";

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
