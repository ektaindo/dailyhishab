async function signUp() {
  let fullnameElem= document.getElementById("fullname")
  let fullName = fullnameElem.value
  console.log("fullName:", fullName);
  let dobElem= document.getElementById("dob")
  let dob = dobElem.value
  console.log("dob:", dob);
  let emailElem= document.getElementById("emailid")
  let emailId = emailElem.value
  console.log("Email Id:",emailId);
  let passElem = document.getElementById("pass1")
  let passw = passElem.value
  console.log(`Password:`,passw);
  let confElem = document.getElementById("confirmpass")
  let confirmPassword= confElem.value
  console.log(`Confirm Password:`,confirmPassword);

  if (fullName =="" || dob=="" || emailId == "" || passw == "" || confirmPassword == "") {
    alert("Please fill all the input fields")
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
  let dobElem= document.getElementById("dob")
  dobElem.value=""
  let emailElem= document.getElementById("emailid")
  emailElem.value=""
  let passElem = document.getElementById("pass1")
  passElem.value=""
  let confElem = document.getElementById("confirmpass")
  confElem.value=""
}
