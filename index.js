// write a function for on click function
// log all values available in the input text boxes and date picker
async function addTemplate(){
  let dbRows = await firebaseWrapper.getAll('transections')
  let viewtable = document.getElementById('expensetable')
  let trs = ""
  let t = 0
  for(let i =0; i<dbRows.length; i++){
    let data = dbRows[i]
    console.log(data);
    let price = parseInt(data.amount)
    console.log(typeof price);
    t += price
    trs += "<tr><td>"+ data.name +"</td><td>"+ data.amount+"</td><td>"+data.date+"</td><td>"+data.categories+"</td></tr>"
  }

  let template = "<table><tr><th>Name</th><th>Amount</th><th>Date</th><th>Category</th></tr>" + trs + "</table>"
  viewtable.innerHTML = template
  let tot = document.getElementById("total")
  tot.innerHTML = "Total:"+t
}
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

    let insert = await firebaseWrapper.insert('transections', row)
    addTemplate()


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

addTemplate()


  // function pickInputValue(){
  //   console.log('hello from pickInputValue');
  //   let elem = document.getElementById('demo1')
  //   let name = elem.value
  //   console.log(name);
  //   let elem2= document.getElementById("demo2")
  //   let amount = elem2.value
  //   console.log(amount);
  //   let elem3= document.getElementById("demo3")
  //   let date = elem3.value
  //   console.log(date);
  //
  //   let table2 = document.getElementById("expensetable")
  //   console.log(table2.innerHTML.length);
  //   if (table2.innerHTML==""){
  //     table2.innerHTML = "<table><tr><th>Name</th><th>Amount</th><th>Date</th></tr><tr><td>"+ name +"</td><td>"+amount+"</td><td>"+date+"</td></tr></table>"
  //
  //   } else {
  //     let existingHTML = table2.innerHTML.slice(0,table2.innerHTML.length-8);
  //     console.log(existingHTML);
  //     let newTr = "<tr><td>"+ name +"</td><td>"+amount+"</td><td>"+date+"</td></tr></table>"
  //     let newHTML = existingHTML + newTr
  //     table2.innerHTML = newHTML
  //     console.log(table2.innerHTML);
  //   }
  //   // pick the table div and add a new additional row to it
  // }
