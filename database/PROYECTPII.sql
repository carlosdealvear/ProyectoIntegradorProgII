-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 23, 2021 at 10:14 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ProyectoPII`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `texto` varchar(200) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_posteo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `fecha`, `texto`, `id_usuario`, `id_posteo`) VALUES
(1, '2021-11-03 08:00:00', 'dale que se aprueba!', 1, 4),
(2, '2021-10-03 10:20:31', 'Eee inviten malaonda', 1, 5),
(3, '2021-12-23 12:01:54', 'grande leo!', 1, 10),
(4, '2021-11-03 08:00:00', 'ponete las pilas!', 1, 6),
(5, '2021-11-03 08:00:00', 'muy buena tardee', 2, 1),
(6, '2021-11-03 08:00:00', 'que pinta!', 2, 10),
(7, '2021-11-03 08:00:00', 'grande diegote!', 2, 8),
(8, '2021-11-03 08:00:00', 'daale carloss!', 2, 7),
(9, '2021-11-03 08:00:00', 'aver si aprobamos', 3, 1),
(10, '2021-11-03 08:00:00', 'te pidio el una foto??', 3, 2),
(11, '2021-11-03 08:00:00', 'que alegria', 3, 8),
(12, '2021-11-03 08:00:00', 'noo que ganas!', 3, 5),
(13, '2021-11-03 08:00:00', 'facha leo', 4, 2),
(14, '2021-11-03 08:00:00', 'Un placer!!', 4, 5),
(15, '2021-11-03 08:00:00', 'Que lindo equipo!', 4, 9),
(16, '2021-11-03 08:00:00', 'ganadores', 4, 10),
(17, '2021-11-03 08:00:00', 'nasheee', 5, 2),
(18, '2021-11-03 08:00:00', 'Que copado!!', 5, 5),
(19, '2021-11-03 08:00:00', 'Bien ahi', 5, 2),
(20, '2021-11-03 08:00:00', '<3', 5, 10);

-- --------------------------------------------------------

--
-- Table structure for table `posteo`
--

CREATE TABLE `posteo` (
  `id` int(11) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `descrip` varchar(200) DEFAULT NULL,
  `fecha` date NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posteo`
--

INSERT INTO `posteo` (`id`, `img`, `descrip`, `fecha`, `id_usuario`) VALUES
(1, 'bebiendo-mate-20191127-809602.jpeg', 'Aca tomando mates con mis compas de programacion', '2021-09-21', 1),
(2, 'ibaimessi.jpeg', 'Una con Leo', '2021-09-22', 1),
(3, 'Estudiar-en-casa-1.jpeg', 'Estudiandoo', '2021-09-23', 2),
(4, 'diegitoasado.jpeg', 'El Diego me invito a un asado!', '2021-09-27', 2),
(5, 'compas.jpeg', 'Aca con Franco y Sofi!', '2021-09-27', 3),
(6, 'coding.jpeg', 'Que duro esta programacioon loco', '2021-09-27', 3),
(7, 'diegomundial.jpeg', 'Throwback al mundial del 86', '2021-09-20', 4),
(8, 'messimaradona.jpeg', 'Con un gran amigo', '2021-09-27', 4),
(9, 'theboys.jpeg', 'Asado con los pibes', '2021-09-27', 5),
(10, 'copaamerica.jpeg', '#CampeonesDeAmerica', '2021-09-27', 5);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `img` varchar(1000) NOT NULL,
  `username` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `fecha`, `img`, `username`) VALUES
(1, 'Franco', 'Leone', 'fleone@udesa.edu.ar', '12345', '2002-07-04', 'franco.png', 'francoleone1'),
(2, 'Brian', 'Gomez', 'bgomez@udesa.edu.ar', '12346', '2002-09-12', 'sophi.png', 'sophia.kim'),
(3, 'Carlos', 'De Alvear', 'cdealvear@udesa.edu.ar', '12347', '2002-01-10', 'carlos.png', 'carlitosdealvear'),
(4, 'Diego Armando', 'Maradona', 'dmaradona@udesa.edu.ar', '12345', '1960-10-30', 'diegoasado.jpeg', 'eldiego1986'),
(5, 'Lionel Andres', 'Messi', 'lmessi@udesa.edu.ar', '12345', '1987-06-24', 'messi.jpeg', 'leomessi123'),
(6, 'neymar', 'neymar', 'neymar@gmail.com', '1234567', '2003-02-01', 'messi.jpeg', 'neymar6969'),
(8, 'pocho', 'lavezzi', 'pocho@gmail.com', '$2a$10$Pdewkl2HGg9R7Rz.GDGs5OFV4aXw5I5WehPvjwSztxpXf9oTmA9dO', '2220-02-02', 'messi.jpeg', 'pocholavezzi'),
(9, 'Xavi', 'Hernandez', 'xavi@gmail.com', '$2a$10$iqbE0aNM1gJjovvyY2QIOuVEXS6WFf2ozSiaMP2FAtoEJ27ugCffi', '2000-07-04', 'messi.jpeg', 'xavihernandez'),
(10, 'virginia', 'fiorini', 'virginia_fiorini@yahoo.com.ar', '$2a$10$FsenTWMJqSjlKdtQBLCEYe5TGrY.nkorLIW90mx4/glmXVJxmMsRC', '2001-02-20', 'messi.jpeg', 'virginia123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_posteo` (`id_posteo`);

--
-- Indexes for table `posteo`
--
ALTER TABLE `posteo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `posteo`
--
ALTER TABLE `posteo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_posteo`) REFERENCES `posteo` (`id`);

--
-- Constraints for table `posteo`
--
ALTER TABLE `posteo`
  ADD CONSTRAINT `posteo_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
