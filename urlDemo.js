import url from'url';
const urlString='https://www.google.com/search?q=hello+world';
//URL object
const urlObj=new URL(urlString);
console.log(urlObj.pathname);