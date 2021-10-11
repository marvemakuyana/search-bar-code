import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  const submit = () => {
    console.log('author',BookData)
    //  filteredData.map((data, index) => {
    //   if(value === data.title){
         
    //      console.log('author',data.author)}
     
     
    //  })
  }
  return (
    <div className="App">
        <button onClick={submit}>submit</button>
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    
    </div>
  );
}

export default App;
