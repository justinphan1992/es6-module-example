//Normal Import
 import textMessage, { a, add, object } from './Lib' 
//All Import
//import * as Lib from './Lib'
const {foo, bar} = object
document.getElementById('result').innerHTML = textMessage
document.getElementById('other').innerHTML = add(foo, bar)