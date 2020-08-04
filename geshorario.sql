-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2020 a las 18:09:39
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
  `codigo` varchar(15) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`id`, `codigo`, `nombre`, `estado`) VALUES
(1, 'geo2', 'geometria2', 0),
(3, 'geo1 ', 'geometria 1', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula`
--

CREATE TABLE `aula` (
  `id` int(3) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `abreviatura` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula_horario`
--

CREATE TABLE `aula_horario` (
  `id` int(4) NOT NULL,
  `id_aula` int(3) NOT NULL,
  `id_horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curricula`
--

CREATE TABLE `curricula` (
  `id` int(11) NOT NULL,
  `id_titulo` int(2) NOT NULL,
  `id_asignatura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curricula_horario`
--

CREATE TABLE `curricula_horario` (
  `id` int(11) NOT NULL,
  `id_curricula` int(11) NOT NULL,
  `id_horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(5) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `id_curricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_horario`
--

CREATE TABLE `grupo_horario` (
  `id` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `id` int(11) NOT NULL,
  `inicio` datetime NOT NULL,
  `fin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(3) NOT NULL,
  `nombres` varchar(35) NOT NULL,
  `apellidos` varchar(35) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `clave` varchar(300) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `id_rol` int(1) NOT NULL,
  `telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombres`, `apellidos`, `dni`, `email`, `clave`, `estado`, `id_rol`, `telefono`) VALUES
(8, 'Maria', 'Sandoval', '20004232t', 'fajoroli@gmail.com', 'techo456', 1, 4, ''),
(36, 'Fany', 'Eveling', '23924232t', 'asistentededicado@gmail.com', '$2y$10$7ioZuT6W51CgBTSCWxW80Oz3nKV5gyKuZjmuAft5O8iotyLERgdQ.', 1, 4, '693478226'),
(37, 'Fany', 'Queralt', '23924230t', 'rominaqueralt@gmail.com', '$2y$10$jibAbOw0y/TGx0SST/JwJuTSt85C3dREqMHL6A6NjFdsIuYJ9Kz.O', 1, 4, '693478222'),
(39, 'Carlasasfasf', 'Riverola', '239242587e', 'carlariverola@gmail.com', '$2y$10$v2QzFBv/MRBevHMbgo0l3udYnlY8BvgXM.2nb6gJ.MSZKq6R8QptK', 1, 4, '697852632'),
(40, 'Maria', 'Laurador', '69269512t', 'lauradormaria@gmail.com', '$2y$10$HSPEehwd0fMDP0Zd8rzl2eoOfu.XBKERyIuPY.RlzRvkmG54opPgC', 1, 4, '693478222'),
(41, 'Fany', 'asjfosiejfsiofjos', '23654585t', 'huacho1@gmail.com', '$2y$10$B41jqmg8dz67M.nzzjBar.ezvwuxkJbvK52xUD79RSvhBZRf2sbiC', 1, 4, '693478226'),
(42, 'mercedes', 'fernandes', '561456146', 'huacho11@gmail.com', '$2y$10$z4o//xvTEtDAAeGplnvoretXSjuILc45ZUCOBZ9D5lFYtsYd/xweq', 1, 4, '12561456156');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profe_horario`
--

CREATE TABLE `profe_horario` (
  `id` int(4) NOT NULL,
  `id_profe` int(3) NOT NULL,
  `id_horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(2, 'administrador'),
(3, 'coordinador'),
(4, 'profesor'),
(5, 'estudiante'),
(6, 'portero'),
(7, 'portero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulo`
--

CREATE TABLE `titulo` (
  `id` int(2) NOT NULL,
  `nombre` varchar(35) NOT NULL,
  `curso` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indices de la tabla `aula_horario`
--
ALTER TABLE `aula_horario`
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
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `usuario` (`email`);

--
-- Indices de la tabla `profe_horario`
--
ALTER TABLE `profe_horario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `titulo`
--
ALTER TABLE `titulo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `aula`
--
ALTER TABLE `aula`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `aula_horario`
--
ALTER TABLE `aula_horario`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curricula`
--
ALTER TABLE `curricula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `profe_horario`
--
ALTER TABLE `profe_horario`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
