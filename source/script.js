let signUp = document.getElementById("sign-up");

function sign() {
    let success = document.getElementById("success");
    var email = document.getElementById("email").value;
    let done = document.getElementById("done");
    if (
        email == "" ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        let e = "valid email required";
        document.getElementById("error").innerHTML = e;
    } else {
        success.style.display = "block";
        done.style.display ="none";
    }
}

function resetError() {
    console.log("asdf");
    document.getElementById("error").innerHTML = "";
}

function dismiss(){
    success.style.display = "none";
    done.style.display ="grid";
}