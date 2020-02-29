async function loginpage() {
  let emailElem = document.getElementById("email")
  let emailId = emailElem.value
  console.log(emailId);
  let passElem = document.getElementById("password")
  let password = passElem.value
  console.log(password);

  if (emailId == "" || password =="") {
    alert("Please fill all the input fields")
    return;
  }

  try{
    let login = await firebaseWrapper.login(emailId, password)
    console.log(login);
    location.href = `dashboard.html`
  }catch(err){
    console.log('anp err', err);
    if(err.code == "auth/wrong-password"){
      alert(err.message)
    } else if(err.code == "auth/user-not-found"){
      alert(err.message)
    }else {
      alert(err.message)
    }
  }
}

async function sendMailForResetPass() {
  let emailElem = document.getElementById("email")
  let emailId = emailElem.value

  if (emailId !== "") {
    let sendMail = await firebaseWrapper.sendResetPasswordEmail(emailId)
    console.log(sendMail);
    alert("Password Reset mail sent successfully, please check your mail")
  }else {
    alert("Please enter your email")
  }
}
// function resetData(){
//   let emailElem = document.getElementById('email')
//   emailElem.value = ""
//   console.log(emailElem.value);
//   let passElem= document.getElementById("password")
//   passElem.value=""
//   console.log(passElem.value);
