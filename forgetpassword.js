function resetNewPassword() {
let emailElem= document.getElementById("emailid")
let emailId = emailElem.value
console.log("Email Id:",emailId);
let passElem = document.getElementById("pass1")
let passw = passElem.value
console.log(`Password:`,passw);
let confElem = document.getElementById("confirmpass")
let confirmPassword= confElem.value
console.log(`Confirm Password:`,confirmPassword);

if (emailId == "" || passw == "" || confirmPassword == "") {
  alert("Please fill all the input fields")
  return;
}
if (passw !== confirmPassword) {
  alert("Password and confirm Password is not matching")
  return;
}
alert("Password Reset successfully")
resetdata()
}

function resetdata() {
  let emailElem= document.getElementById("emailid")
  emailElem.value=""
  let passElem = document.getElementById("pass1")
  passElem.value=""
  let confElem = document.getElementById("confirmpass")
  confElem.value=""
}
