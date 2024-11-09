//import { getPosts } from "./postController.js";
import getPosts,{getPostsLength} from "./postController.js";
console.log(getPosts());
console.log(`Postength:${getPostsLength()}`);

//const generateRandomNumber=require('./utils');
// in order to import more than 1 functions, we have to import like this

// const {generateRandomNumber,celciusToFahrenheit}=require('./utils');
// console.log(`RandomNumber:${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit:${celciusToFahrenheit(54)}`)