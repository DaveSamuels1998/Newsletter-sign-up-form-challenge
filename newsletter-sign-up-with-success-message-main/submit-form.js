let email;

document.getElementById('submit').onclick = function(){
    email = document.getElementById('email').value; /* gets the value of the email */
  
    if(email.trim() !== "" /* checks if input field is empty or not */){
        alert("You are now subscribed!")
    }
}