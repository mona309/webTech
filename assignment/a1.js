
function handleSubmit() {
var name = document.getElementById("name").value;
var mail=document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var feedback = document.getElementById("feedback").value;
if (phone.length !== 10) {
alert("Phone number must be exactly 10 digits.");
return false;
}
const domain = mail.split('.')[1];
if(domain.length<=1){
    alert("enter valid domain name.");
return false;
}
if (feedback.trim() === "") {
alert("Please provide your feedback.");
return false;
}
alert("Thank you for your feedback, " + name + "!");
return true;
}