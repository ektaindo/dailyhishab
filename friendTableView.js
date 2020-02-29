async function viewFriendRecordTable(){
  let dbfrndRows = await firebaseWrapper.getAll('friendRecord')
  let viewfrndtable = document.getElementById('Friendtable')

  let frndtrs =""

  for (let i = 0; i < dbfrndRows.length; i++) {
    let frndData = dbfrndRows[i]
    srNumb = 1 + i
    console.log(frndData);

    frndtrs += "<tr><td>"+srNumb+"</td><td>"+ frndData.frndName +"</td><td>"+frndData.frndEmail+"</td><td>"+ frndData.frndMobNo+`</td><td><a href="editFriendrecord.html?uId=${frndData.uId}"><u>Edit</u></a></td><td><button type='button' class="btn btn-danger" name='' onclick='deleteRow("${frndData.uId}")'>Delete</button><br></td><br></tr>`
  }
  if (dbfrndRows.length == 0) {
    document.getElementById('Friendtable').innerHTML = "<h2>Data Not Found</h2>"
    return;
  }
  let friendTemplate = "<table border=2><tr><th>Sr.No</th><th>Friends Name</th><th>Email Id</th><th>Mobile No</th><th>Edit Row</th><th>Delete</th></tr>" + frndtrs + "</table>"
  viewfrndtable.innerHTML = friendTemplate

}

async function deleteRow(del){
  console.log(`hello`, del);
  await firebaseWrapper.delete('friendRecord', del)
  alert('data deleted')
  viewFriendRecordTable()
}

viewFriendRecordTable()
