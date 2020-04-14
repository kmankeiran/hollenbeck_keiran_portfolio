-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 14, 2020 at 02:44 PM
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
  `Link` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `tbl_info`
--

INSERT INTO `tbl_info` (`ID`, `portID`, `Name`, `Info`, `Picture`, `Video`, `Link`) VALUES
(1, '1', 'Jet Engine', 'This project was made during school when I was getting into 3D design. I had to create a whole jet engine and the interior of it. The assignment took me a week to make when I was getting the hang of 3D design. If I were to redo this now, I could possibly get it done in about a couple hours.', 'jet-engine.png', 'jet-engine.mp4', 'No Website Link (Sorry)'),
(2, '2', 'Spiral', 'This was a little fun project that took no longer that 30 minutes. I was making this with my class and I decided to give it some lighting to make it look more captivating.', 'spiral.png', 'spiral.mp4', 'No Website Link (Sorry)'),
(3, '3', 'TRAA', 'My class was given a website that we had to observe. Our task was to redesign the website from the ground up without deleting specific things that had to be in it. This was meant to be a partner assignment, however, my partner left me in the middle of the assignment. I managed to do the whole assignment on my own. From the wire frames, to the actual developed website.', 'traa-website.png', 'no video', 'https://github.com/kmankeiran/hollenbeck_k_final_integrated'),
(4, '4', 'Music Mixer', 'This assignment was made with my partner Cheyenne Dockstader. What we had to do was create a website that drags specific objects into a boombox to make music. It was a mix of musical instruments like the Bass Guitar, Regular Guitar, and Drums. My partner did all the graphic design and I did all the developing in the project. ', 'music-mixer.png', 'no video', 'https://github.com/kmankeiran/hollenbeck_dockstader_music_mixer'),
(5, '5', 'Morphing Commercial', 'I was told to make a commercial sponsoring specific items using a technique in Motion Design called \"Morphing\". I decided to sponsor the company Best Buy and use a few technological devices for the morphing technique. The assignment took about 2 and a half weeks to make in Cinema 4D and edit using Adobe After Effects.', 'morph.png', 'hollenbeck-keiran-morph-finished.mp4', 'No Website Link (Sorry)'),
(6, '6', 'Sportsnet', 'When my class and I had enough experience with 3D Motion Design, we were given a huge assignment to make an NFL commercial. The assignment I did took me a few weeks to make; the outcome was great to me and I was happy about it. I had to make a couple of banners to support the Bears and the Cowboys. I made shiny shields with their logo on them and presented on pedestals. The arena didn\'t take long to make once you got the hang of it.', 'sportsnet.png', 'hollenbeck_keiran_sportsnet_finished.mp4', 'No Website Link (Sorry)'),
(7, '7', 'Dancing Man', 'This project is one of my favorite ones. My class and I had to create a 3D modeled person and give it some movement. Nobody said we had to do anything specific, so I decided to give my hairy man some dancing moves. He does the Gangnam Style dance. Our class added some hair to our 3D person to show the physics of hair in class, we could make it more wavy or longer if we wanted to. ', 'dancing-man.png', 'hairy-man.mp4', 'No Link to Website (Sorry)'),
(8, '8', 'POP Display', 'In one of my other classes, we were given an assignment to create a POP (Purchase of Product) stand, sponsoring an item the professor gave us. This was another assignment that you could do in partners, however, my partner left me close to the end of the assignment where I had to do all the work over again. The assignment was made all by me and it took about 5 days to make. ', 'pop.png', 'pop-stand-video.mp4', 'No Link to Website (Sorry)');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
