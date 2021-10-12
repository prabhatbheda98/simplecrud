showNotes();
let addtxt = document.getElementById("addtxt");
let addList = document.getElementById("addlist");



let add = document.getElementById("add");
add.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []

    } else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    let addList = document.getElementById("addList");
    notesObj.forEach((element, index) => {
        html += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element}</td>
        <td><button type="button" class="btn btn-outline-success" onclick=editNotes(${index})>EDIT</button></td>
        <td><button type="button" class="btn btn-outline-danger" onclick=deleteNotes(${index})>REMOVE</button></td>
        </tr>`;

    });
    addList.innerHTML = html;
    addList.html = '';
}

function editNotes(index) {
    let saveindex = document.getElementById("saveindex");
    let add = document.getElementById("add");
    let updtaebtn = document.getElementById("updtaebtn");``
    saveindex.value = index;
    let notes = localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    addtxt.value = notesObj[index];
    add.style.display = "none";
    updtaebtn.style.display = "block";

}
let updtaebtn = document.getElementById("updtaebtn");
updtaebtn.addEventListener("click", function () {
    let add = document.getElementById("add");
    let notes = localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    let saveindex = document.getElementById("saveindex").value;
    notesObj[saveindex] = addtxt.value;
    updtaebtn.style.display="none";
    add.style.display="block";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value="";
    showNotes();

});

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};
