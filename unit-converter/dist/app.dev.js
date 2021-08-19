"use strict";

var input = document.getElementById('input');
var input2 = document.getElementById('input2');
var select = document.getElementById('select');
var selectlen = document.getElementById('select-len');
var btn = document.querySelector('.convert');
var btnlen = document.querySelector('.convert-len');
var length = document.querySelector('.length');
var weight = document.querySelector('.weight');
var btns = document.querySelector('.btns');
document.querySelector(".converter").style.visibility = "hidden";
input2.style.visibility = 'hidden';
input.style.visibility = "hidden";
select.style.visibility = "hidden";
selectlen.style.visibility = "hidden";
btn.style.visibility = "hidden";
btnlen.style.visibility = "hidden";
weight.addEventListener('click', function (e) {
  btns.style.opacity = 0;
  btns.style.display = "none";
  select.style.visibility = "visible";
  btn.style.visibility = "visible";
});
length.addEventListener('click', function (e) {
  btns.style.opacity = 0;
  btns.style.display = "none";
  select.style.display = 'none';
  btn.style.display = 'none';
  selectlen.style.visibility = "visible";
  btnlen.style.visibility = "visible";
});
btn.addEventListener('click', function (e) {
  input.style.visibility = "visible";
  var selectValue = select.options[select.selectedIndex].value;
  console.log(selectValue);
  input.placeholder = "Enter ".concat(selectValue, ".....");
});
btnlen.addEventListener('click', function (e) {
  input2.style.visibility = "visible";
  var selectValue = selectlen.options[selectlen.selectedIndex].value;
  console.log(selectValue);
  input2.placeholder = "Enter ".concat(selectValue, ".....");
});
select.addEventListener('click', function (e) {
  input.style.visibility = "hidden";
  document.querySelector(".converter").style.visibility = "hidden";
  document.querySelector('.output1').innerHTML = 0;
  document.querySelector('.output2').innerHTML = 0;
  document.querySelector('.output3').innerHTML = 0;
});
selectlen.addEventListener('click', function (e) {
  input2.style.visibility = "hidden";
  document.querySelector(".converter").style.visibility = "hidden";
  document.querySelector('.output1').innerHTML = 0;
  document.querySelector('.output2').innerHTML = 0;
  document.querySelector('.output3').innerHTML = 0;
});
input.addEventListener('input', function (e) {
  e.preventDefault;
  document.querySelector(".converter").style.visibility = "visible";
  var value = e.target.value;

  if (select.options[select.selectedIndex].value === "pounds") {
    document.querySelector('.card-1-content').textContent = "Grams : ";
    document.querySelector('.card-2-content').textContent = "KiloGrams : ";
    document.querySelector('.card-3-content').textContent = "Ounces : ";
    document.querySelector('.output1').innerHTML = value / 0.0022046226;
    document.querySelector('.output2').innerHTML = value / 2.2046226;
    document.querySelector('.output3').innerHTML = value * 16.0000001360777086551081;
  } else if (select.options[select.selectedIndex].value === "Grams") {
    document.querySelector('.card-1-content').textContent = "Pounds : ";
    document.querySelector('.card-2-content').textContent = "KiloGrams : ";
    document.querySelector('.card-3-content').textContent = "Ounces : ";
    document.querySelector('.output1').innerHTML = value * 0.0022046226;
    document.querySelector('.output2').innerHTML = value / 1000;
    document.querySelector('.output3').innerHTML = value * 0.002046226 * 16.0000001360777086551081;
  } else if (select.options[select.selectedIndex].value === "KiloGrams") {
    document.querySelector('.card-1-content').textContent = "Pounds : ";
    document.querySelector('.card-2-content').textContent = "Grams : ";
    document.querySelector('.card-3-content').textContent = "Ounces : ";
    document.querySelector('.output1').innerHTML = value * 2.2046226;
    document.querySelector('.output2').innerHTML = value * 1000;
    document.querySelector('.output3').innerHTML = value * 2.2046226 * 16.0000001360777086551081;
  } else {
    document.querySelector('.card-1-content').textContent = "Pounds : ";
    document.querySelector('.card-2-content').textContent = "Grams : ";
    document.querySelector('.card-3-content').textContent = "KiloGrams : ";
    document.querySelector('.output1').innerHTML = value / 16.0000001360777086551081;
    document.querySelector('.output2').innerHTML = value / (0.002046226 * 16.0000001360777086551081);
    document.querySelector('.output3').innerHTML = value / (2.2046226 * 16.0000001360777086551081);
  }
});
input2.addEventListener('input', function (e) {
  e.preventDefault;
  document.querySelector(".converter").style.visibility = "visible";
  var value = e.target.value;

  if (selectlen.options[selectlen.selectedIndex].value === "Centimeters") {
    document.querySelector('.card-1-content').textContent = "Meters : ";
    document.querySelector('.card-2-content').textContent = "Foot : ";
    document.querySelector('.card-3-content').textContent = "Inches : ";
    document.querySelector('.output1').innerHTML = value / 100;
    document.querySelector('.output2').innerHTML = value * 0.032808399;
    document.querySelector('.output3').innerHTML = value * 0.393700787;
  } else if (selectlen.options[selectlen.selectedIndex].value === "Meters") {
    document.querySelector('.card-1-content').textContent = "Centimeters : ";
    document.querySelector('.card-2-content').textContent = "Foot : ";
    document.querySelector('.card-3-content').textContent = "Inches : ";
    document.querySelector('.output1').innerHTML = value * 100;
    document.querySelector('.output2').innerHTML = value * 3.28083;
    document.querySelector('.output3').innerHTML = value * 39.3700787;
  } else if (selectlen.options[selectlen.selectedIndex].value === "Foot") {
    document.querySelector('.card-1-content').textContent = "Centimeters : ";
    document.querySelector('.card-2-content').textContent = "Meters : ";
    document.querySelector('.card-3-content').textContent = "Inches : ";
    document.querySelector('.output1').innerHTML = value * 30.47999;
    document.querySelector('.output2').innerHTML = value * 0.304799;
    document.querySelector('.output3').innerHTML = value * 11.999999;
  } else {
    document.querySelector('.card-1-content').textContent = "Centimeters : ";
    document.querySelector('.card-2-content').textContent = "Meters : ";
    document.querySelector('.card-3-content').textContent = "Foot : ";
    document.querySelector('.output1').innerHTML = value * 2.54;
    document.querySelector('.output2').innerHTML = value * 0.0254;
    document.querySelector('.output3').innerHTML = value * 0.0833333;
  }
});