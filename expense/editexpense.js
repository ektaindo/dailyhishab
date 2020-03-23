function getUIdFromUrl(){
  let url_string = location.href
  console.log('url string', url_string);
  let url = new URL(url_string);
  let params = url.searchParams
  console.log('params', params);
  let uId = params.get("uId");
  console.log(uId);
  return uId
}

let uId = getUIdFromUrl()

async function getRow(rowId){
  let row = await firebaseWrapper.getRow('transections', rowId)
  console.log(row);
  console.log(typeof row);
  let grpElem = document.getElementById('grpdrpdwn')
  console.log("going to read the element");
  grpElem.value = row.group
  let frndElem = document.getElementById('frnddrpdwn')
  frndElem.value = row.group
  let nameElem = document.getElementById('demo1')
  nameElem.value = row.name
  let amountElem = document.getElementById(`demo2`)
  amountElem.value = row.amount
  let dateElem = document.getElementById(`demo3`)
  dateElem.value = row.date
  let categoriesElem = document.getElementById(`drpbtn`)
  categoriesElem.value = row.categories
  let paidbyElem = document.getElementById(`paidBy`)
  paidbyElem.value = row.payment
  //TODO pre fil the row value to each and every element in edit page
}

async function editgroupdrpdwn(){
    let groups = await firebaseWrapper.getAll('groupRecord')
    let grpElem = document.getElementById("grpnm")
    let grpDropDown = ""
    for(let group of groups){
      grpDropDown += `<option value="${group.uId}">${group.groupname}</option>`
    }
    let grpTemp = `<select id = "grpdrpdwn" ><option value="">--Select Groups--</option>${grpDropDown }</select>`
    console.log("going to make group dropdown");
    grpElem.innerHTML = grpTemp
}
async function editfrnddrpdwn(){
    let frnds = await firebaseWrapper.getAll('groupRecord')
    let frndElem = document.getElementById("frnd")
    let frndDropDown = ""
    for(let frnd of frnds){
      frndDropDown += `<option value="${frnd.uId}">${frnd.frndName}</option>`
    }
    let frndTemp = `<select id = "frnddrpdwn" ><option value="">--Select friends--</option>${frndDropDown }</select>`
    console.log("going to make friends dropdown");
    frndElem.innerHTML = frndTemp
}

async function pickInputValue(){
  console.log(uId);
  let grpElem = document.getElementById('grpdrpdwn')
  let group = grpElem.value
  console.log("group:", group);
  let frndElem = document.getElementById('frnddrpdwn')
  let frnd = frndElem.value
  console.log("Friend:", frnd);
  let nmElem = document.getElementById('demo1')
  let name = nmElem.value
  console.log('name:', name);
  let amElem= document.getElementById("demo2")
  let amount = parseInt(amElem.value)
  console.log('amount:', amount);
  let dtElem= document.getElementById("demo3")
  let date = dtElem.value
  console.log('date:', date);
  let catgyElem = document.getElementById("drpbtn")
  let categories = catgyElem.value
  console.log('categories:', categories);
  let pdElem = document.getElementById("paidBy")
  let payment = pdElem.value
  console.log('Paid By:', payment);

  if (name == "" || amount == "" || date == "" || categories == "" || amount == "0" || payment == "" || group=="" || frnd=="") {
    alert("Please fill all details")
    return;
  }
  let num = document.getElementById("demo2").value;
  if (isNaN(num)) {
     alert("input amount data not valid")
     return;
  }
      let row =  {name, amount, date, categories, payment, group, frnd}
    let update = await firebaseWrapper.update('transections', uId, row)
    alert("Expense data updated successfully")
    location.href = `viewExpense.html`

  //TODO pick all elements

  // get value of all elements

  // make a row object with all elements key value pair
  // call update fn of firebase db awair firebaseWrapper.Update('transections', uId, row)
  // alert data updated
  // redirect to view page
}
async function initiallization() {
  await editgroupdrpdwn()
  getRow(uId)

}
async function initiallizationfrnd() {
  await editfrnddrpdwn()
  getRow(uId)

}
initiallization()
initiallizationfrnd()
