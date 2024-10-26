const username = document.getElementsByName('username');
const password = document.getElementsByName('password');
const cfpass = document.getElementsByName('cfpw');
const firstname = document.getElementsByName('firstname');
const lastname = document.getElementsByName('lastname');
const email = document.getElementsByName('email');
const telephone = document.getElementsByName('tele');
const region = document.getElementsByName('region');
const address = document.getElementsByName('address');

function signup(){
    let u = username[0].value;
    let p = password[0].value;
    let c = cfpass[0].value;
    let f = firstname[0].value;
    let l = lastname[0].value;
    let e = email[0].value;
    let t = telephone[0].value;
    let r = region[0].value;
    let a = address[0].value;

    if(u === '' || p === '' || c === '' || f === '' || l === ''
        || e === '' || t === '' || r === '' || a === ''){
        alert("Please fill all fields!!");
        return;
    }
    if(c !== p){
        alert("Password not confirmed!");
        return;
    }
    if(!validateName(f)){
        alert("Invalid first name!");
        return;
    }
    if(!validateName(l)){
        alert("Invalid last name!");
        return;
    }
    if(!validateEmail(e)){
        alert("Invalid email!");
        return;
    }
    if(!validateNumber(t)){
        alert("Invalid phone number!");
        return;
    }
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateNumber(telephone){
    const regex = /^\d+$/;
    return regex.test(telephone);
}

function validateName(name){
    const regex = /^[a-zA-Z]+$/s;
    return regex.test(name);
}