var nom = document.querySelector('#nom');
var prenom = document.querySelector('#prenom');
var email = document.querySelector('#mail');
var password = document.querySelector('#password');
var confirmer = document.querySelector('#confirmer');
var formulaire = document.querySelector('#formulaire')
let message = document.querySelector('.message');
let message1 = document.querySelector('.message1')
console.log(nom);



if(!localStorage.getItem("users")){
localStorage.setItem("users" , JSON.stringify([]))
console.log(localStorage.getItem("users"));
}


formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let user={
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password:password.value,
        confirmer:confirmer.value
    }
    console.log(nom.value);
    if (password.value != confirmer.value) {
        message.innerHTML='Les mots de passe sont inccorts'
        message.style.color = 'red'
        message.style.textAlign = 'center'
        message.style.border = 'red 2px solid'
        message.style.borderRadius = '10px'
        message.style.opacity = '0.6'

    } else if (user.nom  === "" || user.prenom === ""  || user.email === "" || password.prenom === "" || confirmer.prenom === "") {

        message1.innerHTML='Remplicer tout les champs .'
        message1.style.color = 'red'
        message1.style.textAlign = 'center'
        message1.style.border = 'red 2px solid'
        message1.style.borderRadius = '10px'
        message1.style.opacity = '0.6'
    }else {
        window.location.assign("connexion")
    }

   let users =   JSON.parse(localStorage.getItem("users"));

    console.log(users);
    let local = users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    console.log('userfff', JSON.parse(localStorage.getItem("users")) );
})