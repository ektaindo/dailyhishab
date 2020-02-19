function loginpage() {
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
  resetData()
  //location.href = `homepage.html`
}

function resetData(){
  let emailElem = document.getElementById('email')
  emailElem.value = ""
  console.log(emailElem.value);
  let passElem= document.getElementById("password")
  passElem.value=""
  console.log(passElem.value);
}
