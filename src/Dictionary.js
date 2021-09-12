import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function search(){
        // Documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
        return(
            <div className = "Dictionary">
                <section>
                    <h1>What word would you like to search?</h1>
                <div className="search-form">
                <form onSubmit = {handleSubmit}>
                    <input 
                    type="search" 
                    onChange = {handleKeywordChange}
                    defaultValue={props.defaultKeyword}
                    />
                    <button
                    className="keyword-search-button"
                    type="submit"
                    >
                    Search
                    </button>
                </form>
                </div>
                </section>
            <Results results = {results} />
        </div>
     );  
    }else{
        load();
        return "Loading";
    }
}