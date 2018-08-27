function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 5) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "lol") {
    alert('Welcome. Remember to thank Jake for his effort!');
    break;
    } 
    testV+=1;
    var pass1 = 
    prompt('Access Denied - Password Incorrect, Please Try Again.','');
    }
    if (pass1.toLowerCase()!="password" & testV == 5) 
    history.go(-1);
    return " ";
    } 

passWord();