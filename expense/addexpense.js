// write a function for on click function
// log all values available in the input text boxes and date picker
  async function pickInputValue(){
    let groupDropdwn = document.getElementById("grpdrpdwn")
    let group = groupDropdwn.value
    console.log("grpName:", group);
    let frndDropdwn = document.getElementById("frnddrpdwn")
    let friend = frndDropdwn.value
    console.log("frndName:", friend);
    let elem = document.getElementById('demo1')
    let name = elem.value
    console.log('name:', name);
    let elem2= document.getElementById("demo2")
    let amount = parseInt(elem2.value)
    console.log('amount:', amount);
    let elem3= document.getElementById("demo3")
    let date = elem3.value
    console.log('date:', date);
    let elem4 = document.getElementById("drpbtn")
    let categories = elem4.value
    console.log('categories:', categories);
    let elem5 = document.getElementById("paidBy")
    let payment = elem5.value
    console.log('Paid By:', payment);
    console.log(name.length, amount.length, date.length);

    if (name == "" || amount == "" || date == "" || categories == "" || amount == "0" || payment == "" || (group=="" && friend=="")) {
      alert("Please fill all details")
      return;
    }

    let num = document.getElementById("demo2").value;
    if (isNaN(num)) {
       alert("input amount data not valid")
    }else {
      let row =  {name, amount, date, categories, payment, group, friend}
            let getdata = await firebaseWrapper.getAll('transections')
      console.log(typeof(getdata));
      console.log("ExpenseData:", getdata);
      let insert = await firebaseWrapper.insert('transections', row)
      let getExData = await firebaseWrapper.getAll('transections')
      if (getdata.length +  1 == getExData.length) {
        alert("Expense data submitted successfully")
        resetData()
      }
    }
}

async function grpDropdown() {
      let groups = await firebaseWrapper.getAll('groupRecord')
      let groupDropdwn = document.getElementById("grpnm")
      let grp = ""
      for (let i = 0; i < groups.length; i++) {
        let group = groups[i]
        grp += `<option value="${group.uId}">${group.groupname}</option>`
    }
      if (groups.length == 0) {
        document.getElementById('grpnm').innerHTML= "<h2>Data Not Found</h2>"
        return;
      }
        let grpTemp = `<select id = "grpdrpdwn" ><option value="">--Select Groups--</option>${grp }</select>`
        groupDropdwn.innerHTML = grpTemp
}

async function frndDropdown() {
      let frnds = await firebaseWrapper.getAll('friendRecord')
      let frndDropdwn = document.getElementById("frnd")
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
grpDropdown()
frndDropdown()

function resetData(){
  let grpElem = document.getElementById('grpdrpdwn')
  grpElem.value = ""
  let frndElem = document.getElementById('frnddrpdwn')
  frndElem.value = ""
  let elem = document.getElementById('demo1')
  elem.value = ""
  console.log(elem.value);
  let elem2= document.getElementById("demo2")
  elem2.value=""
  console.log(elem2.value);
  let elem3= document.getElementById("demo3")
  elem3.value=""
  console.log(elem3.value);
  let elem4= document.getElementById("drpbtn")
  elem4.value=""
  console.log(elem4.value);
  let elem5= document.getElementById("paidBy")
  elem5.value=""
  console.log(elem5.value);
}
