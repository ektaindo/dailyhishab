async function viewStudentRecordTable(){
  let dbStdRows = await firebaseWrapper.getAll('studentRecord')
  let viewStdtable = document.getElementById('Studenttable')
  let stdtrs =""
  let stdt = 0
  for (let i = 0; i < dbStdRows.length; i++) {
    let stdData = dbStdRows[i]
    console.log(stdData);
    let fee = stdData.stdFee
    stdt = stdt + fee;
    stdtrs += "<tr><td>"+ stdData.stdName +"</td><td>"+ stdData.stdFName+"</td><td>"+stdData.stdMName+"</td><td>"+stdData.stdFee+"</td><td>"+stdData.stdDob+"</td><td>"+stdData.stdCourse+"</td></tr>"
  }
  let studentTemplate = "<table><tr><th>Student Name</th><th>Student Father's Name</th><th>Student Mother's Name</th><th>Student Fee</th><th>Student DOB</th><th>Student Course</th></tr>" + stdtrs + "</table>"
  viewStdtable.innerHTML = studentTemplate
  let stdtotalfee = document.getElementById("totalFee")
  stdtotalfee.innerHTML = "Total:" + stdt;

}

async function pickStdInputValue(){
  let stdElem = document.getElementById("Stddemo1")
  let stdName = stdElem.value
  console.log('StudentName',stdName);
  let stdFElem = document.getElementById("Stddemo2")
  let stdFName = stdFElem.value
  console.log("StudentFather'sName",stdFName);
  let stdMElem = document.getElementById("Stddemo3")
  let stdMName = stdMElem.value
  console.log("StudentMother'sName",stdMName);
  let stdFeeElem = document.getElementById("Stddemo4")
  let stdFee = parseInt(stdFeeElem.value)
  console.log("StudentFee",stdFee);
  let stdDobElem = document.getElementById("stddemo5")
  let stdDob = stdDobElem.value
  console.log("StudentDOB",stdDob);
  let stdCourseElem = document.getElementById("stddrpbtn")
  let stdCourse = stdCourseElem.value
  console.log("StudentCourse",stdCourse);

  if (stdName == "" || stdFName == "" || stdMName == "" || stdFee == "0" || stdDob == "" || stdCourse=="") {
    alert("Please fill all details")
    return;
  }

  let studentRecordrow =  {stdName, stdFName,stdMName, stdFee, stdDob, stdCourse}

  let insert = await firebaseWrapper.insert('studentRecord', studentRecordrow)
  viewStudentRecordTable();

}
 function resetSTDRecord(){
   let stdElem = document.getElementById('Stddemo1')
   stdElem.value = ""
   console.log(stdElem.value);
   let stdFElem= document.getElementById("Stddemo2")
   stdFElem.value=""
   console.log(stdFElem.value);
   let stdMelem3= document.getElementById("Stddemo3")
   stdMelem3.value=""
   console.log(stdMelem3.value);
   let elem4= document.getElementById("Stddemo4")
   elem4.value=""
   console.log(elem4.value);
   let elem5= document.getElementById("stddemo5")
   elem5.value=""
   console.log(elem5.value);
   let elem6= document.getElementById("stddrpbtn")
   elem6.value=""
   console.log(elem6.value);
 }
viewStudentRecordTable()
