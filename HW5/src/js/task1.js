var date = new Date().getHours();
var login = prompt('Enter your login');

function checkEmptyDate(el) {
    if (el === null) {
        alert('Отменено');
    }
    else if (el === ""){
        alert('Отменено')
    }
}
checkEmptyDate(login);

if (login.length < 4){
    alert('I dont know any users having name length less than 4 symbols');
}

else if(login === "User"){
    var password = prompt('Enter your password:');
    checkEmptyDate(password);
    if (password === 'SuperUser') {
        if (date < 20){
            alert('Good day');
        }
        else if(date >= 20){
            alert('Good Evening')
        }
    }
    else {
        alert('Неверный пороль!')
    }
}


