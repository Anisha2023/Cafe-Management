function validate(){
    const name = document.getElementById('name').value;
    const mobile= document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const term = document.getElementById('Suggestions').value;

    let error = false;

    if(name == ""){
        document.getElementById("name_error").innerHTML = "Name is required";
        error = true;
    }else{
        document.getElementById("name_error").innerHTML = "";
    }
    if(mobile==""){
        document.getElementById("mobile_error").innerHTML="Mobile number is required";
        error=true;
    }else if(mobile.length !=10 || isNaN(mobile)){
        document.getElementById("mobile_error").innerHTML="please enter a 10 digit mobile number ";
        error=true;
    }else{
        document.getElementById("mobile_error").innerHTML="";
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
    if(name == ""){
        document.getElementById("Suggestions_error").innerHTML = "Suggestions is required";
        error = true;
    }else{
        document.getElementById("Suggestions_error").innerHTML = "";
    }
    if(error){
        return false;

    }else{
        return true;
    }
}