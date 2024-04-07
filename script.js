function volume_sphere(radius) {
    //Write your code here
	let pi = 22/7;
	let fourThird = 4/3
	let volume = fourThird * pi * r * r * r;
	let roundVolume = volume.toFixed(4);
	return roundVolume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

let form = document.getElementById("MyForm")

form.addEventListener("click",function(event) {
	event.preventDefault();
	
	let radius = parseFloat(document.querySelector("#radius").value);
	
	if (!isNaN(radius)) {
		let volume_of_sphere = volume_sphere(radius);
		document.querySelector("#volume").value = volume_of_sphere;
	}
	else{
		alert('Please enter a valid number for the radius.');
	}
	
})







