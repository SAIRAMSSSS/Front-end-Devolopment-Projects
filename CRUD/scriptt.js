let array = [];

const nameInput = document.querySelector(".name");
const mailInput = document.querySelector(".email");
const createBtn = document.querySelector(".create-form button");
const tableBody = document.querySelector(".data-table");

// Create button click event
createBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let name = nameInput.value.trim();
    let mail = mailInput.value.trim();

    if (name && mail) {
        array.push({ name, mail });
        renderTable();
        nameInput.value = "";
        mailInput.value = "";
    }
});

// Renders the data inside the table
function renderTable() {
    tableBody.innerHTML = "";

    array.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.mail}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Delete user
function deleteUser(index) {
    array.splice(index, 1);
    renderTable();
}

// Edit user
function editUser(index) {
    const user = array[index];

    document.querySelector(".uname").value = user.name;
    document.querySelector(".umail").value = user.mail;

    document.querySelector(".update-form button").onclick = function (e) {
        e.preventDefault();
        array[index].name = document.querySelector(".uname").value;
        array[index].mail = document.querySelector(".umail").value;
        renderTable();
    };
}
