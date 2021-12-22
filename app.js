let userName = document.querySelector('#userName');
let userSurname = document.querySelector('#userSurname');
let userId = document.querySelector('#userId');
let btn = document.querySelector('.btn');
const form = document.querySelector('form');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name: userName.value,
            surname: userSurname.value,
            user_ID: userId.value
        })
    }).then(response => response.json())
    .then(response =>{
        console.log(`response ${response}`)
    }).catch(err => {
        console.log(`Error ${err}`)
    })
})

