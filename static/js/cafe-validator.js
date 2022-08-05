function validate(){
    const fname = document.getElementById('first_name').value;
    const lname= document.getElementById('last_name').value;
    const sic = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    let error = false;

    if(fname == ""){
        document.getElementById("first_name_error").innerHTML = "First Name is required";
        error = true;
    }else{
        document.getElementById("first_name_error").innerHTML = "";
    }
    if(lname == ""){
        document.getElementById("last_name_error").innerHTML = " Last Name is required";
        error = true;
    }else{
        document.getElementById("last_name_error").innerHTML = "";
    }
    if(sic == ""){
        document.getElementById("sic_error").innerHTML = " SIC is required";
        error = true;
    }else{
        document.getElementById("sic_error").innerHTML = "";
    }
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.'); 
    if(email==""){
        document.getElementById("email_error").innerHTML="Email is required";
        error=true;
    }else if(atPos <= 0 || dotPos <=0 || (dotPos-atPos) <=4 || dotPos == email.length -1){
        document.getElementById("email_error").innerHTML='Please provide a valid mail';
        error = true;
    }else {
        document.getElementById("email_error").innerHTML="";
    }
    if(password===""){
        document.getElementById("password_error").innerHTML="Password is required";
        error=true;
    }else if(password.length <8 || password.length >16){
        document.getElementById("password_error").innerHTML="Paasword must be 8-16 chacracter long";
        error = true;
    }else if(!password.match(/[a-z]/)){
        document.getElementById("password_error").innerHTML="Paasword must contain a lowercase chacracter ";
        error = true;
    }else if(!password.match(/[A-Z]/)){
        document.getElementById("password_error").innerHTML="Paasword must contain a uppercase chacracter ";
        error = true;
    }
    else if(!password.match(/[0-9]/)){
        document.getElementById("password_error").innerHTML="Paasword must contain a number";
        error = true;
    }else if(!password.match(/[@!#$%^&*]/)){
        document.getElementById("password_error").innerHTML="Paasword must contain a special character";
        error = true;
    }
    else{
        document.getElementById("password_error").innerHTML="";
    }
    if(password2===""){
        document.getElementById("password2_error").innerHTML=" Confirm password is required";
        error=true;
    }else if(password !== password2){
        document.getElementById("password2_error").innerHTML="Confirm password and password must be same";
        error = true;
    }else{
        document.getElementById("password2_error").innerHTML="";
    }
    if(error){
        return false;

    }else{
        return true;
    }
}