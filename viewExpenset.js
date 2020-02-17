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
    trs += "<tr><td>"+srNo+"</td><td>"+ tableview.name +"</td><td>"+ tableview.amount+"</td><td>"+tableview.date+"</td><td>"+tableview.categories+"</td><td>"+tableview.payment+"</td></tr>"
    total += totalAmount
  }
  let template = "<table><tr><th>S.No</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th></tr>" + trs + "</table>"
  viewExtable.innerHTML = template
  let tot = document.getElementById("total")
  tot.innerHTML = "Total:"+ total
}

viewExpensetable()
