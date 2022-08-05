function validate(){
    const sic = document.getElementById('username').value;
    const password = document.getElementById('password').value;
}

let error = false;

if(sic == ""){
    document.getElementById("sic_error").innerHTML = " SIC is required";
    error = true;
}else{
    document.getElementById("sic_error").innerHTML = "";
}
if(password===""){
    document.getElementById("password_error").innerHTML="Password is required";
    error=true;
}else{
    document.getElementById("password_error").innerHTML="";
}
if(error){
    return false;

}else{
    return true;
}

