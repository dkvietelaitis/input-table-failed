
var names = document.getElementById("names")
var inputVardas = document.getElementById("vardas")
var inputPavarde = document.getElementById("pavarde")
var inputAmzius = document.getElementById("amzius")
var add = document.getElementById("add")
var first = document.getElementById("first")
var last = document.getElementById("last")

add.addEventListener("click", function(){
    var td = document.createElement("td")
    names.innerText += inputVardas.value
    names.innerText += inputPavarde.value
    names.innerText += inputAmzius.value

    names.append(td)

    inputVardas.value = ""
    inputPavarde.value = ""
    inputAmzius.value = ""

    
})

first.addEventListener("click", function(){
    var td = document.getElementsByTagName("td")
    td.remove()
})

last.addEventListener("click", function(){
    var td = document.getElementsByTagName("td")
    td[td.length - 1].remove()
})
