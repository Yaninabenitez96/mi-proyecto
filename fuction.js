function mostrarfechahora(){
    var fechahora=newDate();
    var fechahoraString=fechahora.tolocaleString();
document.getElementById("fecha-hora").innerHTML=fechahoraString;
}