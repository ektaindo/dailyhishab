async function viewExpensetable(){
  let groups = await firebaseWrapper.getAll(`groupRecord`)
  let expenseview = await firebaseWrapper.getAll('transections')
  let friends = await firebaseWrapper.getAll('friendRecord')
  // merge
  for(let i = 0; i< expenseview.length; i++){
    let exp = expenseview[i] // {amount:455, categories:'dfgdf'}
    let groupId = exp.group
      for(let group of groups){
        if(group.uId == groupId){
          exp.groupName = group.groupname
        }
      }

      let frndId = exp.friend
        for(let friend of friends){
          if(friend.uId == frndId){
            exp.friendName = friend.frndName
          }
        }
  }

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
    let groupOrFrnd = ''
    if(tableview.group ==""){
      groupOrFrnd = `<a href="../friend/friendDetails.html?uId=${tableview.friend}">${tableview.friendName}</a>`
    }else{
      groupOrFrnd = `<a href="../group/groupDetail.html?uId=${tableview.group}">${tableview.groupName}</a>`
    }
    trs += "<tr><td>"+srNo+`</td><td>${groupOrFrnd}</td><td> <a href="expenseDetails.html?uId=${tableview.uId}">`+ tableview.name +"</a></td><td>"+ tableview.amount+"</td><td>"+tableview.date+"</td><td>"+tableview.categories+"</td><td>"+tableview.payment+ `</td><td><a href="editexpense.html?uId=${tableview.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteExpRow("${tableview.uId}")'>Delete</button><br></td></tr>`
    total += totalAmount
  }
  if (expenseview.length == 0) {
    document.getElementById('expensetable').innerHTML= "<h2>Data Not Found</h2>"
    let tot = document.getElementById("total")
    tot.innerHTML = ""
    return;
  }
  let template = `<table border=2><tr><th>S.No</th><th>Group/Friend</th><th>Name</th><th>Amount</th><th>Date</th><th>Category</th><th>Paid By</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
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
viewExpensetable()
