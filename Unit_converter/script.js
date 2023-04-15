const input = document.getElementById("input")
const btn = document.getElementById("btn")
let mf = document.getElementById("mf")
let lg = document.getElementById("lg")
let kp = document.getElementById("kp")


btn.addEventListener("click", function() {
	let num = input.value
	let feet = num * 3.281
	let gallon = num * 0.264
	let pound = num * 2.204
	let meter = num / 3.281
	let liter = num / 0.264
	let kilogram = num / 2.204
	let cmf = `<p id="mf">${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meter.toFixed(3)} meters</p>`
	let clg = `<p id="lg">${num} liters = ${gallon.toFixed(3)} gallon | ${num} gallon = ${liter.toFixed(3)} liters</p>`
	let ckp = `<p id="kp">${num} kilograms = ${pound.toFixed(3)} pound | ${num} pound = ${kilogram.toFixed(3)} kilograms</p>`
	mf.innerHTML = cmf
	lg.innerHTML = clg
	kp.innerHTML = ckp
})

function resizeInput() {
	const input = document.getElementById("input");
	const value = input.value.length;
	if (value > 2) {
	  input.classList.add("resized");
	} else {
	  input.classList.remove("resized");
	}
}
