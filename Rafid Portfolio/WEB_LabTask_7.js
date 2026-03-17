const btn = document.getElementById("themeBtn");
const page = document.documentElement;

btn.onclick = () => {
    if (page.getAttribute("data-theme") === "dark") {
        page.setAttribute("data-theme", "light");
        btn.textContent = "☀️";
    } else {
        page.setAttribute("data-theme", "dark");
        btn.textContent = "🌙";
    }
};

function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return false;
}