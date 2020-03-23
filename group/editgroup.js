function getUIdFromUrl(){
  let url_string = location.href
  console.log('url string', url_string);
  let url = new URL(url_string);
  let params = url.searchParams
  console.log('params', params);
  let uId = params.get("uId");
  console.log(uId);
  return uId
}

let uId = getUIdFromUrl()

async function getRow(rowId){
  let row = await firebaseWrapper.getRow('groupRecord', rowId)
  console.log(row);
  console.log(typeof row);

  let grpElem = document.getElementById('grpnm')
  grpElem.value = row.groupname

  let grptypeElem= document.getElementById("grptype")
  grptypeElem.value = row.grouptype

}
async function pickInputValue(){
  console.log(uId);
  let grpElem = document.getElementById('grpnm')
  let groupname = grpElem.value
  console.log('Group Name:', groupname);

  let grptypeElem= document.getElementById("grptype")
  let grouptype = grptypeElem.value
  console.log('Type Of Group:', grouptype);

  if (groupname == "" || grouptype == "") {
    alert("Please fill all details")
    return;
  }
    let row =  {groupname, grouptype}
    let update = await firebaseWrapper.update('groupRecord', uId, row)
    alert("Group data updated successfully")
    location.href = `viewgroup.html`

}
getRow(uId)
