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
    { name: "Brenda Samuel", job: "Marketing digital", image: "https://mighty.tools/mockmind-api/content/human/26.jpg", rating: 4.8 }
];

// Mostrar freelancers destacados en la página
function mostrarFreelancers() {
  const freelancerContainer = document.getElementById('freelancers');
  freelancerContainer.innerHTML = '';
  
  for (let i = 0; i < freelancers.length; i++) {
    const freelancer = freelancers[i];
    if (freelancer.rating > 4.2){
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
}
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
}


// Inicialización
window.onload = function() {
  mostrarFreelancers();
};