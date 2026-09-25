
    var form = document.getElementById("formLogin");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var correo = document.getElementById("correo").value;
      var password = document.getElementById("password").value;

      document.getElementById("errorCorreo").textContent = "";
      document.getElementById("errorPassword").textContent = "";

      var valido = true;

      if (!validarCorreo(correo)) {
        document.getElementById("errorCorreo").textContent = "Correo no válido.";
        valido = false;
      }

      if (!validarPassword(password)) {
        document.getElementById("errorPassword").textContent = "Contraseña no válida.";
        valido = false;
      }

      if (valido) {
        console.log("Inicio de sesión correcto");
        console.log("Correo:", correo);
        alert("Bienvenido, inicio de sesión correcto.");
      }
    });
 