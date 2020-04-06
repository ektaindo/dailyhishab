  async function addGroup(){
    let grpElem = document.getElementById('grpnm')
    let groupname = grpElem.value
    console.log('Grp name:', groupname);
    let grptypeElem= document.getElementById("grptype")
    let grouptype = grptypeElem.value
    console.log('Grp type:', grouptype);
    // members =[email1, email2]
    // members = ["ekta.indo@gmail.com", "optimistanoop@gmail.com"]
    if (groupname == "" || grouptype == "") {
      alert("Please fill all details")
      return;
    }
      let row =  {groupname, grouptype}
      let insert = await firebaseWrapper.insert('groupRecord', row)
            alert("Group data submitted successfully")
        resetData()
    }

function resetData(){
  let grpElem = document.getElementById('grpnm')
  grpElem.value=""
  let grptypeElem= document.getElementById("grptype")
  grptypeElem.value=""
}
