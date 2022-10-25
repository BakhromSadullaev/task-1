import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Title } from "./components/Title/Title";
import { WithoutJSX } from "./components/WithoutJSX/WithoutJSX";

function App() {
  return (
    <div className="App">
      <Counter />
      <SearchBar />
      <Title />
      <WithoutJSX />
    </div>
  );
}

export default App;
