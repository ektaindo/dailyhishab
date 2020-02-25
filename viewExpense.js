async function viewExpensetable(){
  let expenseview = await firebaseWrapper.getAll('transections')
  console.log(expenseview);
  let viewExtable = document.getElementById('expensetable')
  let trs = ""
  let total = 0
  let srNo = 0
  for (var i = 0; i < expenseview.length; i++) {
    let tableview = expenseview[i]
    srNo = 1 + i;
    let totalAmount = 0
    if (expenseview[i].amount > 0) {
      totalAmount = expenseview[i].amount
    }
    trs += "<tr><td>"+srNo+"</td><td>"+tableview.group+"</td><td>"+ tableview.name +"</td><td>"+ tableview.amount+"</td><td>"+tableview.date+"</td><td>"+tableview.categories+"</td><td>"+tableview.payment+ `</td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${tableview.uId}")'>Delete</button><br></td><td><button type='button' class="btn btn-primary" name='' onclick='editExpRow("${tableview.uId}")'>Edit Row</button><br></td></tr>`
    total += totalAmount
  }
  if (expenseview.length == 0) {
    document.getElementById('expensetable').innerHTML= "<h2>Data Not Found</h2>"
    let tot = document.getElementById("total")
    tot.innerHTML = ""
    return;
  }
  let template = `<table border=2><tr><th>S.No</th><th>Group</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Delete</th><th>Edit Row</th></tr>${trs }</table>`
  viewExtable.innerHTML = template
  let tot = document.getElementById("total")
  tot.innerHTML = "Total:"+ total
}

async function deleteExpRow(del){
  console.log(`hello`, del);
  await firebaseWrapper.delete('transections', del)
  alert('data deleted')
  viewExpensetable()
}
async function editExpRow(edt){
  console.log(`hello anoop`, edt)
  location.href = 'editexpense.html?uId='+edt
}
viewExpensetable()
