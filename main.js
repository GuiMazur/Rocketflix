import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
  } from './api.js'

const button = document.getElementById('button');

$("button").click(function(){
    let randomNumber = String(Math.floor(Math.random()*898143)+55);
    let movieURL = BASE_URL+randomNumber+'?'+API_KEY+'&'+language;
    console.log(movieURL);
    $.getJSON(movieURL, function(result){
        document.querySelector('#movie').style.minHeight = '300px';
        if (result.poster_path != null){
            document.querySelector('#poster').removeAttribute('style');
            document.querySelector('#poster').setAttribute('src', IMG_URL + result.poster_path);
        }
        else{
            document.querySelector('#poster').setAttribute('src', './assets/poster-not-available.jpg');
        };
        document.querySelector('#movietitle').textContent = result.original_title;
        document.querySelector('#overview').textContent = result.overview;    
    })
    .fail(function() {             
        document.querySelector('#poster').removeAttribute('style');
        document.querySelector('#poster').setAttribute('src', './assets/poster-not-available.jpg');
        document.querySelector('#movietitle').textContent = 'Movie not available';
        document.querySelector('#overview').textContent = 'Movie not available';    
    });
  });
