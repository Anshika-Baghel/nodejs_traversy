function generateRandomNumber(){
    return Math.floor(Math.random()*100)+1;
}
function celciusToFahrenheit(celcius){
    return (celcius*9)/5+32;
}
// we can use the :module.exports=function_name; if we have only 1 function to export.I we have more than 1 function to export we have to create object and include all the functionds in that object that are to be exported.
// below is the example of exporting a single function named generateRandomNumber.
//module.exports=generateRandomNumber;
module.exports={
    generateRandomNumber,
    celciusToFahrenheit,
}