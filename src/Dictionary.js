import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        // Documentation: https://dictionaryapi.dev/
        let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

        // Documentation: https://www.pexels.com/api/
        let pexelsApiKey = "563492ad6f917000010000016947c8bd0a784eea8c60e8c35f58409b";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                <h1>What word would you like to look up?</h1>
                <div className="search-form">
                <form className="keyword-search-box" onSubmit = {handleSubmit}>
                    <span className="col search-box">
                    <input 
                    className ="keyword-search-box-input"
                    type="search" 
                    onChange = {handleKeywordChange}
                    defaultValue={props.defaultKeyword}
                    />
                    </span>
                    <span className="col">
                    <button
                    className="keyword-search-button"
                    type="submit"
                    >
                    Search
                    </button>
                    </span>
                </form>
                </div>
            <div className="row">
            <div className="col-6">
            <Results results = {results} />
            </div>
            <div className="col-6">
            <Photos photos = {photos} /> 
            </div>
            </div>
        </div>
     );  
    }else{
        load();
        return "Loading";
    }
}