CREATE DATABASE IF NOT EXISTS peluditos_home
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE peluditos_home;

-- USUARIOS
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('user','vet') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MASCOTAS
CREATE TABLE IF NOT EXISTS pets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  owner_id INT NOT NULL,
  name VARCHAR(80) NOT NULL,
  species ENUM('perro','gato','otro') DEFAULT 'perro',
  size ENUM('pequeño','mediano','grande') DEFAULT 'mediano',
  sex ENUM('macho','hembra','otro') DEFAULT 'macho',
  age_years INT DEFAULT 0,
  age_months INT DEFAULT 0,
  location VARCHAR(150),
  is_vaccinated TINYINT(1) DEFAULT 0,
  is_neutered TINYINT(1) DEFAULT 0,
  good_with_kids TINYINT(1) DEFAULT 0,
  good_with_pets TINYINT(1) DEFAULT 0,
  status ENUM('en_adopcion','reservada','adoptada') DEFAULT 'en_adopcion',
  description TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (owner_id) REFERENCES users(id)
);

-- SOLICITUDES DE ADOPCIÓN
CREATE TABLE IF NOT EXISTS adoption_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pet_id INT NOT NULL,
  user_id INT NOT NULL,
  status ENUM('pendiente','aceptada','rechazada') DEFAULT 'pendiente',
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pet_id) REFERENCES pets(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- PLANES VETERINARIOS
CREATE TABLE IF NOT EXISTS vet_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  price INT NOT NULL,
  description TEXT
);

INSERT INTO vet_plans (name, price, description) VALUES
('Plan Básico', 3500, 'Consultas por chat 24/7, 3 videollamadas mensuales y recetas digitales.'),
('Plan Plus', 5400, 'Chat y video ilimitado, 20% en guardias y recordatorios de vacunas.'),
('Plan VIP', 7000, 'Atención prioritaria, 30% en farmacia y coordinación de turnos presenciales.');

-- SUSCRIPCIONES DE USUARIO A PLANES
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  plan_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status ENUM('activa','vencida','cancelada') DEFAULT 'activa',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (plan_id) REFERENCES vet_plans(id)
);

-- CONSULTAS VETERINARIAS
CREATE TABLE IF NOT EXISTS vet_consults (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  vet_id INT NULL,
  pet_id INT NULL,
  urgency ENUM('baja','media','alta') NOT NULL,
  topic VARCHAR(120) NOT NULL,
  detail TEXT NOT NULL,
  contact_mode ENUM('chat','video') NOT NULL,
  status ENUM('pendiente','en_progreso','finalizada') DEFAULT 'pendiente',
  covered_by_plan TINYINT(1) DEFAULT 0,
  result TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (vet_id) REFERENCES users(id),
  FOREIGN KEY (pet_id) REFERENCES pets(id)
);

-- DONACIONES
CREATE TABLE IF NOT EXISTS donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  amount INT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- SOPORTE
CREATE TABLE IF NOT EXISTS support_tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  status ENUM('abierto','resuelto') DEFAULT 'abierto',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- VOLUNTARIADO
CREATE TABLE IF NOT EXISTS volunteer_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  status ENUM('pendiente','aceptado','rechazado') DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
