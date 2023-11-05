document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email and password match the provided credentials
    if (email === "abcd@gmail.com" && password === "pass123") {
        window.location.href = '/Student_Management/dashboard.html'
    } else {
        alert("Login unsuccessful. Please check your email and password.");
    }
});


/*Date*/

var inputElement = document.getElementById('current-date');

// Get the selected date from the input element
var selectedDate = inputElement.value;

// Parse the selected date as a Date object
var parsedDate = new Date(selectedDate);

// Format the date as DD/MM/YYYY
var formattedDate = parsedDate.getDate() + '/' + (parsedDate.getMonth() + 1) + '/' + parsedDate.getFullYear();

document.getElementById('current-date').textContent = formattedDate;





