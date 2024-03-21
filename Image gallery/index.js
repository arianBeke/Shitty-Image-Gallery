var password = "hei"

function getLogin() {
    var pass = document.getElementById("loginForm").elements[0].value

    if (pass == password) {
        console.log("login");
        window.location.pathname = '/index.html'
        alert("You have succesfully logged in!")
        return
    }
    alert("Wrong password!")
}