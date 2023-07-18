function sign() {
    let success = document.getElementById("success");
    var email1 = document.getElementById("email");
    var email = document.getElementById("email").value;
    let done = document.getElementById("done");
    if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        let e = "valid email required";
        document.getElementById("error").innerHTML = e;
        email1.style.background = " rgba(255,232,230,1)";
        email1.style.color="red";
    } else {
        success.style.display = "grid";
        done.style.display ="none";
    }
}
function gmail(){
    var email1 = document.getElementById("email");
        email1.style.color="black";
        email1.style.background = " white";
}

function resetError() {
    document.getElementById("error").innerHTML = "";
}

function dismiss(){
    success.style.display = "none";
    done.style.display ="grid";
}