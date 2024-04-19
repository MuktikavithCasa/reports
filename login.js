var users = [
    { email: "admin@gmail.com", password: "12345678", redirect: "" },
    { email: "kavith", password: "kavith@123", redirect: "main.html" },
    { email: "mukti", password: "mukti@123", redirect: "main.html" },
];

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.assign(user.redirect);
        
    } else {
        alert("Invalid User");
    }
    
}

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    logout();
});

function logout() {
    // Implement your logout logic here
    // For example, you can redirect the user to the login page
    window.location.assign("index.html");
}



function redirectToPage() {
    var dropdown = document.getElementById("redirectDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if (selectedOption) {
        window.location.href = selectedOption;
    } else {
        alert("Please select a valid option.");
    }
}