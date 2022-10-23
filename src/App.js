import "./App.css";
import Counter from "./components/Counter/Counter";
import SearchBar from "./components/SearchBar/SearchBar";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Counter />
      <SearchBar />
      <Title />
    </div>
  );
}

export default App;
