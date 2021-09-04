import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")

    function search(event){
        event.preventDefault();
        alert (`searching for the definition of "${keyword}"`);
    }
    
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="search-form">
            <form onSubmit = {search}>
                <input 
                type="search" 
                placeholder="Enter a word"
                onChange = {handleKeywordChange}
                />
                <button
                className="keyword-search-button"
                type="submit"
                >
                Search
                </button>
            </form>
        </div>
    );
}