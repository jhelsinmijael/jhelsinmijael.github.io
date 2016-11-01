function ingresar(){
  var user = document.getElementById("input_user").value;
  var password = document.getElementById("input_password").value;
  if(user=="jhelsinmijael" && password=="mijael"){
    window.open("horario.html",'','width=100%,heigth=100%');
  }else{
    alert("User or password incorrect");
  }
}
