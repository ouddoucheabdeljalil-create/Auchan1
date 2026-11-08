
const form = document.getElementById('form')
const name1 = document.getElementById('name')
const email = document.getElementById('email')
const emailMsg = document.getElementById('msg-email')
const nameMsg = document.getElementById('msg-name')

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/ ;
const nameRegex = /^.{2,}$/ ; 

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    let x = emailRegex.test(email.value)
        if(x === false){
            console.log('eeeeeeee')
            emailMsg.textContent = 'Email invalide'
            
        }
        else{
            emailMsg.textContent = ''
        }
        let y = nameRegex.test(name1.value)
        if(y === false){
            console.log('eeeeeeee')
            nameMsg.textContent = 'Le nom doit contenir au moins 2 caractères'
        }
        else{
            nameMsg.textContent = ''
        }
})
