import { useState, useEffect } from "react";
import Search from "./components/Search";
import ListCards from "./components/ListCards";

function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    setResult(data.results);
    //console.log(data.results)
  }

  const onChange = (term) => {
    setSearch(term)
  }

  let newResult = [];
  if(!search) {
    newResult = result
  } else {
    newResult = result.filter((data) => {
      return data.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  useEffect(() => {
    showData()
  }, [])

  return (
    <div className="App">
      <h1>characters</h1>
      <Search onChange={onChange}/>
      <ListCards cards = {newResult}/>
    </div>
  );
}

export default App;
