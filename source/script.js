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
        email1.style.background = " hsl(4, 100%, 67%)";
    } else {
        success.style.display = "grid";
        done.style.display ="none";
    }
}

function resetError() {
    document.getElementById("error").innerHTML = "";
}

function dismiss(){
    success.style.display = "none";
    done.style.display ="grid";
}