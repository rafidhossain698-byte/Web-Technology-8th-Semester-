// Getting elements
let formBox = document.getElementById("form-student");
let inputName = document.getElementById("name");
let inputRoll = document.getElementById("roll");
let studentList = document.getElementById("list");

let totalDisplay = document.getElementById("count");
let attendanceDisplay = document.getElementById("status");

let addButton = document.getElementById("btn-add");
let searchInput = document.getElementById("search-box");

let studentData = [];

// Enable button when name is typed
inputName.addEventListener("input", () => {
addButton.disabled = inputName.value.trim().length === 0;
});

// Form submit
formBox.addEventListener("submit", function(event){

event.preventDefault();

let nameValue = inputName.value.trim();
let rollValue = inputRoll.value.trim();

if(nameValue === "" || rollValue === ""){
alert("Please fill name and roll number");
return;
}

let obj = {
name:nameValue,
roll:rollValue,
present:false
};

studentData.push(obj);

// clear fields
inputName.value = "";
inputRoll.value = "";
addButton.disabled = true;

displayStudents();

});

// Render student list
function displayStudents(){

studentList.innerHTML = "";

let keyword = searchInput.value.toLowerCase();

let result = studentData.filter(s =>
s.name.toLowerCase().includes(keyword) ||
s.roll.toLowerCase().includes(keyword)
);

result.forEach((item,i)=>{

let li = document.createElement("li");
li.className = "student-item";

let text = document.createElement("span");
text.innerText = item.roll + " - " + item.name;

let check = document.createElement("input");
check.type = "checkbox";
check.checked = item.present;

if(item.present){
li.classList.add("present");
}

check.addEventListener("change",()=>{

item.present = check.checked;

li.classList.toggle("present", item.present);

updateAttendanceCount();

});

// Edit button
let edit = document.createElement("button");
edit.innerText = "Edit";
edit.className = "btn-edit";

edit.onclick = ()=>{

let updatedName = prompt("New name:", item.name);
let updatedRoll = prompt("New roll:", item.roll);

if(updatedName && updatedRoll){
item.name = updatedName;
item.roll = updatedRoll;
displayStudents();
}

};

// Delete button
let del = document.createElement("button");
del.innerText = "Delete";
del.className = "btn-delete";

del.onclick = ()=>{

if(confirm("Delete this student?")){
studentData.splice(i,1);
displayStudents();
}

};

li.append(text, check, edit, del);
studentList.appendChild(li);

});

updateTotal();
updateAttendanceCount();

}

// Total students
function updateTotal(){
totalDisplay.innerText = "Total Students: " + studentData.length;
}

// Attendance calculation
function updateAttendanceCount(){

let presentCount = studentData.filter(x => x.present).length;
let absentCount = studentData.length - presentCount;

attendanceDisplay.innerText =
"Present: " + presentCount + " | Absent: " + absentCount;

}

// Search
searchInput.addEventListener("input", displayStudents);

// Sort students A-Z
document.getElementById("btn-sort").onclick = ()=>{

studentData.sort((a,b)=> a.name.localeCompare(b.name));
displayStudents();

};

// Highlight first student
document.getElementById("btn-highlight").onclick = ()=>{

let items = document.querySelectorAll(".student-item");

items.forEach(el => el.classList.remove("highlight"));

if(items.length > 0){
items[0].classList.add("highlight");
}

};
