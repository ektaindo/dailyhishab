  async function addGroup(){
    let grpElem = document.getElementById('grpnm')
    let groupname = grpElem.value
    console.log('Grp name:', groupname);
    let grptypeElem= document.getElementById("grptype")
    let grouptype = grptypeElem.value
    console.log('Grp type:', grouptype);
    let grpMemElem= document.getElementById("emailgrmem")
    let memarr = grpMemElem.value
    // members =[email1, email2]
    // members = ["ekta.indo@gmail.com", "optimistanoop@gmail.com"]
    let members = memarr.split(",")
    console.log('grpMemberEmail:', members);

    if (groupname == "" || grouptype == "" || members == "") {
      alert("Please fill all details")
      return;
    }
      let row =  {groupname, grouptype, members}
      let insert = await firebaseWrapper.insert('groupmember', row)
            alert("Group data submitted successfully")
        resetData()
    }

function resetData(){
  let grpElem = document.getElementById('grpnm')
  grpElem.value=""
  let grptypeElem= document.getElementById("grptype")
  grptypeElem.value=""
  let grpMemElem= document.getElementById("emailgrmem")
  grpMemElem.value=""
}
