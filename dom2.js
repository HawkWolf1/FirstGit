var itemList = document.querySelector('#items');
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey'
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow'

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textcontent = 'Hello 1' 

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textcontent = 'Hello 4' 

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'magenta'*/

var newDiv = document.createElement('div');


newDiv.className = 'hello'
newDiv.id = 'hello1'

newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello world')

newDiv.appendChild(newDivText)

var container = document.querySelector('header.container');

var h1 = document.querySelector('header h1')

console.log(newDiv)

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);
