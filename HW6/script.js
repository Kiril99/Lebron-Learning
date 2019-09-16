var data = document.getElementById('title-input');
var addButton = document.getElementById('add-button');
var list = document.getElementsByClassName('list-box')[0];


 addButton.addEventListener('click', function(event) {
     if (data.value !== '') {
         var liElement = document.createElement('li');
         list.appendChild(liElement).innerHTML = `<p class=\"text-list\"><span class=\"check\">&#10004;</span><span>${data.value}</span></p> <span class=\"close\">&#10006;</span>`;
     }
 },false);

document.querySelector('ul').addEventListener('click', function(event) {
        if (event.path[0].className !== 'close' && event.path[0].classList[1] !== 'activeElement') {
            let element = event.path[0].children[0].children[1];
            element.style.textDecoration = "line-through";
            let check = event.path[0].children[0].children[0];
            check.style.visibility = 'unset';
            event.path[0].classList.add('activeElement');
        }
        else if (event.path[0].className !== 'close' && event.path[0].classList[1] === 'activeElement') {
            let element = event.path[0].children[0].children[1];
            element.style.textDecoration = "none";
            let check = event.path[0].children[0].children[0];
            check.style.visibility = 'hidden';
            event.path[0].classList.remove('activeElement');
            console.log(event.path[0].classList)
        }
        else {
            event.path[1].remove()
        }

}, false);


