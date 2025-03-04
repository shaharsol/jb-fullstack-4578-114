-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 02, 2025 at 07:42 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ampm`
--
CREATE DATABASE IF NOT EXISTS `ampm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `ampm`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
('73e5286c-f739-11ef-ac22-0242ac110002', 'Beverages', '2025-03-02 07:37:22', '2025-03-02 07:37:22'),
('73e53176-f739-11ef-ac22-0242ac110002', 'Dairy', '2025-03-02 07:37:22', '2025-03-02 07:37:22'),
('73e5373a-f739-11ef-ac22-0242ac110002', 'Meat', '2025-03-02 07:37:22', '2025-03-02 07:37:22');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `production_time` datetime NOT NULL,
  `expiration_time` datetime NOT NULL,
  `category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `production_time`, `expiration_time`, `category_id`, `price`, `created_at`, `updated_at`) VALUES
('b312e84c-f739-11ef-ac22-0242ac110002', 'Coca Cola', '2025-03-02 07:39:55', '2025-03-02 07:39:55', '73e5286c-f739-11ef-ac22-0242ac110002', 8, '2025-03-02 07:39:55', '2025-03-02 07:39:55'),
('b312f875-f739-11ef-ac22-0242ac110002', 'Martini Bianco', '2025-03-02 07:39:55', '2025-03-02 07:39:55', '73e5286c-f739-11ef-ac22-0242ac110002', 28, '2025-03-02 07:39:55', '2025-03-02 07:39:55'),
('b31300b9-f739-11ef-ac22-0242ac110002', 'Danone Strawberry', '2025-03-02 07:39:55', '2025-03-02 07:39:55', '73e5373a-f739-11ef-ac22-0242ac110002', 9, '2025-03-02 07:39:55', '2025-03-02 07:39:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
