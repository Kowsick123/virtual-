function validate()
{
	var email=document.getElementById("Email").value;
	var password=document.getElementById("Password").value;
	if(email=="admin"&& password=="user")
		{
			alert("Succesfully logged in");
            window.location.replace ("main.html");
			return false;
		}
		else{
			alert("login failed"); 
		}
}