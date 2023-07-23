// JavaScript functionality
const leaveForm = document.getElementById("leaveForm");
const leaveTableBody = document.querySelector("#leaveTable tbody");

// Load leave data from local storage on page load
window.addEventListener('load', function() {
  loadLeaveData();
});

// Add leave data to the table and store in local storage
leaveForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const employeeID = document.getElementById("employeeID").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const department = document.getElementById("department").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const leaveData = {
    employeeID: employeeID,
    firstName: firstName,
    lastName: lastName,
    department: department,
    startDate: startDate,
    endDate: endDate,
  };

  addLeaveToTable(leaveData);
  storeLeaveData(leaveData);
  clearForm();
});

function addLeaveToTable(data) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${data.employeeID}</td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.department}</td>
    <td>${data.startDate}</td>
    <td>${data.endDate}</td>
  `;
  leaveTableBody.appendChild(newRow);
}

function storeLeaveData(data) {
  const storedData = JSON.parse(localStorage.getItem("leaveData")) || [];
  storedData.push(data);
  localStorage.setItem("leaveData", JSON.stringify(storedData));
}

function loadLeaveData() {
  const storedData = JSON.parse(localStorage.getItem("leaveData")) || [];
  storedData.forEach((data) => addLeaveToTable(data));
}

function clearForm() {
  leaveForm.reset();
}
