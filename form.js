// form validation



// this will give us the value of our input tag with the id name


let form = document.getElementById('form-reg')
let messageActions = document.getElementById('message-actions')
form.addEventListener('submit', (event) =>{ // || function (event) {}
    //}

    event.preventDefault();
    console.log('123')

    let fullname = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (fullname ===''){
        messageActions.textContent ="PLEASE ENTER YOUR NAME!!!";
        messageActions.style.color ='red';
    return;
    }

    if (email === ''){
        messageActions.textContent = 'PLEASE ENTER YOUR EMAIL';
        messageActions.style.color = 'red';
    return;
    }

    if (age === '' || isNaN(age)) {

        messageActions.textContent = 'ENTER YOUR AGE';
        messageActions.style.color = 'red';
     return;
    }   

    if(message.length > 50){
      messageActions.textContent = " Cannot enter more than 50 characters"
       messageActions.style.color = 'red';
       return
    }

     if (message === '') {
        messageActions.textContent = 'PLEASE ENTER YOUR MESSAGE';
        messageActions.style.color = 'purple'
        return;
     }else      messageActions.textContent = 'Form submitted successfully, Thank you';
     messageActions.style.color = 'green'


});





