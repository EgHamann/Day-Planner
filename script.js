console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const currentDay = document.getElementById("currentDay")
currentDay.textContent = `${moment().format('MMMM Do YYYY')}`

const am9 = document.getElementById("9am")
const am10 = document.getElementById("10am")
const am11 = document.getElementById("11am")
const pm12 = document.getElementById("12pm")
const pm1 = document.getElementById("1pm")
const pm2 = document.getElementById("2pm")
const pm3 = document.getElementById("3pm")
const pm4 = document.getElementById("4pm")
const pm5 = document.getElementById("5pm")

const hour = moment().hour()

if (hour == 9) {
    am9.style.backgroundColor = "#ff6961"
} else if (hour < 9) {
    am9.style.backgroundColor = "#77dd77"
} else {
    am9.style.backgroundColor = "#d3d3d3"
}

if (hour == 10) {
    am10.style.backgroundColor = "#ff6961"
} else if (hour < 10) {
    am10.style.backgroundColor = "#77dd77"
} else {
    am10.style.backgroundColor = "#d3d3d3"
}

if (hour == 11) {
    am11.style.backgroundColor = "#ff6961"
} else if (hour < 11) {
    am11.style.backgroundColor = "#77dd77"
} else {
    am11.style.backgroundColor = "#d3d3d3"
}

if (hour == 12) {
    pm12.style.backgroundColor = "#ff6961"
} else if (hour < 12) {
    pm12.style.backgroundColor = "#77dd77"
} else {
    pm12.style.backgroundColor = "#d3d3d3"
}

if (hour == 13) {
    pm1.style.backgroundColor = "#ff6961"
} else if (hour < 13) {
    pm1.style.backgroundColor = "#77dd77"
} else {
    pm1.style.backgroundColor = "#d3d3d3"
}

if (hour == 14) {
    pm2.style.backgroundColor = "#ff6961"
} else if (hour < 14) {
    pm2.style.backgroundColor = "#77dd77"
} else {
    pm2.style.backgroundColor = "#d3d3d3"
}

if (hour == 15) {
    pm3.style.backgroundColor = "#ff6961"
} else if (hour < 15) {
    pm3.style.backgroundColor = "#77dd77"
} else {
    pm3.style.backgroundColor = "#d3d3d3"
}

if (hour == 16) {
    pm4.style.backgroundColor = "#ff6961"
} else if (hour < 16) {
    pm4.style.backgroundColor = "#77dd77"
} else {
    pm4.style.backgroundColor = "#d3d3d3"
}

if (hour == 17) {
    pm5.style.backgroundColor = "#ff6961"
} else if (hour < 17) {
    pm5.style.backgroundColor = "#77dd77"
} else {
    pm5.style.backgroundColor = "#d3d3d3"
}

function saveEdits1() {
    events1 = am9.innerHTML;
    localStorage.setItem("events1", events1)
}

document.getElementById("9am").innerHTML = localStorage["events1"] || ''

function saveEdits2() {
    events2 = am10.innerHTML;
    localStorage.setItem("events2", events2)
}

document.getElementById("10am").innerHTML = localStorage["events2"] || ''

function saveEdits3() {
    events3 = am11.innerHTML;
    localStorage.setItem("events3", events3)
}

document.getElementById("11am").innerHTML = localStorage["events3"] || ''

function saveEdits4() {
    events4 = pm12.innerHTML;
    localStorage.setItem("events4", events4)
}

document.getElementById("12pm").innerHTML = localStorage["events4"] || ''

function saveEdits5() {
    events5 = pm1.innerHTML;
    localStorage.setItem("events5", events5)
}

document.getElementById("1pm").innerHTML = localStorage["events5"] || ''

function saveEdits6() {
    events6 = pm2.innerHTML;
    localStorage.setItem("events6", events6)
}

document.getElementById("2pm").innerHTML = localStorage["events6"] || ''

function saveEdits7() {
    events7 = pm3.innerHTML;
    localStorage.setItem("events7", events7)
}

document.getElementById("3pm").innerHTML = localStorage["events7"] || ''

function saveEdits8() {
    events8 = pm4.innerHTML;
    localStorage.setItem("events8", events8)
}

document.getElementById("4pm").innerHTML = localStorage["events8"] || ''

function saveEdits9() {
    events9 = pm5.innerHTML;
    localStorage.setItem("events9", events9)
}

document.getElementById("5pm").innerHTML = localStorage["events9"] || ''