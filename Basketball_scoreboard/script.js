let home = document.getElementById("home")
let guest = document.getElementById("guest")
let counth = 0
let countg = 0

function add1h() {
	counth += 1
	home.textContent = counth
}

function add2h() {
	counth += 2
	home.textContent = counth
}

function add3h() {
	counth += 3
	home.textContent = counth
}

function add1g() {
	countg += 1
	guest.textContent = countg
}

function add2g() {
	countg += 2
	guest.textContent = countg
}

function add3g() {
	countg += 3
	guest.textContent = countg
}