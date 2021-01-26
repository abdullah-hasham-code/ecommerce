-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2021 at 07:48 AM
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
-- Database: `db_employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sessions`
--

CREATE TABLE `tbl_sessions` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `session` varchar(256) NOT NULL,
  `expiretime` datetime NOT NULL,
  `status` varchar(25) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sessions`
--

INSERT INTO `tbl_sessions` (`id`, `userid`, `session`, `expiretime`, `status`, `createdAt`, `updatedAt`) VALUES
(38, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwNjA3MDMxfQ.kS-S5wkatgFRXSmyzLZZKbiBFKnbxRKFJ0oiFUB0y4Q', '0000-00-00 00:00:00', '', '2021-01-14 06:50:31', '2021-01-14 06:50:31'),
(39, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwNjA3NjM5fQ.AvLa19EWV_VEFd7Zt9yikPePTj-k0Y5tEy1ab_iSpTY', '0000-00-00 00:00:00', '', '2021-01-14 07:00:39', '2021-01-14 07:00:39'),
(40, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwNjA3NjcxfQ.7ZdRVT5T0bzxqSbH40Lhx6jRnsDCeL4nyk9kJXRfb-I', '0000-00-00 00:00:00', '', '2021-01-14 07:01:11', '2021-01-14 07:01:11'),
(41, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwNjIzNjc1fQ.ZTK1mMQPAO93OcAuF6b2_2vFWxBupLiog4tJTBWEYK0', '0000-00-00 00:00:00', '', '2021-01-14 11:27:56', '2021-01-14 11:27:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_sessions`
--
ALTER TABLE `tbl_sessions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_sessions`
--
ALTER TABLE `tbl_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
