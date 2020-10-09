let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }
            else {
                const error = new Error(`error ${url}`)
                return callback (erro, null)
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error, all) {
    if(error) return console.log(error)
    fetchData(API + all.results[0].id, function(error, character){
        if(error) return console.log(error)
        fetchData(character.origin.url, function(error, location) {
            if(error) return console.log(error)
            console.log(all.info.count)
            console.log(character.name)
            console.log(location.name)
            console.log(location.type)
            console.log(location.dimension)
        })
    })
})