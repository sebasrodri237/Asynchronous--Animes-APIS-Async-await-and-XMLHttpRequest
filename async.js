const fetchData = require('utils/fetchData');
//Require the module fetchData to make the request, (it's only a external function)
const API = 'https://ghibliapi.herokuapp.com/films/';
//URL to get The Studio Ghibli Films

const asyncFunction = async url_api => {
// Async function (arrow function)
    try{
    //Try to get the request and the data
        const movie = await fetchData(url_api);
        //
        const character = await fetchData(`${movie[8].people[0]}`);
        const specie = await fetchData(character.name);

        console.log(`The name of the movie is: ${movie[8].title}`);
        console.log(`${character[8].people[0]}`);
        console.log(`His species is: ${specie.name}`);

    }catch(error){
    //When the request is not complete, catch the error
        console.error(error);
    }
}

console.log('Before');
asyncFunction(API);
console.log('After');

