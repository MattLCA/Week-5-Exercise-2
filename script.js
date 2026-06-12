const button = document.getElementById("updateNameBtn");
const profileName = document.getElementById("profileName");

const updateRoleBtn = document.getElementById("updateRoleBtn");
const profileRole = document.getElementById("profileRole");

const toggleBtn = document.getElementById("toggleStatusBtn");
const profileCard = document.getElementById("profileCard");

button.addEventListener("click", function() {
    const newName = prompt("Enter a new name:");

    if (newName) {
        profileName.textContent = newName;
    }
});

updateRoleBtn.addEventListener("click", function() {
    const newRole = prompt("Enter a new role:");

    if (newRole) {
        profileRole.textContent = newRole;
    }
});

toggleBtn.addEventListener("click", function() {
    profileCard.classList.toggle("active-status");
});