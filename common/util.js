function createNavbar() {
  let navTemplate = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<a class="navbar-brand" href="../dashboard/dashboard.html">Home</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Expenses
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="../expense/addexpense.html">Add Expense</a>
        <a class="dropdown-item" href="../expense/viewExpense.html">View Expenses</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Friends
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="../friend/frienddata.html">Add Friends</a>
        <a class="dropdown-item" href="../friend/friendTableview.html">View Friends</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="group/addgroup.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Groups
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="../group/addgroup.html">Add Group</a>
        <a class="dropdown-item" href="../group/viewgroup.html">View Groups</a>
      </div>
    </li>
    <li class="nav-item dropdown" >
      <a class="nav-link dropdown-toggle" href="profile/setting.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Profile
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="../profile/setting.html">Setting</a>
        <button id="logout" class="btn btn-link btn-logout" type="Logout" onclick="logout()">Logout</button>
      </div>
    </li>
  </ul>
</div>
</nav>`

let navbar = document.getElementById("navbar")
navbar.innerHTML= navTemplate
}
createNavbar()
