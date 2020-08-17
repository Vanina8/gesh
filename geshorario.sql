-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2020 a las 16:00:25
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `geshorario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `id` int(11) NOT NULL,
  `codigo` varchar(15) CHARACTER SET utf8 NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`id`, `codigo`, `nombre`, `estado`) VALUES
(40, 'Mark-MTIC', 'Direcci&oacute;n de mastketing y ventas en el', 0),
(41, 'Proy-MTIC', 'Gestión de Proyectos', 1),
(42, 'EF-MTIC', 'Gesti&oacute;n Econ&oacute;mica-financiera', 0),
(43, 'Emp-MTIC', 'Gesti&oacute;n Empresarial', 1),
(44, 'MP-MTIC', 'Metodolog&iacute;a de Proyectos', 0),
(45, 'SI-MTIC', 'Sistemas de informaci&oacute;n ', 1),
(46, 'DP-MTIC', 'Desarrollo Profesional', 0),
(47, 'DO-MTIC', 'Direcci&oacute;n de operaciones', 0),
(48, 'DOM1-IngSis', 'Dom&oacute;tica B&aacute;sica', 0),
(49, 'Log-IngSis', 'L&oacute;gica Matem&aacute;tica', 0),
(50, 'PD-IngSis', 'Programación distribuida', 0),
(51, 'Log3-IngSis', 'Lógica matemática 3', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula`
--

CREATE TABLE `aula` (
  `id` int(3) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aula`
--

INSERT INTO `aula` (`id`, `nombre`, `estado`, `id_categoria`) VALUES
(5, 'A-101', 0, 8),
(6, 'A-102', 0, 6),
(7, 'A-103', 0, 5),
(8, 'A-105', 0, 8),
(9, 'A-108', 0, 8),
(10, 'A-110', 0, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaaula`
--

CREATE TABLE `categoriaaula` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoriaaula`
--

INSERT INTO `categoriaaula` (`id`, `nombre`) VALUES
(5, 'Sant Miquel'),
(6, 'Sant Jaume'),
(8, 'Laboratorio'),
(9, 'Parques'),
(10, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curricula`
--

CREATE TABLE `curricula` (
  `id` int(11) NOT NULL,
  `id_titulo` int(2) NOT NULL,
  `codigo_asig` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `curricula`
--

INSERT INTO `curricula` (`id`, `id_titulo`, `codigo_asig`) VALUES
(1, 19, '0'),
(2, 19, '0'),
(3, 19, 'Com1-IngSis'),
(4, 20, 'Mark-MTIC'),
(5, 20, 'Proy-MTIC'),
(6, 20, 'EF-MTIC'),
(7, 20, 'Emp-MTIC'),
(8, 20, 'MP-MTIC'),
(9, 20, 'SI-MTIC'),
(10, 20, 'DP-MTIC'),
(11, 20, 'DO-MTIC'),
(12, 19, 'DOM1-IngSis'),
(13, 19, 'Log-IngSis'),
(14, 19, 'IC-IngSis'),
(15, 19, 'Log2-IngSis'),
(16, 19, 'Log3-IngSis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `id_curricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id`, `nombre`, `descripcion`, `id_curricula`) VALUES
(1, '1ero.', '', 0),
(4, '1ero. D', '', 0),
(5, '2do A', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_asig`
--

CREATE TABLE `grupo_asig` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_asig` int(11) NOT NULL,
  `estado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupo_asig`
--

INSERT INTO `grupo_asig` (`id`, `id_grupo`, `id_asig`, `estado`) VALUES
(2, 4, 49, 0),
(7, 4, 41, 0),
(8, 4, 47, 0),
(9, 5, 44, 0),
(10, 5, 41, 0),
(11, 4, 44, 0),
(13, 4, 42, 0),
(14, 4, 48, 0),
(15, 1, 51, 0),
(16, 1, 41, 0),
(17, 4, 43, 0),
(20, 4, 51, 0),
(21, 1, 49, 0),
(22, 5, 51, 0),
(23, 4, 46, 0),
(24, 1, 46, 0),
(25, 1, 45, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `id` int(6) NOT NULL,
  `semestre` int(1) NOT NULL,
  `curso` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(3) NOT NULL,
  `nombres` varchar(35) CHARACTER SET utf8 NOT NULL,
  `apellidos` varchar(35) CHARACTER SET utf8 NOT NULL,
  `dni` varchar(10) CHARACTER SET utf8 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `clave` varchar(300) CHARACTER SET utf8 NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `id_rol` int(1) NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombres`, `apellidos`, `dni`, `email`, `clave`, `estado`, `id_rol`, `telefono`) VALUES
(41, 'Fany', 'asjfosiejfsiofjos', '23654585t', 'huacho1@gmail.com', '$2y$10$B41jqmg8dz67M.nzzjBar.ezvwuxkJbvK52xUD79RSvhBZRf2sbiC', 1, 4, '693478226'),
(43, 'Miguel', 'Miralles', '256321452', 'mm2@gmail.com', '$2y$10$kBcL51LJD/JFuSCNR9jb6e3coI/Phjele8tJe72dXZFXyVMxqa83G', 1, 4, '695852365'),
(46, 'Carla1', 'Riverola', '23695625s', 'carlita@gmail.com', '$2y$10$bnhswGNICaXwvmLq.bpUE.zCiLJZBCZKBklQkA2IZovi5O9AyOy/.', 0, 10, '69545236'),
(47, 'Romina', 'Queraltttt', '23652541r', 'huacho3@gmail.com', '$2y$10$0uxjbNMLDTW52lQrzf0.dusMU4yGqA5LqSz1o4BeVgxkTFXCv8o/u', 0, 11, '695423582'),
(48, 'Maria Elena', 'Villegas ', '36251442g', 'huacho4@gmail.com', '$2y$10$CbvCKnfgELfT57f.pSwrcuH7qMbAKHzX9Fx22NXG9Q4PRKsKWLWV.', 0, 12, '695214563'),
(49, 'Mar&iacute;a Elena', 'V&aacute;squezEchegaray', '23965458g', 'mariaelena@gmail.com', '$2y$10$iUtd/NE6iyu5d.e19fYDue5Ygyn9EEduY9U/QNXvIu4iUOXZ7QX6a', 0, 12, '693582621'),
(50, 'S&uacute;sana', 'P&eacute;rez Luna', '23695847f', 'susana@gmail.com', '$2y$10$sXDI04yImSNrdmHi0kr.3uq5QtV/tqrupqfWMlPrZWtCIWj084XVG', 0, 12, '65485256');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profe_asig`
--

CREATE TABLE `profe_asig` (
  `id` int(10) NOT NULL,
  `id_profe` int(3) NOT NULL,
  `id_asig` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profe_asig`
--

INSERT INTO `profe_asig` (`id`, `id_profe`, `id_asig`) VALUES
(1, 46, 51),
(3, 48, 44),
(4, 46, 48),
(5, 47, 45),
(6, 47, 46),
(7, 48, 46),
(8, 48, 51),
(9, 47, 51);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(1) NOT NULL,
  `nombre` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`) VALUES
(10, 'Administrador'),
(11, 'Coordinador'),
(12, 'Profesor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `id` int(11) NOT NULL,
  `id_aula` int(3) NOT NULL,
  `id_tramo` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_asig` int(11) NOT NULL,
  `id_profe` int(3) NOT NULL,
  `id_horario` int(6) NOT NULL,
  `dia` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion_asig`
--

CREATE TABLE `sesion_asig` (
  `id` int(11) NOT NULL,
  `id_sesion` int(11) NOT NULL,
  `id_asig` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion_aula`
--

CREATE TABLE `sesion_aula` (
  `id` int(4) NOT NULL,
  `id_aula` int(3) NOT NULL,
  `id_sesion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sesion_aula`
--

INSERT INTO `sesion_aula` (`id`, `id_aula`, `id_sesion`) VALUES
(1, 5, 2),
(2, 6, 3),
(3, 5, 4),
(4, 6, 5),
(5, 7, 6),
(6, 7, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion_grupo`
--

CREATE TABLE `sesion_grupo` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_sesion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion_profe`
--

CREATE TABLE `sesion_profe` (
  `id` int(4) NOT NULL,
  `id_profe` int(3) NOT NULL,
  `id_sesion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulo`
--

CREATE TABLE `titulo` (
  `id` int(2) NOT NULL,
  `nombre` varchar(35) CHARACTER SET utf8 NOT NULL,
  `curso` varchar(15) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `titulo`
--

INSERT INTO `titulo` (`id`, `nombre`, `curso`) VALUES
(2, 'Arquitectura', '2020'),
(3, 'Ingenieria Multimedia', '2020'),
(19, 'Ingenieria de Sistemas', '2020'),
(21, 'Máster en Gestión de las TIC', '2020'),
(22, 'Máster en Gestión Financiera', '2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramos`
--

CREATE TABLE `tramos` (
  `id` int(11) NOT NULL,
  `inicio` varchar(5) DEFAULT NULL,
  `fin` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tramos`
--

INSERT INTO `tramos` (`id`, `inicio`, `fin`) VALUES
(12, '10:00', '11:00'),
(13, '11:30', '12:30'),
(14, '13:00', '14:00'),
(15, '09:00', '10:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indices de la tabla `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoriaaula`
--
ALTER TABLE `categoriaaula`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `curricula`
--
ALTER TABLE `curricula`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `grupo_asig`
--
ALTER TABLE `grupo_asig`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `usuario` (`email`);

--
-- Indices de la tabla `profe_asig`
--
ALTER TABLE `profe_asig`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sesion_asig`
--
ALTER TABLE `sesion_asig`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sesion_aula`
--
ALTER TABLE `sesion_aula`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sesion_profe`
--
ALTER TABLE `sesion_profe`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `titulo`
--
ALTER TABLE `titulo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tramos`
--
ALTER TABLE `tramos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `aula`
--
ALTER TABLE `aula`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categoriaaula`
--
ALTER TABLE `categoriaaula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `curricula`
--
ALTER TABLE `curricula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `grupo_asig`
--
ALTER TABLE `grupo_asig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `horario`
--
ALTER TABLE `horario`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `profe_asig`
--
ALTER TABLE `profe_asig`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `sesion`
--
ALTER TABLE `sesion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `sesion_asig`
--
ALTER TABLE `sesion_asig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesion_aula`
--
ALTER TABLE `sesion_aula`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `sesion_profe`
--
ALTER TABLE `sesion_profe`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `titulo`
--
ALTER TABLE `titulo`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tramos`
--
ALTER TABLE `tramos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
