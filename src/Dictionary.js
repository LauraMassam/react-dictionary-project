import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        // Documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
            <Results results = {results} />
        </div>
    );
}