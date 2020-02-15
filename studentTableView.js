async function viewStudentRecordTable(){
  let dbStdRows = await firebaseWrapper.getAll('studentRecord')
  let viewStdtable = document.getElementById('Studenttable')
  let stdtrs =""
  let stdt = 0
  let srNumb = 0
  for (let i = 0; i < dbStdRows.length; i++) {
    let stdData = dbStdRows[i]
    srNumb = 1 + i
    console.log(stdData);
    let fee = stdData.stdFee
    stdt = stdt + fee;
    stdtrs += "<tr><td>"+srNumb+"</td><td>"+ stdData.stdName +"</td><td>"+ stdData.stdFName+"</td><td>"+stdData.stdMName+"</td><td>"+stdData.stdFee+"</td><td>"+stdData.stdDob+"</td><td>"+stdData.stdCourse+"</td></tr>"
  }
  let studentTemplate = "<table><tr><th>Sr.No</th><th>Student Name</th><th>Student Father's Name</th><th>Student Mother's Name</th><th>Student Fee</th><th>Student DOB</th><th>Student Course</th></tr>" + stdtrs + "</table>"
  viewStdtable.innerHTML = studentTemplate
  let stdtotalfee = document.getElementById("totalFee")
  stdtotalfee.innerHTML = "Total:" + stdt;

}
viewStudentRecordTable()
