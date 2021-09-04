import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();

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
        </div>
    );
}