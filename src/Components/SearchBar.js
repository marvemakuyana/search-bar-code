import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if(searchWord ==="")
    { console.log('empty ' ,searchWord)}
    else{
     console.log('full' ,searchWord)
    }
    
    const newFilter = data.filter((value) => {
      if(wordEntered.length > 1)
    {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    }
     
    });
    console.log('filtered' ,filteredData)

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
 

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    //console.log(filteredData)
  };

  const suggestionSelected = (value) => {
  //  const test = filteredData.map((data, index) => {
  //    if(value === data.title){
        
  //       console.log('author',data.author)}
    
    
  //   })
    
    setWordEntered(value)
    setFilteredData([])
    
  }

  const submit = () => {
    console.log('author',wordEntered)
    //  filteredData.map((data, index) => {
    //   if(value === data.title){
         
    //      console.log('author',data.author)}
     
     
    //  })
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
          <div className="dataResult">
          
            {filteredData.slice(0, 15).map((value, key) => <p key={key} onClick={() => suggestionSelected(value.title)}>{value.author}, {value.title}</p>)}
        
       
          </div>
          
       
      )}

      {/* <button onClick={submit}>submit</button> */}

    </div>
  );
}

export default SearchBar;
