
  var form = document.getElementById("formRegistro");
  var overlayModal = document.getElementById("overlayModal");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var password = document.getElementById("password").value;

    var campos = [
      { valido: soloLetras(nombre), error: "errorNombre", mensaje: "Solo se permiten letras." },
      { valido: validarCorreo(correo), error: "errorCorreo", mensaje: "Correo no válido." },
      { valido: validarTelefono(telefono), error: "errorTelefono", mensaje: "Teléfono no válido (10 dígitos)." },
      { valido: esMayorDeEdad(fechaNacimiento), error: "errorFecha", mensaje: "Debes ser mayor de edad." },
      { valido: validarPassword(password), error: "errorPassword", mensaje: "Contraseña no válida." }
    ];

    var formularioValido = true;

    for (var i = 0; i < campos.length; i++) {
      var campo = campos[i];
      if (campo.valido) {
        document.getElementById(campo.error).textContent = "";
      } else {
        document.getElementById(campo.error).textContent = campo.mensaje;
        formularioValido = false;
      }
    }

    if (!formularioValido) return;

    var nombreCapitalizado = capitalizarTexto(nombre);
    var edad = calcularEdad(fechaNacimiento);

    console.log("Registro exitoso:", nombreCapitalizado, edad);

    document.getElementById("textoEdad").textContent = "Hola " + nombreCapitalizado + ", tu edad es: " + edad + " años.";
    overlayModal.classList.add("activo");
  });

  document.getElementById("cerrarModal").addEventListener("click", function () {
    overlayModal.classList.remove("activo");
    form.reset();
  });