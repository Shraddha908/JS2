let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

let emp_arr = [];

form.addEventListener("submit", getData);

function getData(event) {
    event.preventDefault();

    let doc_data = {
        name: form.empname.value,
        id: form.empid.value,
        dep: form.dep.value,   // corrected typo
        exp: form.exp.value,
        mbl: form.mbl.value,
        email: form.email.value
    };

    emp_arr.push(doc_data); // corrected array name
    display(emp_arr);
}

function display(data) {
    tbody.innerHTML = "";

    data.map(function (el) {
        let row = document.createElement("tr");

        let empname = document.createElement("td");
        empname.innerText = el.name;

        let empid = document.createElement("td");
        empid.innerText = el.id;

        let department = document.createElement("td");
        department.innerText = el.dep;

        let expirence = document.createElement("td");
        expirence.innerText = el.exp;

        let mobile = document.createElement("td");
        mobile.innerText = el.mbl;

        let email = document.createElement("td");
        email.innerText = el.email;

        let role = document.createElement("td");
        if (el.exp >= 5) {
            role.innerText = "Senior";
        } else if (el.exp >= 2 && el.exp < 5) {
            role.innerText = "Junior";
        } else {
            role.innerText = "Trainee";
        }

        let del = document.createElement("td");
        del.innerText = "Delete";
        del.style.backgroundColor = "red";
        del.style.color = "white";

        row.append(empname, empid, department, expirence, mobile, email, role, del);
        tbody.append(row);
    });
}