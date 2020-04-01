
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

let groupuId = getUIdFromUrl()
console.log("frnduId" , uId);
async function showFrndDetails() {
  console.log('groupuId in fn', uId);
  let row = await firebaseWrapper.getRow('friendRecord', uId)
  console.log(row);
    let friend = "<h5>Friend Name: </h5>"+row.frndName+"<br><h5>Friend Email Id: </h5>"+row.frndEmail+"<br><h5>Friend Mobile No: </h5>"+row.frndMobNo+"<br>"
  document.getElementById("frndDetail").innerHTML = friend
}

async function showExpenses() {
  let rows = await firebaseWrapper.getRowsWhere("transections", "friend", uId)
  let frndExpense = document.getElementById("frndExpDetail")
  console.log(rows);
  let trs = ""
  let srNo = 0
  let total = 0
  for (let i=0; i<rows.length; i++) {
    let expense = rows[i]
    srNo++
    let totalAmount = 0
    if (rows[i].amount > 0) {
      totalAmount = rows[i].amount
    }
    trs += "<tr><td>"+srNo+`</td><td> <a href="../expense/editexpense.html?uId=${expense.uId}">`+ expense.name +"</a></td><td>"+ expense.amount+"</td><td>"+expense.date+"</td><td>"+expense.categories+"</td><td>"+expense.payment+ `</td><td><a href="editexpense.html?uId=${expense.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${expense.uId}")'>Delete</button><br></td></tr>`
    total += totalAmount
}
let template = `<br><table border=2><tr><th>S.No</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
frndExpense.innerHTML = template
let tot = document.getElementById("total")
tot.innerHTML = "<br><b>Total:"+ total
  //let expense = "<h5>Name: </h5>"+row.name+"<br><h5>Expense Amount: </h5>"+row.amount+"<br><h5>Date: </h5>"+row.date+"<br><h5>Paid-By:</h5>"+row.payment
  // document.getElementById("frndExpDetail").innerHTML=expense
  // console.log(row);
  // console.log(typeof row);
}
showFrndDetails()
showExpenses()
