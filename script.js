// Cambia esta dirección por el correo real del taller antes de entregar la web.
    const DESTINATION_EMAIL = "correo@ejemplo.com";

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.innerHTML = isOpen ? "✕ <span class='sr-only'>Cerrar menú</span>" : "☰ <span class='sr-only'>Abrir menú</span>";
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰ <span class='sr-only'>Abrir menú</span>";
      });
    });
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("contactForm").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      if (DESTINATION_EMAIL === "correo@ejemplo.com") {
        document.getElementById("formStatus").textContent =
          "Demostración: cambia DESTINATION_EMAIL en el archivo index.html por el correo autorizado del negocio para probar el formulario.";
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent("Consulta desde la web de Racing Garage");
      const body = encodeURIComponent(
        "Nombre: " + data.get("name") + "\n" +
        "Teléfono: " + (data.get("phone") || "No indicado") + "\n" +
        "Correo: " + data.get("email") + "\n" +
        "Servicio: " + data.get("service") + "\n\n" +
        "Mensaje:\n" + data.get("message")
      );
      window.location.href = `mailto:${DESTINATION_EMAIL}?subject=${subject}&body=${body}`;
      document.getElementById("formStatus").textContent =
        "Se ha solicitado abrir tu aplicación de correo. Revisa el mensaje antes de enviarlo.";
    });
