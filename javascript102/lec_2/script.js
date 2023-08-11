var authentication = () => {
    let usnInp = document.getElementById('usnInp').value.trim();
    let pwdInp = document.getElementById('pwdInp').value.trim();
    if(usnInp.length == 0 || pwdInp.length == 0 ){
        alert('Please fill form!!!')
    }else{
        if(usnInp.toLowerCase() == "admin" && pwdInp.toLowerCase() == "admin"){
            alert('Welcome, Master!')
        }else{
            alert('Get out!!')
        }
    }
} 