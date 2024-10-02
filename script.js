function maxwell(){
    var gayle= 33;
    document.getElementById("ab").innerHTML=gayle*gayle;
 }

 function validate(e) {

    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    const pass = document.getElementById('password').value;
    
    const age = document.getElementById('age').value;
    
    const msgBox = document.getElementById('message');
    
    let message = '';
    
    // Check if email is empty
    
    if (email === '') {
    
    message = 'Please enter an email.';
    
    msgBox.style.color = 'red';
    
    }
    
    // Check if password is empty or less than 8 characters
    
    else if (pass === '' || pass.length < 8) {
    
    message = 'Password must be at least 8 characters.';
    
    msgBox.style.color = 'red';
    
    }
    
    // Check if age is empty or outside the valid range
    
    else if (age === '' || isNaN(age) || age < 12 || age > 50) {
    
    message = 'Age must be between 12 and 50.';
    
    msgBox.style.color = 'red';
    
    }
    
    // If all fields are valid
    
    else {
    
    message = 'Login successful!';
    
    msgBox.style.color = 'green';
    
    }
    
    msgBox.innerText = message;
    
    }