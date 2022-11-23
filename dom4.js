var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var text=e.target.value.toLowerCase();
    console.log(text);
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsbyTagName('Li')
    Array.from(items).forEach(function(item) {
        var itemName= item.firstChild.textcontent;
        if (itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}