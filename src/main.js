import{getMovies} from './fetch-data.js';
import {movieSearchBox} from './constant.js';

function main() {
    movieSearchBox.addEventListener('keyup', getMovies);
}

window.addEventListener('load', main);
