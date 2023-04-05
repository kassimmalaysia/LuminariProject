import React, { useState } from "react";
 import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { ModuleInfo } from "@/pages/dashboard"; 





function SearchBar({ data,placeHolder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleItemClick = (value) => {
    const title = value.title
    setWordEntered(value.title);
    setFilteredData([]);
   
    ;
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeHolder}
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
          {filteredData.slice(0,5).map((value, key) => {
            return (
              
              
              <Link to={{pathname: "/dashboard/ModuleInfo"}}>
              <a className="dataItem" 
              
              onClick={() => handleItemClick(value)} >
                
                
                <p>{value.title} </p>
               
              </a>
             
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;