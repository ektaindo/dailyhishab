async function signUp() {
  let fullnameElem= document.getElementById("fullname")
  let fullName = fullnameElem.value
  console.log("fullName:", fullName);
  let emailElem= document.getElementById("emailid")
  let emailId = emailElem.value
  console.log("Email Id:",emailId);
  let mobNoElem= document.getElementById("mobno")
  let mobileNo = mobNoElem.value
  console.log("Mobile no:",mobileNo);
  let passElem = document.getElementById("pass1")
  let passw = passElem.value
  console.log(`Password:`,passw);
  let confElem = document.getElementById("confirmpass")
  let confirmPassword= confElem.value
  console.log(`Confirm Password:`,confirmPassword);

  let mobileInValid = false
  if (mobileNo.length > 10 || parseInt(mobileNo) < 6000000000 || mobileNo    == "") {
   mobileInValid = true
}

  if (fullName =="" || emailId == "" || passw == "" || confirmPassword == "" || mobileInValid) {
    alert("Please fill valid inputs")
    return;
  }
  if (passw !== confirmPassword) {
    alert("Password and confirm Password is not matching")
    return;
  }
  let signup = await firebaseWrapper.signup(emailId, passw)
  console.log(signup);
  alert("You have signed up successfully")
  location.href = "index.html"
}

function resetdata() {
  let fullnameElem= document.getElementById("fullname")
  fullnameElem.value= ""
  let mobNoElem= document.getElementById("mobno")
  mobNoElem.value=""
  let emailElem= document.getElementById("emailid")
  emailElem.value=""
  let passElem = document.getElementById("pass1")
  passElem.value=""
  let confElem = document.getElementById("confirmpass")
  confElem.value=""
}
