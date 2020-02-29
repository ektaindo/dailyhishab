//get group id from location
//get group details by group id
//create one div for showing details on innerHTML
//pick div id and set group details

function getUIdFromUrl(){
  let url_string = location.href
  let url = new URL(url_string);
  let params = url.searchParams
  let uId = params.get("uId");
  console.log(uId);
  return uId
}
let groupuId = getUIdFromUrl()
console.log("groupuId" , groupuId);
async function showGroupDetails() {
  console.log('groupuId in fn', groupuId);
  let row = await firebaseWrapper.getRow('groupmember', groupuId)
  console.log(row);
  let group = "<h5>Group Name: </h5>"+row.groupname+"<br><h5>Group Type: </h5>"+row.grouptype+"<br><h5>Group Members: </h5>"+row.members
  document.getElementById("grpDetail").innerHTML = group
}

//get all expense of perticular group by id
//show expenses in Table
async function showGroupExpenses() {
     let expRows = await firebaseWrapper.getRowsWhere("transections", "group", groupuId)
     let grpExpense = document.getElementById("grpExpDetail")
     console.log(expRows);
     let trs = ""
     let srNo = 0
     let total = 0
     for (let i=0; i<expRows.length; i++) {
       let expense = expRows[i]
       srNo++
       let totalAmount = 0
       if (expRows[i].amount > 0) {
         totalAmount = expRows[i].amount
       }
       trs += "<tr><td>"+srNo+`</td><td> <a href="editexpense.html?uId=${expense.uId}">`+ expense.name +"</a></td><td>"+ expense.amount+"</td><td>"+expense.date+"</td><td>"+expense.categories+"</td><td>"+expense.payment+ `</td><td><a href="editexpense.html?uId=${expense.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${expense.uId}")'>Delete</button><br></td></tr>`
       total += totalAmount
   }
   let template = `<br><table border=2><tr><th>S.No</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
   grpExpense.innerHTML = template
   let tot = document.getElementById("total")
   tot.innerHTML = "<br><b>Total:"+ total
}



showGroupExpenses()
showGroupDetails()
