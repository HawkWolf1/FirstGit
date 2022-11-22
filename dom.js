/*    console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

console.log(document.getElementById('header-title'))      */
/* var headerTitle = document.getElementById('header-title')

headerTitle.style.borderTop = 'solid 3px #000'
headerTitle.style.borderRight = 'solid 3px #000'
headerTitle.style.borderLeft = 'solid 3px #000'
headerTitle.style.borderBottom = 'solid 3px #000'

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'

for (var i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4'
}
items[3].style.backgroundColor = 'green'

for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold'
}


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'

for (var i=0; i<items.length; i++){
    li[i].style.backgroundColor = 'red'
}*/


/* var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white'; */

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green' 
    even[i].style.color = 'green' 
}