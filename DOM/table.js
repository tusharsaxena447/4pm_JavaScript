var table = document.createElement("table")
var tr = document.createElement("tr")
table.appendChild(tr)
var td1 = document.createElement("td")
td1.innerHTML = "Row1"
tr.appendChild(td1)
var td2 = document.createElement("td")
td2.innerHTML = "Row2"
tr.appendChild(td2)
var td3 = document.createElement("td")
td3.innerHTML = "Row3"
tr.appendChild(td3)
document.body.appendChild(table)