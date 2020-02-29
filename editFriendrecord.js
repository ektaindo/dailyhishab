function getUIdFromstudentUrl() {
  let url_string = location.href
  console.log('url string:', url_string);
  let url = new URL(url_string);
  let params = url.searchParams
  console.log('params', params);
  let uId = params.get("uId");
  console.log(uId);
  return uId
}
let uId = getUIdFromstudentUrl()

async function getRow(rowId) {
  let stRow = await firebaseWrapper.getRow('studentRecord', rowId)
  console.log(stRow);
  console.log(typeof stRow);

  let nameElem = document.getElementById('Stddemo1')
  nameElem.value = stRow.stdName
  let dobElem = document.getElementById(`stddemo5`)
  dobElem.value = stRow.stdDob
  let genderMElem = document.getElementById(`stdgen`)
  genderMElem.checked = stRow.gender
  let genFElem = document.getElementById(`stdfgen`)
  genFElem.checked = stRow.gender
  let faterNElem = document.getElementById(`Stddemo2`)
  faterNElem.value = stRow.stdFName
  let mNameElem = document.getElementById(`Stddemo3`)
  mNameElem.value = stRow.stdMName
  let feeElem = document.getElementById(`Stddemo4`)
  feeElem.value = stRow.stdFee
  let courseElem = document.getElementById(`stddrpbtn`)
  courseElem.value = stRow.stdCourse
}

async function pickStdInputValue(){
  let stdElem = document.getElementById("Stddemo1")
  let stdName = stdElem.value
  console.log('StudentName',stdName);
  let stdGenElem = document.getElementById("stdgen")
  let stdGen = stdGenElem.checked
  console.log("Student Gender",stdGen);
  let stdGendElem = document.getElementById("stdfgen")
  let stdGender = stdGendElem.checked
  console.log("Student Gender",stdGender);
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

let gender = ''
if (stdGen == true) {
      gender = 'Male'
}else if(stdGender == true){
  gender = 'Female'
}

console.log(gender);
  if (stdName == "" || stdFName == "" || stdMName == "" || stdFee == "0" || stdDob == "" || stdCourse=="" || gender == '' ) {
    alert("Please fill all details")
    return;
  }
if (isNaN(stdFee)) {
  alert("Entered fee data is not valid")
  return;
}
  let studentRecordrow =  {stdName, stdFName,stdMName, stdFee, stdDob, stdCourse, gender }
  let update = await firebaseWrapper.update('studentRecord', uId, studentRecordrow)
    alert("Student data Updated successfully")
    location.href = `friendTableview.html`
}
getRow(uId)
