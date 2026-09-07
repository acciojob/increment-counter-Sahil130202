//your JS code here. If required.
let counter = document.getElementById("counter")
let incrementBtn = document.getElementById("incrementBtn")
let count = 0

incrementBtn.addEventListener("click",function(){
	alert(count)
	count++
	counter.innertext(count)
	
})