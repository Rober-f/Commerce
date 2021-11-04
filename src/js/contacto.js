
/* traigo el form por su id */
 let form = document.getElementById("contact-form");


form.addEventListener("submit",function(e){

    e.preventDefault();
    let nme = document.getElementById("name");
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");

    console.log("enviado");

    Email.send({
        SecureToken : "fc1e6f88-3a36-4dd6-b47d-378c1960db2f",
        To : "rockietess@gmail.com",
        From : "rockietess@gmail.com",
        Subject : "This is the subject",
        Body : `Hola soy ${nme} mi correo es ${email} \n ${message} \n mi telefono es ${phone}`
    }).then(
      message => alert(message)
    );

    /* validacion del campo nombre */
    if(nme.value.length == 0){
        
    alert("No puede estar el campo nombre vacio");
    }

    /* validación del campo email */
    if(email.length <= 8){
        alert("Error en el campo email")
        console.log(`La longitud de tu email es incorrecta ${email}`)
    }

    /* parseamos el dato phone a number */
    let phone_number=parseInt(phone.value,10);

    /* validaciones del campo telefono */
    if(phone.value.length<10 || phone_number <= 0 || phone.value.length >=11){
        phone.classList.add("is-invalid");
        alert("Número de teléfono erróneo, verifica tu número.")
    }else if(isNaN(phone.value)){
        phone.classList.add("is-invalid");
        alert("No ingresar palabras en el campo de teléfono.")
    }else{
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        console.log("número telefonico correcto");
    }

    if(message.value.length == 0 || message.value.length <20){
        alert("No puede estar el campo texto vacío");

    }
    
}); 