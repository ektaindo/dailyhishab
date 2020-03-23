
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
  document.getElementById("frndExpDetail").innerHTML=expense
  console.log(row);
  console.log(typeof row);
}

showExpenses()
