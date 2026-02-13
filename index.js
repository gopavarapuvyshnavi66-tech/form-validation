
function check(){
    let name=document.getElementById("txt").value ;
    let password=document.getElementById("pswd").value;
    let e_mail=document.getElementById("mail").value;
    let password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let msg=document.getElementById("p1");
    if(name.length<3){
        msg.textContent="Enter valid name";
        return false;
        
    }
    if(!password_pattern.test(password)){
         msg.textContent = "Password must contain 8 characters, uppercase, lowercase, number and special character";
        return false;
    }
    if(!email_pattern.test(e_mail)){
        msg.textContent="please valid email address";
        return false;
    }
    document.getElementById("p2").textContent="form submitted succesfully";
    return true;
    
}