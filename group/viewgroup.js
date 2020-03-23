async function viewGrouptable(){
  let groupview = await firebaseWrapper.getAll('groupRecord')
  console.log(groupview);
  let viewgrptable = document.getElementById('grouptable')
  let trs = ""
  let srNo = 0
  for (let i = 0; i < groupview.length; i++) {
    let tableview = groupview[i]
    srNo = 1 + i;

    trs += "<tr><td>"+srNo+`</td><td> <a href="groupDetail.html?uId=${tableview.uId}">`+tableview.groupname+"</a></td><td>"+ tableview.grouptype+ `</td><td><a href="editgroup.html?uId=${tableview.uId}"><u>Edit</u></a><br></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteGrpRow("${tableview.uId}")'>Delete</button><br></td></tr>`
  }
  if (groupview.length == 0) {
    document.getElementById('grouptable').innerHTML= "<h2>Data Not Found</h2>"
    return;
  }
  let template = `<table border=2><tr><th>S.No</th><th>Group Name</th><th>Group Type</th><th>Edit Row</th><th>Delete</th></tr>${trs }</table>`
  viewgrptable.innerHTML = template
}

async function deleteGrpRow(del){
  console.log(`hello`, del);
  await firebaseWrapper.delete('groupRecord', del)
  alert('data deleted')
  viewGrouptable()
}
viewGrouptable()
