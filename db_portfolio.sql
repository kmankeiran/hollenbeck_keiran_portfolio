-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 15, 2019 at 05:57 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_info`
--

DROP TABLE IF EXISTS `tbl_info`;
CREATE TABLE IF NOT EXISTS `tbl_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `portID` varchar(10) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Info` text NOT NULL,
  `Picture` varchar(40) NOT NULL,
  `Video` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `tbl_info`
--

INSERT INTO `tbl_info` (`ID`, `portID`, `Name`, `Info`, `Picture`, `Video`) VALUES
(1, '1', 'Jet Engine', 'This project was made during school when I was getting into 3D design. I had to create a whole jet engine and the interior of it. The assignment took me a week to make when I was getting the hang of 3D design. If I were to redo this now, I could possibly get it done in about a couple hours.', 'jet-engine.png', 'jet-engine.mp4'),
(2, '2', 'Spiral', 'This was a little fun project that took no longer that 30 minutes. I was making this with my class and I decided to give it some lighting to make it look more captivating.', 'spiral.png', 'spiral.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
