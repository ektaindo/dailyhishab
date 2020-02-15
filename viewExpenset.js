async function viewExpensetable(){
  let expenseview = await firebaseWrapper.getAll('transections')
  console.log(expenseview);
  let viewExtable = document.getElementById('expensetable')
  let trs = ""
  let total = 0
  for (var i = 0; i < expenseview.length; i++) {
    let tableview = expenseview[i]
    let totalAmount = parseInt(expenseview[i].amount)
    trs += "<tr><td>"+ tableview.name +"</td><td>"+ tableview.amount+"</td><td>"+tableview.date+"</td><td>"+tableview.categories+"</td></tr>"
    total += totalAmount
  }
  let template = "<table><tr><th>Name</th><th>Amount</th><th>Date</th><th>Category</th></tr>" + trs + "</table>"
  viewExtable.innerHTML = template
  let tot = document.getElementById("total")
  tot.innerHTML = "Total:"+ total
}

viewExpensetable()
