import React, { useState } from "react";
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { Link, useNavigate } from "react-router-dom";
import { ModuleInfo } from "@/pages/dashboard";






function SearchBar({ data,placeHolder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [wordEntered, setWordEntered] = useState("");
 
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const navigate = useNavigate();
  // Add state variables for advanced search options
  const [yearFilter, setYearFilter] = useState("");
  const [timingFilter, setTimingFilter] = useState("");
  const [prereqFilter, setPrereqFilter] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      // Filter by title
      if (value.title.toLowerCase().includes(searchWord.toLowerCase())) {
        // Filter by year
        if (!yearFilter || value.year.toLowerCase() === yearFilter.toLowerCase()) {
          // Filter by timing
          if (!timingFilter || value.timing.toLowerCase() === timingFilter.toLowerCase()) {
            // Filter by prerequisites
            if (!prereqFilter || value.prerequisites.toLowerCase().includes(prereqFilter.toLowerCase())) {
              return true;
            }
          }
        }
      }
      return false;
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
    setSelectedItemIndex(-1);
  };
  const handleItemClick = (value) => {
    setWordEntered(value.title);
    setFilteredData([]);
    setSelectedItemIndex(-1);
    setSelectedModule(value);
    navigate("/dashboard/module-info", { replace: true, state: {title: value.title}});
 
   
   
    ;
  };
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (selectedItemIndex !== -1) {
        handleItemClick(filteredData[selectedItemIndex]);
      } else if (filteredData.length === 1) {
        handleItemClick(filteredData[0]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1
      );
    }
  };
  

  return (
    <div className="search">
     
      <div className="searchInputs">
      <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <input
          type="text"
          placeholder={placeHolder}
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown={ handleKeyPress}
        />
        {/* <input
          type="text"
          placeholder="Year"
          value={yearFilter }
        onChange={(e) =>setYearFilter(e.target.value)}
          />
        <input
        type="text"
        placeholder="Timing"
        value={timingFilter}
        onChange={(e) => setTimingFilter(e.target.value)}
          />
        <input
        type="text"
        placeholder="Prerequisites"
        value={prereqFilter}
        onChange={(e) => setPrereqFilter(e.target.value)}
          /> */}
        
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0,5).map((value, index) => {
            return (
              
              
              
              <a key={index}
              className={`dataItem ${selectedItemIndex === index ? "active" : ""} ${selectedItemIndex === index ? "selected" : ""}`}
              onClick={() => handleItemClick(value)} >
                
                {/*  */}
                <p>
                
                {value.title} 
                </p>
               
              </a>
              
             
              
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;