var roleElement = document.getElementsByClassName("role-title");
var roleArr = ["Front End Engineer", "IoT Enthusiast", "Problem Solver"];

for (var i = 0; i < roleArr.length; i++) {
    for (var j = 0; j < roleArr[i].length; j++) {
        roleElement.innerHTML += roleArr[i][j]
        j++
    }
    i++
    setTimeout(50)
}