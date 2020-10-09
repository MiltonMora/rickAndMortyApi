const fetchData = require('../utils/fetch');
const API = 'https://rickandmortyapi.com/api/characte/'

fetchData(API)
.then(all => {
    console.log(all.info.count)
    return fetchData(`${API}${all.results[0].id}`)
})
.then(character => {
    console.log(character.name)
    return fetchData(character.origin.url)
})
.then(location => {
    console.log(location.name)
    console.log(location.type)
    console.log(location.dimension)
})
.catch((error) => console.log(error));