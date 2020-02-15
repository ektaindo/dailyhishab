// write a function for on click function
// log all values available in the input text boxes and date picker
  async function pickInputValue(){

    let elem = document.getElementById('demo1')
    let name = elem.value
    console.log('name', name);
    let elem2= document.getElementById("demo2")
    let amount = elem2.value
    console.log('amount', amount);
    let elem3= document.getElementById("demo3")
    let date = elem3.value
    console.log('date', date);
    let elem4 = document.getElementById("drpbtn")
    let categories = elem4.value
    console.log('categories', categories);
    console.log(name.length, amount.length, date.length);

    if (name == "" || amount == "" || date == "" || categories == "" || amount == "0") {
      alert("Please fill all details")
      return;
    }

    let row =  {name, amount, date, categories}
 let getdata = await firebaseWrapper.getAll('transections')
 console.log(typeof(getdata));
 console.log("ExpenseData:", getdata);
    let insert = await firebaseWrapper.insert('transections', row)
        let getExData = await firebaseWrapper.getAll('transections')
if (getdata.length +  1 == getExData.length) {
  alert("Expense data submitted successfully")
}
      }

function resetData(){
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
}
