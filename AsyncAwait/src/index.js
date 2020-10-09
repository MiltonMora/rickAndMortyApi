const fetchData = require('../utils/fetch');
const fectcData = require('../utils/fetch');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url) => {
    try {
        const all = await fetchData(url)
        const character = await fectcData(`${url}${all.results[0].id}`)
        const location = await fetchData(character.origin.url) 
        return {
            all,
            character,
            location,
        }
    }
    catch(error) {
        console.log(error)
    }
}

const data = anotherFunction(API)
data.then((data) => {
    console.log(data.all.info.count)
    console.log(data.character.name)
    console.log(data.location.name)
    console.log(data.location.type)
    console.log(data.location.dimension)
})
.catch((error) => {
    console.log("mirame soy un error")
    console.log(error)
})