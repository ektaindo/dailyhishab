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
  let row = await firebaseWrapper.getRow('groupRecord', groupuId)
  console.log(row);
    let group = "<h5>Group Name: </h5>"+row.groupname+"<br><h5>Group Type: </h5>"+row.grouptype+"<br>"
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
       trs += "<tr><td>"+srNo+`</td><td> <a href="../expense/editexpense.html?uId=${expense.uId}">`+ expense.name +"</a></td><td>"+ expense.amount+"</td><td>"+expense.date+"</td><td>"+expense.categories+"</td><td>"+expense.payment+ `</td><td><a href="editexpense.html?uId=${expense.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${expense.uId}")'>Delete</button><br></td></tr>`
       total += totalAmount
   }
   let template = `<br><table border=2><tr><th>S.No</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
   grpExpense.innerHTML = template
   let tot = document.getElementById("total")
   tot.innerHTML = "<br><b>Total:"+ total
}

//get friends from friends Table
//create dropdown of friends
//add friends after selecting from grpDropdown
//get the selected data
async function frndDropdown() {
      let frnds = await firebaseWrapper.getAll('friendRecord')
      let frndDropdwn = document.getElementById("addfrnd")
      let frnd = ""
      for (let i = 0; i < frnds.length; i++) {
        let friend = frnds[i]
        frnd += `<option value="${friend.uId}">${friend.frndName}</option>`
    }
      if (frnds.length == 0) {
        document.getElementById('frnd').innerHTML= "<h2>Data Not Found</h2>"
        return;
      }
        let frndTemp = `<select id = "frnddrpdwn" ><option value="">--Select Friend--</option>${frnd}</select>`
        frndDropdwn.innerHTML = frndTemp
}

async function addFriend() {
  let frndElem = document.getElementById('frnddrpdwn')
  let frndId = frndElem.value
  console.log('friend:', frndId);
  if (frndId=="") {
    alert("Please select friend")
    return;
  }
  let row =  {frndId, groupuId}
  let insert = await firebaseWrapper.insert('groupMembers', row)
  alert("GroupMember data submitted successfully")
  resetData()
}

function resetData() {
  let frndElem = document.getElementById('frnddrpdwn')
  frndElem.value = ""
}

// async function showFrnds() {
//      let frndRows = await firebaseWrapper.getRowsWhere("groupMembers", "groupuId", groupuId)
//      let frnds = document.getElementById("frndsData")
//      console.log(frndRows);
//      let trs = ""
//      let srNo = 0
//      for (let i=0; i<frndRows.length; i++) {
//        let frnd = frndRows[i]
//        srNo++
//        trs += "<tr><td>"+srNo+`</td><td><a href="../expense/editexpense.html?uId=${expense.uId}">`+ expense.name +"</a></td><td>"+ expense.amount+"</td><td>"+expense.date+"</td><td>"+expense.categories+"</td><td>"+expense.payment+ `</td><td><a href="editexpense.html?uId=${expense.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${expense.uId}")'>Delete</button><br></td></tr>`
//        total += totalAmount
//    }
//    let template = `<br><table border=2><tr><th>S.No</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
//    grpExpense.innerHTML = template
// }



showGroupExpenses()
showGroupDetails()
frndDropdown()
// showFrnds()
