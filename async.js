const fetchData = require('C:/Users/Hp/Desktop/Cursos programacion/Javascript Practices/Asynchronous- Animes APIS, Async-await and XMLHttpRequest/utils/fetchData');
//Require the module fetchData to make the request, (it's only a external function)
const API = 'https://ghibliapi.herokuapp.com/films/';
//URL to get The Studio Ghibli Films

const asyncFunction = async url_api => {
// Async function (arrow function)
    try{
    //Try to get the request and the data
        const movie = await fetchData(url_api);
        //The instruccion await pause the async function and wait
        //to resolve the promise. First request
        const character = await fetchData(`${movie[8].people[0]}`);
        //Second request never happen if the first request is not done
        const specie = await fetchData(`${character.species}`);
        //Third request never happen if the second request is not done
        // This code is asynchronous but behaves as synchronous
        console.log(`The name of the movie is: ${movie[8].title}`);
        console.log(`The main character is: ${character.name}`);
        console.log(`His species is: ${specie.name}`);

    }catch(error){
    //When the request is not complete, catch the error
        console.error(error);
    }
}

asyncFunction(API);

