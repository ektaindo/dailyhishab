function getUIdFromfriendUrl() {
  let url_string = location.href
  console.log('url string:', url_string);
  let url = new URL(url_string);
  let params = url.searchParams
  console.log('params', params);
  let uId = params.get("uId");
  console.log(uId);
  return uId
}
let uId = getUIdFromfriendUrl()

async function getRow(rowId) {
  let frndRow = await firebaseWrapper.getRow('friendRecord', rowId)
  console.log(frndRow);
  console.log(typeof frndRow);

  let nameElem = document.getElementById('frndNm')
  nameElem.value = frndRow.frndName
  let emailElem = document.getElementById(`email`)
  emailElem.value = frndRow.frndEmail
  let mobnoMElem = document.getElementById(`mobno`)
  mobnoMElem.value = frndRow.frndMobNo

}

async function pickfrndInputValue(){
  let frndNElem = document.getElementById("frndNm")
  let frndName = frndNElem.value
  console.log('friend Name',frndName);
  let frndemailElem = document.getElementById("email")
  let frndEmail = frndemailElem.value
  console.log("friend email",frndEmail);

  let frndmobElem = document.getElementById("mobno")
  let frndMobNo = frndmobElem.value
  console.log("friend mob no",frndMobNo);

  let mobileInValid = false
  if (frndMobNo.length > 10 || parseInt(frndMobNo) < 6000000000 || frndMobNo == "") {
   mobileInValid = true
 }
 if (frndName == "" || frndEmail == "" || mobileInValid) {
   alert("Please fill valid details")
   return;
 }

  let friendRecordrow =  {frndName, frndEmail, frndMobNo}
  let update = await firebaseWrapper.update('friendRecord', uId, friendRecordrow)
    alert("Friend data Updated successfully")
    location.href = `friendTableview.html`
}
getRow(uId)
