const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let ps1 = document.getElementById("ps1");
let ps2 = document.getElementById("ps2");
let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
	let password1 = "";
	let password2 = "";
	for (let i = 0; i < 16; i++) {
		let random1 = Math.floor(Math.random() * characters.length);
		let random2 = Math.floor(Math.random() * characters.length);
		password1 += characters[random1];
		password2 += characters[random2];
	}
	ps1.textContent = password1;
	ps2.textContent = password2;
});
