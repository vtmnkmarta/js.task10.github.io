// 1 завдання
let arr = [1,2,3,4,5,6,7];

const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click', func1);

function func1() {
    alert(arr.length)
}

// 2 завдання
const par = document.querySelector("#par")
const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click',func2);

function func2() {
    par.style.color = "blue"
}

// 3 завдання
const btn3 = document.querySelector("#btn3");
const input1 = document.querySelector("#input1");
btn3.addEventListener("click", func3);

function func3() {
    const year = 2023 - input1.value
    alert("Ти народився в " + year + " році")
}