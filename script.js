function volume_sphere(radius) {
    //Write your code here
	let r = radius;
	let volume = (4/3) * Math.PI * r * r * r;
	let roundVolume = volume.toFixed(4);
	return roundVolume;
} 

let form = document.getElementById("MyForm")

form.addEventListener("submit",function(event) {
	event.preventDefault();
	
	let radius = parseFloat(document.querySelector('#radius').value);
	
	if (!isNaN(radius) && radius >= 0) {
		let volume_of_sphere = volume_sphere(radius);
		document.querySelector('#volume').value = volume_of_sphere;
	}
	else{
		alert('NaN');
		document.querySelector('#volume').value = "NaN"
	}
	
})







