// Usuarios de prueba
let usuarios = [
  { username: "cliente", password: "cliente123", rol: "cliente" },
  { username: "freelancer", password: "freelancer123", rol: "freelancer" }
];

// Datos simulados de freelancers
const freelancers = [
    { name: "Juana Arango", job: "Desarrollador Web", image: "https://mighty.tools/mockmind-api/content/human/68.jpg", rating: 4.8 },
    { name: "Ana López", job: "Diseñadora Gráfica", image: "https://mighty.tools/mockmind-api/content/human/44.jpg", rating: 4.7 },
    { name: "Carlos Martínez", job: "Fotógrafo", image: "https://mighty.tools/mockmind-api/content/human/42.jpg", rating: 4.3 },
    { name: "Francisco Franco", job: "Desarrollador Back end", image: "https://mighty.tools/mockmind-api/content/human/7.jpg", rating: 4.1 },
    { name: "Victoria Salas", job: "Desarrollador Front end", image: "https://mighty.tools/mockmind-api/content/human/49.jpg", rating: 4.6 },
    { name: "Mercedes Zulbarán", job: "Asesorías financieras", image: "https://mighty.tools/mockmind-api/content/human/43.jpg", rating: 4.9 },
    { name: "Miguel Martínez", job: "Docente de matemática", image: "https://mighty.tools/mockmind-api/content/human/72.jpg", rating: 4.0 },
    { name: "Samara Richards", job: "Entrenadora personal", image: "https://mighty.tools/mockmind-api/content/human/55.jpg", rating: 4.0 },
    { name: "Brenda Samuel", job: "Marketing digital", image: "https://mighty.tools/mockmind-api/content/human/26.jpg", rating: 4.8 },
    { name: "Virginia Beltran", job: "Diseñadora de modas", image: "https://mighty.tools/mockmind-api/content/human/6.jpg", rating: 4.0 }
];

// Mostrar freelancers destacados en la página
function mostrarFreelancers() {
  const freelancerContainer = document.getElementById('freelancers');
  freelancerContainer.innerHTML = ''; // Limpiar el contenedor

  freelancers.forEach(freelancer => {
    if (freelancer.rating >= 4.3){
    const card = `
      <div class="freelancer-card">
        <img src="${freelancer.image}" alt="${freelancer.name}">
        <h3>${freelancer.name}</h3>
        <p>${freelancer.job}</p>
        <p>⭐ ${freelancer.rating}</p>
      </div>
    `;
    freelancerContainer.innerHTML += card;
  }
  });

  // Asignar eventos de clic a los freelancers una vez que se carguen las tarjetas
  
}

// Función para mostrar el formulario de inicio de sesión
function mostrarFormularioLogin() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('registro-form').style.display = 'none';
}

// Función para mostrar el formulario de registro
function mostrarFormularioRegistro() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('registro-form').style.display = 'block';
}

// Función para iniciar sesión
function iniciarSesion() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = usuarios.find(function(u) {
    return u.username === username && u.password === password;
});


  // Ocultar el mensaje de error al intentar iniciar sesión
  document.getElementById('login-error').style.display = 'none';

  if (user) {
    // Iniciar sesión exitosamente
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'block';

    if (user.rol === 'cliente') {
      document.getElementById('profile-link').style.display = 'none';
      document.getElementById('freelancer-lista').style.display = 'block';
    } else if (user.rol === 'freelancer') {
      document.getElementById('profile-link').style.display = 'block';  // Mostrar enlace "Mi Perfil"
      document.getElementById('freelancer-lista').style.display = 'none';
      document.getElementById('crear-perfil').style.display = 'none';  // Ocultar formulario de creación de perfil
    }
    alert(`Bienvenido, ${user.username} (${user.rol})`);
  } else {
    // Mostrar mensaje de error si las credenciales son incorrectas
    document.getElementById('login-error').style.display = 'block';
  }
  asignarEventosFreelancers();
}


// Función para mostrar el formulario de crear perfil cuando el freelancer haga clic en "Mi Perfil"
function mostrarCrearPerfil() {
  document.getElementById('crear-perfil').style.display = 'block';  // Mostrar formulario de creación de perfil
}


// Función para guardar el perfil de freelancer
function guardarPerfilFreelancer() {
  const name = document.getElementById('freelancer-name').value;
  const job = document.getElementById('freelancer-job').value;
  const image = document.getElementById('freelancer-image').value;

  if (name && job && image) {
    freelancers.push({
      name: name,
      job: job,
      image: image,
      rating: 4.5 // Puntuación fija
    });

    // Actualizar la lista de freelancers destacados
    mostrarFreelancers();

    document.getElementById('perfil-guardado').style.display = 'block'; // Mostrar mensaje de guardado
    document.getElementById('crear-perfil').style.display = 'none'; // Ocultar formulario
    alert("Perfil creado exitosamente.");
  } else {
    alert("Por favor, completa todos los campos.");
  }
}


// Función para cerrar sesión
function cerrarSesion() {
  document.getElementById('logout-link').style.display = 'none';
  document.getElementById('login-link').style.display = 'block';
  document.getElementById('profile-link').style.display = 'none';
  document.getElementById('freelancer-lista').style.display = 'block';
  alert('Sesión cerrada');
}

// Función para registrar nuevos usuarios
function registrarse() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const rol = document.getElementById('role').value;

  if (username && password) {
    usuarios.push({ username: username, password: password, rol: rol });
    alert(`Usuario registrado exitosamente como ${rol}`);
    document.getElementById('registro-form').style.display = 'none';
  } else {
    document.getElementById('registro-error').style.display = 'block';
  }
}

// Función para filtrar freelancers por profesión
function buscarFreelancers() {
  const buscarTermino = document.getElementById('search-input').value.toLowerCase();
  const filtrarFreelancers = freelancers.filter(function(freelancer) {
    return freelancer.job.toLowerCase().includes(buscarTermino);
});


  const freelancerContainer = document.getElementById('freelancers');
  freelancerContainer.innerHTML = ''; // Limpiar la lista actual

  if (filtrarFreelancers.length > 0) {
    for (let i = 0; i < filtrarFreelancers.length; i++) {
      const freelancer = filtrarFreelancers[i];
      const card = `
        <div class="freelancer-card">
          <img src="${freelancer.image}" alt="${freelancer.name}">
          <h3>${freelancer.name}</h3>
          <p>${freelancer.job}</p>
          <p>⭐ ${freelancer.rating}</p>
        </div>
      `;
      freelancerContainer.innerHTML += card;
    }
  } else {
    freelancerContainer.innerHTML = '<p>No se encontraron freelancers con esa profesión.</p>';
  }
  asignarEventosFreelancers();
}

// Variable global para guardar el cliente logueado
let clienteActivo = null;

// Función para mostrar el pop-up con el nombre del freelancer y del cliente
function mostrarPopupFreelancer(freelancerName) {
  const popup = document.getElementById('popup-form');
  const freelancerNombre = document.getElementById('freelancer-nombre');
  const clienteNombre = document.getElementById('cliente-nombre');
  
  // Establecer los nombres en el formulario
  freelancerNombre.textContent = freelancerName;
  clienteNombre.textContent = clienteActivo?.username || 'Cliente';  // Nombre del cliente logueado
  
  // Mostrar el pop-up
  popup.style.display = 'block';
}

// Función para cerrar el pop-up
function cerrarPopup() {
  document.getElementById('popup-form').style.display = 'none';
}

// Función para enviar el mensaje de prueba
 function enviarMensaje() {
  const mensaje = document.getElementById('mensaje').value;
  if (mensaje.trim()) {
    alert("Mensaje enviado: " + mensaje);
      document.getElementById('mensaje').value = ''; // Limpiar el área de texto
    cerrarPopup();
  } else {
    alert("Por favor, escribe un mensaje.");
  }
} 

// Función para asignar eventos de clic a los freelancers visibles
function asignarEventosFreelancers() {
  const freelancerCards = document.querySelectorAll('.freelancer-card');
  
  freelancerCards.forEach(card => {
    card.addEventListener('click', function() {
      const freelancerName = card.querySelector('h3').textContent; // Obtener el nombre del freelancer
      mostrarPopupFreelancer(freelancerName);
    });
  });
}




// Inicialización
window.onload = function() {
  mostrarFreelancers();
};