

import { movieSearchBox, searchList, resultGrid } from "./constant.js";
import {displayMovieList} from './PageView/view.js';
import {displayMovieDetails} from './PageView/view.js';


async function loadMovies(searchTerm){
    try{
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if(data.Response == "True") {
        displayMovieList(data.Search);
    } 

    } catch(err){
         console.log(err);
    }
}

export function getMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-list');
    }
}




export function loadDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-list');
            movieSearchBox.value = "";
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
            const movieDetails = await result.json();
            displayMovieDetails(movieDetails);
        });
    });
}



