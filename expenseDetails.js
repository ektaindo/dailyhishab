
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
console.log(uId);

async function showExpenses() {
  let row = await firebaseWrapper.getRow('transections', uId)
  console.log(row);
  let expense = "<h5>Name: </h5>"+row.name+"<br><h5>Expense Amount: </h5>"+row.amount+"<br><h5>Date: </h5>"+row.date+"<br><h5>Paid-By:</h5>"+row.payment
  document.getElementById("grpExpDetail").innerHTML=expense
  console.log(row);
  console.log(typeof row);
}


async function showGroupDetails() {
  let exprow = await firebaseWrapper.getRow('transections', uId)
  let groupuId = exprow.group
  let row = await firebaseWrapper.getRow('groupmember', groupuId)
  console.log(row);
  let group = "<h5>Group Name: </h5>"+row.groupname+"<br><h5>Group Type: </h5>"+row.grouptype+"<br><h5>Group Members: </h5>"+row.members
  document.getElementById("grpDetail").innerHTML = group
}

showExpenses()
showGroupDetails()
