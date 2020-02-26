async function viewGrouptable(){
  let groupview = await firebaseWrapper.getAll('groupmember')
  console.log(groupview);
  let viewgrptable = document.getElementById('grouptable')
  let trs = ""
  let srNo = 0
  for (let i = 0; i < groupview.length; i++) {
    let tableview = groupview[i]
    srNo = 1 + i;
    let emails = ''
    for(let j = 0; j< tableview.members.length; j++){
      emails += (j+1) + '. ' + tableview.members[j] + ' '
    }

    trs += "<tr><td>"+srNo+`</td><td> <a href="groupDetail.html?uId=${tableview.uId}">`+tableview.groupname+"</a></td><td>"+ tableview.grouptype+"</td><td>"+emails+`</td><td><button type='button' class="btn btn-danger" name='' onclick='deleteGrpRow("${tableview.uId}")'>Delete</button><br></td><td><button type='button' class="btn btn-primary" name='' onclick='editGrpRow("${tableview.uId}")'>Edit Row</button><br></td></tr>`
  }
  if (groupview.length == 0) {
    document.getElementById('grouptable').innerHTML= "<h2>Data Not Found</h2>"
    return;
  }
  let template = `<table border=2><tr><th>S.No</th><th>Group Name</th><th>Group Type</th><th>Members Email Id</th><th>Delete</th><th>Edit Row</th></tr>${trs }</table>`
  viewgrptable.innerHTML = template
}

async function deleteGrpRow(del){
  console.log(`hello`, del);
  await firebaseWrapper.delete('groupmember', del)
  alert('data deleted')
  viewGrouptable()
}
  async function editGrpRow(edt){
  console.log(`hello anoop`, edt)
  location.href = 'editgroup.html?uId='+edt
}
viewGrouptable()
