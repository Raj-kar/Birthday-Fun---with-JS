function toogle() {
    let text = document.getElementById("text").innerHTML;

    if (text == "") {
        document.getElementById("text").innerHTML = "Once again!";
    }
    else if (text == "Once again!") {
        document.getElementById("text").innerHTML = "Okay last One !";
    } else if (text == "Okay last One !") {
        document.getElementById("text").innerHTML = "Okay Promise Last !";
    } else if (text == "Okay Promise Last !") {
        document.getElementById("text").innerHTML = "Today's something special";
    } else if (text == "Today's something special") {
        document.getElementById("text").innerHTML = "You know what ??";
    } else if (text == "You know what ??") {
        document.getElementById("text").innerHTML = "Click here, if you want to know :p";
    } else if (text == "Click here, if you want to know :p") {
        document.getElementById("text").innerHTML = "Press hard !!";
    } else if (text == "Press hard !!") {
        document.getElementById("text").innerHTML = "Oky Finally !!";
    } else if (text == "Oky Finally !!"){
        document.getElementById("text").innerHTML = "Happy Birthday dear !!";
    } else {
        document.getElementById("text").innerHTML = "Once again!";
    }
}