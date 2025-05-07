//your JS code here. If required.
var username = document.getElementById('username')
var password = document.getElementById('password')
var checkbox = document.getElementById('checkbox')
var submitBtn = document.getElementById('submit')
var existingUser = document.getElementById('existing')
const formContainer = document.getElementById('form-container')

window.onload = function (){
	const savedUser = localStorage.getItem("userObj")
	if(savedUser){
		existingUser.style.display = "block"
	}
}
function handleCredentials(e){
	e.preventDefault()
	alert(`Logged in as ${username.value}`)
	if(checkbox.checked){
		let userObj = {
			username: username.value,
			password: password.value
		}
		localStorage.setItem("userObj", JSON.stringify(userObj))
	} else {
		localStorage.removeItem("userObj")
	}
	formContainer.style.display = "none"
	if(localStorage.getItem("userObj")){
		existingUser.style.display = "block";
	}
}

existingUser.addEventListener('click', function(){
	const saved = JSON.parse(localStorage.getItem('userObj'))
	if(saved){
		alert("Logged in as ${saved.username}")
		formContainer.style.display = "none"
	}
})

submitBtn.addEventListener('click', handleCredentials)


