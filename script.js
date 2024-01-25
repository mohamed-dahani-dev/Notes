let inputAdd = document.getElementById("inputAdd")
let btnAdd = document.getElementById("btnAdd")
let array = [];
let mode = "create";


if (localStorage.note != null) {
    array = JSON.parse(localStorage.note);
} else {
    array = [];
}
btnAdd.onclick = () => {
    if (inputAdd.value !== "") {
        array.push(inputAdd.value)
        localStorage.setItem("note", JSON.stringify(array))
        inputAdd.value = ""
        if (mode === "create") {
            btnAdd.innerHTML = "Add";
            btnAdd.style.background = "#0617fd"
        }
        inputAdd.style.border = "none"
        inputAdd.placeholder = "Write Your Note"
    } else {
        inputAdd.style.border = "solid 2px red"
        inputAdd.placeholder = "Please Write Somthing"
    }
    showData()
}



function showData() {
    let data = "";
    for (let i = 0; i < array.length; i++) {
        data += `<li>${array[i]}<div class= "delele-update"><button class= "delete" onclick="btnDelete(${i})">Delete</button><button class= "update" onclick = "update(${i})">Update</button></div></li>`
        document.getElementById("ul").innerHTML = data
    }
}
showData()


function btnDelete(i) {
    array.splice(i, 1)
    localStorage.note = JSON.stringify(array)
    showData()
    if (array.length <= 0) {
        location.reload();
    };
}


function update(i) {
    inputAdd.value = array[i]
    btnAdd.innerHTML = "Update";
    btnAdd.style.background = "#16a81d";
    array.splice(i, 1)
    let mode = "update"
    scroll({
        top: 0,
        behavior: "smooth",
    })
}


let btnscroll = document.getElementById("btnscroll");
onscroll = function () {
    if (scrollY >= 322) {
        btnscroll.style.display = "block"
    } else {
        btnscroll.style.display = "none"
    }
};

if (scrollY >= 0) {
    btnscroll.style.display = "none"
} else {
    btnscroll.style.display = "block"
};


btnscroll.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
};




let dark = document.getElementById("dark")
let light = document.getElementById("light")
let body = document.querySelector("body")
let p = document.querySelector("p")
dark.onclick = () => {
    body.style.background = "#1F1F1F"
    inputAdd.style.background = "#1F1F1F"
    inputAdd.style.color = "#fff"
    p.style.color = "#fff"
}
light.onclick = () => {
    body.style.background = "#fff"
    inputAdd.style.background = "#fff"
    inputAdd.style.color = "#000"
    p.style.color = "#000"
}

