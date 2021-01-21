-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 01:40 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `age` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `imageUrl` varchar(200) NOT NULL,
  `googleId` varchar(100) NOT NULL,
  `fbId` varchar(100) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `country` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `zip` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `otp` varchar(10) NOT NULL,
  `emailVerificationKey` varchar(300) NOT NULL,
  `isVerified` tinyint(1) NOT NULL,
  `forgotPasswordKey` varchar(300) NOT NULL,
  `role` varchar(10) NOT NULL,
  `allowNotification` tinyint(1) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdOn` date NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `gender`, `age`, `password`, `imageUrl`, `googleId`, `fbId`, `ip`, `country`, `region`, `zip`, `latitude`, `longitude`, `otp`, `emailVerificationKey`, `isVerified`, `forgotPasswordKey`, `role`, `allowNotification`, `isDeleted`, `isActive`, `createdOn`, `createdAt`, `updatedAt`) VALUES
(4, 'Abdullah', 'Hasham', 'abc@gmail.com', '3102666910', 'Male', '26', '123', 'www.abc.com', '', '', '', 'Pakistan', 'Orangi', '', '', '', '', '', 0, '', 'BUYER', 0, 0, 0, '0000-00-00', '0000-00-00', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
