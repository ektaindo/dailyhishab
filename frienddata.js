async function pickFriendInputValue(){
  let frndElem = document.getElementById("frndnm")
  let frndName = frndElem.value
  console.log('FriendName',frndName);

  let frndEmailElem = document.getElementById("frndemail")
  let frndEmail = frndEmailElem.value
  console.log("Friend email", frndEmail);

  let frndMobElem = document.getElementById("frndMobno")
  let frndMobNo = frndMobElem.value
  console.log("Friend's Mobile no", frndMobNo);

  let mobileInValid = false
  if (frndMobNo.length > 10 || parseInt(frndMobNo) < 6000000000 || frndMobNo == "") {
   mobileInValid = true
    // alert("Enter valid mobile number")
    // return;
}

  if (frndName == "" || frndEmail == "" || mobileInValid) {
    alert("Please fill valid details")
    return;
  }
  let friendRecordrow =  {frndName, frndEmail, frndMobNo}

  let insert = await firebaseWrapper.insert('friendRecord', friendRecordrow)
    alert("Friend data submitted successfully")
    resetFrndRecord()
}
 function resetFrndRecord(){
   let frndElem = document.getElementById('frndnm')
   frndElem.value = ""
   console.log(frndElem.value);

   let fEmailElem= document.getElementById("frndemail")
   fEmailElem.value=""
   console.log(fEmailElem.value);

   let frndMobelem3= document.getElementById("frndMobno")
   frndMobelem3.value=""
   console.log(frndMobelem3.value);
 }
