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
async function pickInputValue(){
  console.log(uId);
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

  if (name == "" || amount == "" || date == "" || categories == "" || amount == "0" || payment == "") {
    alert("Please fill all details")
    return;
  }
  let num = document.getElementById("demo2").value;
  if (isNaN(num)) {
     alert("input amount data not valid")
     return;
  }
    let row =  {name, amount, date, categories, payment}
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
getRow(uId)
