// Exercise 6: Modify Query Parameters
// - Change the query parameter sort to 'desc'
// - Add a new parameter page=3
// - Remove query
// - Print the final URL:
//   https://app.com/search?sort=desc&page=3
// Hint: .searchParams.set(), .searchParams.append(), .searchParams.delete()
//
// Run: node ex6.js

const { URL } = require("url");

const urlStr = 'https://app.com/search?query=node&sort=asc';
const myUrl = new URL(urlStr);

// write your code here
myUrl.searchParams.set('sort', 'desc');
myUrl.searchParams.append('page', '3');
myUrl.searchParams.delete('query');
console.log(myUrl.toString());
