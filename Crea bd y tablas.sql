USE tp_adopcion;
-- Tabla Usuario
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  contraseña VARCHAR(100) NOT NULL,
  rol ENUM('comun', 'adm') DEFAULT 'comun',
  tipoVivienda VARCHAR(100),
  tieneNiños BOOLEAN,
  tieneMascotas BOOLEAN,
  horasDisponibles INT,
  preferenciaTamaño VARCHAR(50),
  preferenciaEspecie VARCHAR(50)
);
-- Tabla Veterinario
CREATE TABLE veterinarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  matricula VARCHAR(50) UNIQUE NOT NULL
);
-- Tabla Especie
CREATE TABLE especies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);
-- Tabla Mascota
CREATE TABLE mascotas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  edad INT,
  compatibleNiños BOOLEAN,
  compatibleMascotas BOOLEAN,
  vacunas TEXT,
  castrado BOOLEAN,
  usuarioId INT,
  -- FK: quien la publica
  especieId INT,
  -- FK: especie
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
  FOREIGN KEY (especieId) REFERENCES especies(id)
);
-- Tabla Patología
CREATE TABLE patologias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  observacion TEXT,
  mascotaId INT,
  especieId INT,
  FOREIGN KEY (mascotaId) REFERENCES mascotas(id),
  FOREIGN KEY (especieId) REFERENCES especies(id)
);
-- Tabla Consulta Veterinaria
CREATE TABLE consultas_veterinarias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE,
  observacion TEXT,
  mascotaId INT,
  veterinarioId INT,
  FOREIGN KEY (mascotaId) REFERENCES mascotas(id),
  FOREIGN KEY (veterinarioId) REFERENCES veterinarios(id)
);
-- Tabla Solicitud de Adopción
CREATE TABLE solicitudes_adopcion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE,
  estado VARCHAR(50) DEFAULT 'pendiente',
  usuarioId INT,
  mascotaId INT,
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
  FOREIGN KEY (mascotaId) REFERENCES mascotas(id)
);