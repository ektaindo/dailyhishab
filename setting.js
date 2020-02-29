function settingpage(){
  let setdata ={name: "ekta", email:"ekta.indo@gmail.com", password:"ekta123", mobileNo:8765676769, currency:"Dollar", language:"English", timezone:"5.5"}
  let nameElem = document.getElementById("name")
  nameElem.value = setdata.name

  let emailElem = document.getElementById("email")
  emailElem.value = setdata.email

  let passElem = document.getElementById("password")
  passElem.value = setdata.password

  let mobNoElem = document.getElementById("mobnum")
  mobNoElem.value = setdata.mobileNo

  let currencyElem = document.getElementById("currency")
  currencyElem.value = setdata.currency

  let langElem = document.getElementById("lang")
  langElem.value = setdata.language

  let timezoneElem = document.getElementById("timzone")
  timezoneElem.value = setdata.timezone

}

function updateProfile() {
  let nameElem = document.getElementById("name")
  let name = nameElem.value

  let emailElem = document.getElementById("email")
  let email= emailElem.value

  let passElem = document.getElementById("password")
  let password = passElem.value

  let mobNoElem = document.getElementById("mobnum")
  let mobileNo= mobNoElem.value

  let currencyElem = document.getElementById("currency")
  let currency = currencyElem.value

  let langElem = document.getElementById("lang")
  let language = langElem.value

  let timezoneElem = document.getElementById("timzone")
  let timezone = timezoneElem.value

  let updateProf = {name: name, email: email, password: password, mobileNo: mobileNo, currency:currency, language: language, timezone: timezone}
  // let updateProf = {"name": name, "email": email, "password": password, mobileNo: mobileNo, currency:currency, language: language, timezone: timezone}
  console.log(updateProf);
}

settingpage()
