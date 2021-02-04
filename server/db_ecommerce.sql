-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2021 at 12:38 PM
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
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `categoryId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `shopId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `productId` int(11) NOT NULL,
  `shopId` int(250) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productName` varchar(250) NOT NULL,
  `productDescription` varchar(250) NOT NULL,
  `marketPrice` int(11) NOT NULL,
  `ourPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`productId`, `shopId`, `categoryId`, `userId`, `productName`, `productDescription`, `marketPrice`, `ourPrice`) VALUES
(15, 4, 0, 1, 'Product1', 'product1 desc', 10, 9),
(16, 4, 0, 1, 'Product2', 'product2 desc', 15, 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sessions`
--

CREATE TABLE `tbl_sessions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `session` varchar(256) NOT NULL,
  `expireTime` datetime NOT NULL,
  `status` varchar(25) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sessions`
--

INSERT INTO `tbl_sessions` (`id`, `userId`, `session`, `expireTime`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEyMzM2NTU0LCJleHAiOjE2MTI0MjI5NTR9.ai7T3zo0oW4DeWZP5hOlPqixM13HDeiyh8n2gc-W55o', '0000-00-00 00:00:00', 'OPEN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEyMzM2NjU1LCJleHAiOjE2MTI0MjMwNTV9.Oz0vMHsCt0HBVywqSeuLUzRBm_iDIwmltSrJyb8i1vw', '0000-00-00 00:00:00', 'OPEN', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shops`
--

CREATE TABLE `tbl_shops` (
  `shopId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `shopName` varchar(100) NOT NULL,
  `shopDescription` varchar(512) NOT NULL,
  `shopFor` varchar(25) NOT NULL,
  `shopLogo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_shops`
--

INSERT INTO `tbl_shops` (`shopId`, `userId`, `shopName`, `shopDescription`, `shopFor`, `shopLogo`) VALUES
(4, 1, 'My shop', 'Dummy text', 'My shop', 'img.src');

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
(1, 'Abdullah', 'Hasham', 'abdullahhashamtestseller@gmail.com', '3102666910', 'Male', '26', '123', 'www.abc.com', '', '', '', 'Pakistan', 'Orangi', '', '', '', '268022', '', 1, '', 'SELLER', 0, 0, 1, '0000-00-00', '0000-00-00', '0000-00-00'),
(2, 'Abdullah', 'Hasham', 'abdullahhashamtestbuyer@gmail.com', '3102666910', 'Male', '26', '123', 'www.abc.com', '', '', '', 'Pakistan', 'Orangi', '', '', '', '876573', '', 1, '', 'BUYER', 0, 0, 1, '0000-00-00', '0000-00-00', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `tbl_sessions`
--
ALTER TABLE `tbl_sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_shops`
--
ALTER TABLE `tbl_shops`
  ADD PRIMARY KEY (`shopId`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_sessions`
--
ALTER TABLE `tbl_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_shops`
--
ALTER TABLE `tbl_shops`
  MODIFY `shopId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
