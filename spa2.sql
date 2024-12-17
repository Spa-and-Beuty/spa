/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.4.3-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: spa
-- ------------------------------------------------------
-- Server version	11.4.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `Appointment`
--

DROP TABLE IF EXISTS `Appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Appointment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `service` varchar(50) NOT NULL,
  `date` datetime(3) NOT NULL,
  `message` varchar(191) DEFAULT NULL,
  `payment_status` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
  `appointment_status` enum('booked','completed','cancelled') NOT NULL DEFAULT 'booked',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `cancellation_reason` varchar(191) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Appointment`
--

LOCK TABLES `Appointment` WRITE;
/*!40000 ALTER TABLE `Appointment` DISABLE KEYS */;
INSERT INTO `Appointment` VALUES
(1,'Bereket Wolde','bereketsodeno@gmail.com','Stone Treatment','2024-12-06 00:00:00.000','I want a good massage with a shapie girl','pending','booked','2024-12-06 08:21:02.298','2024-12-06 08:21:02.298','');
/*!40000 ALTER TABLE `Appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blog`
--

DROP TABLE IF EXISTS `Blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `tag` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `author` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'DRAFT',
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blog`
--

LOCK TABLES `Blog` WRITE;
/*!40000 ALTER TABLE `Blog` DISABLE KEYS */;
INSERT INTO `Blog` VALUES
(1,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733344498/bxp4g4l0bwspahybp1uv.webp','Discover the Magic of Spa Relaxation','massage','<p><strong>Discover the Magic of Spa Relaxation</strong><br><br>In our fast-paced world, the need for relaxation has never been greater. Spas provide a sanctuary where you can step away from daily stresses and reconnect with your mind, body, and soul. Whether you’re a seasoned spa enthusiast or a first-timer, there’s always something magical about the experience. Let’s explore why spas are more than just a luxury — they’re a lifestyle choice for holistic well-being.<br><br><br><strong><br> The Art of Spa Therapies</strong><br>Spas offer a wide array of therapies designed to rejuvenate and heal. Some popular treatments include:<br><br>- Hot Stone Massage: Melt away tension as warm stones glide across your body, releasing deep-seated stress.<br>- Aromatherapy: Essential oils are used to stimulate your senses and balance your emotions.<br>- Detoxifying Body Wraps: Purify your skin and eliminate toxins with treatments that leave you feeling renewed.<br>- Facials: Tailored to your skin type, facials cleanse, exfoliate, and hydrate for a radiant complexion.<br><br><br><br> <strong>The Science Behind Relaxation</strong><br>Did you know that spa treatments can have profound effects on your health? Studies show that regular spa visits can:<br><br>- Lower Stress Hormones: Massages and aromatherapy reduce cortisol levels, improving your mood.<br>- Boost Circulation: Heat therapies and massages stimulate blood flow, promoting better oxygen delivery to tissues.<br>- Enhance Sleep: The calming atmosphere and therapies help regulate your sleep patterns.<br>- Support Detoxification: Saunas and wraps aid the body in flushing out harmful toxins.<br><br><br><br> <strong>Creating Your Own Spa Ritual at Home</strong><br>Can’t make it to a spa? No problem! Transform your home into a relaxation haven with these tips:<br><br>1. Set the Mood: Dim the lights and play soothing music.<br>2. DIY Treatments: Create face masks with natural ingredients like honey, yogurt, and avocado.<br>3. Aromatherapy Bath: Add a few drops of lavender or eucalyptus oil to a warm bath.<br>4. Meditation &amp; Breathing: Pair your rituals with mindfulness to deepen the relaxation experience.<br><br><br><strong><br> The Emotional Benefits of Spa Time</strong><br>Beyond the physical perks, spa treatments offer profound emotional rewards:<br><br>- Reconnection: Time at the spa allows you to pause, breathe, and reconnect with yourself.<br>- Self-Care: Investing in spa time is an act of self-love, boosting your confidence and self-worth.<br>- Happiness Boost: The release of endorphins during treatments lifts your mood, leaving you refreshed and joyful.<br><br><br><br> <strong>Spa Trends to Watch</strong><br>The world of spas is ever-evolving. Here are some trends making waves:<br><br>- Eco-Friendly Spas: Sustainable materials and organic products are reshaping the spa industry.<br>- Digital Detox Packages: Escape from technology and reconnect with nature and yourself.<br>- Cryotherapy: Sub-zero treatments to reduce inflammation and boost recovery.<br>- Sound Healing: Using vibrations and frequencies to create a meditative state.<br><br><br><br><br></p>','2024-12-04 20:34:59.463','Rejuva Glow Beauty','DRAFT',0,'2024-12-04 20:34:59.466'),
(2,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733344614/hrtovdbomzctucoyr6di.webp','The Art of Spa Therapies','massage','<p><strong>Discover the Magic of Spa Relaxation</strong><br><br>In our fast-paced world, the need for relaxation has never been greater. Spas provide a sanctuary where you can step away from daily stresses and reconnect with your mind, body, and soul. Whether you’re a seasoned spa enthusiast or a first-timer, there’s always something magical about the experience. Let’s explore why spas are more than just a luxury — they’re a lifestyle choice for holistic well-being.<br><br><br><strong><br> The Art of Spa Therapies</strong><br>Spas offer a wide array of therapies designed to rejuvenate and heal. Some popular treatments include:<br><br>- Hot Stone Massage: Melt away tension as warm stones glide across your body, releasing deep-seated stress.<br>- Aromatherapy: Essential oils are used to stimulate your senses and balance your emotions.<br>- Detoxifying Body Wraps: Purify your skin and eliminate toxins with treatments that leave you feeling renewed.<br>- Facials: Tailored to your skin type, facials cleanse, exfoliate, and hydrate for a radiant complexion.<br><br><br><br> <strong>The Science Behind Relaxation</strong><br>Did you know that spa treatments can have profound effects on your health? Studies show that regular spa visits can:<br><br>- Lower Stress Hormones: Massages and aromatherapy reduce cortisol levels, improving your mood.<br>- Boost Circulation: Heat therapies and massages stimulate blood flow, promoting better oxygen delivery to tissues.<br>- Enhance Sleep: The calming atmosphere and therapies help regulate your sleep patterns.<br>- Support Detoxification: Saunas and wraps aid the body in flushing out harmful toxins.<br><br><br><br> <strong>Creating Your Own Spa Ritual at Home</strong><br>Can’t make it to a spa? No problem! Transform your home into a relaxation haven with these tips:<br><br>1. Set the Mood: Dim the lights and play soothing music.<br>2. DIY Treatments: Create face masks with natural ingredients like honey, yogurt, and avocado.<br>3. Aromatherapy Bath: Add a few drops of lavender or eucalyptus oil to a warm bath.<br>4. Meditation &amp; Breathing: Pair your rituals with mindfulness to deepen the relaxation experience.<br><br><br><strong><br> The Emotional Benefits of Spa Time</strong><br>Beyond the physical perks, spa treatments offer profound emotional rewards:<br><br>- Reconnection: Time at the spa allows you to pause, breathe, and reconnect with yourself.<br>- Self-Care: Investing in spa time is an act of self-love, boosting your confidence and self-worth.<br>- Happiness Boost: The release of endorphins during treatments lifts your mood, leaving you refreshed and joyful.<br><br><br><br> <strong>Spa Trends to Watch</strong><br>The world of spas is ever-evolving. Here are some trends making waves:<br><br>- Eco-Friendly Spas: Sustainable materials and organic products are reshaping the spa industry.<br>- Digital Detox Packages: Escape from technology and reconnect with nature and yourself.<br>- Cryotherapy: Sub-zero treatments to reduce inflammation and boost recovery.<br>- Sound Healing: Using vibrations and frequencies to create a meditative state.<br><br><br><br><br></p>','2024-12-04 20:36:54.442','Rejuva Glow Beauty','DRAFT',0,'2024-12-04 20:36:54.444'),
(3,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733766434/mwytsbsec3swekksl8yz.jpg','The Ultimate Guide to Spa Benefits: Relaxation, Rejuvenation, and Wellness','spa','<p style=\"margin-left: 10px;\"><strong>The Ultimate Guide to Spa Benefits: Relaxation, Rejuvenation, and Wellness</strong><br><br>In today’s fast-paced world, taking time for yourself is essential for maintaining both physical and mental health. One of the most effective ways to unwind and recharge is by visiting a spa. From relaxation to health benefits, a spa experience offers a holistic approach to wellness. Here’s why a spa day might be just what you need.<br><br><strong>1. Stress Relief</strong><br><br>Life is filled with stressors—work deadlines, family responsibilities, and countless other pressures. A spa visit provides an environment designed to promote relaxation. Whether you’re soaking in a warm jacuzzi, enjoying a calming massage, or meditating in a serene room, your body and mind can finally let go of built-up tension. Studies show that spa treatments reduce cortisol levels, the hormone responsible for stress, helping you feel more at ease.<br><strong><br>2. Improved Circulation</strong><br><br>Many spa treatments, such as massages and hydrotherapy, stimulate blood flow throughout your body. Improved circulation brings oxygen and essential nutrients to your tissues, promoting faster healing and overall vitality. A good massage can also relieve sore muscles and reduce inflammation.<br><br><strong>3. Skin Health</strong><br><br>Your skin is your body’s largest organ, and it deserves special care. Spa facials, body wraps, and exfoliation treatments help remove dead skin cells, unclog pores, and rejuvenate your complexion. Many spas use natural and organic products that nourish your skin, leaving you with a radiant glow.<br><br><strong>4. Mental Clarity</strong><br><br>Beyond physical benefits, spa treatments have a profound effect on mental health. Taking time away from daily stresses allows your mind to reset. Many spa experiences incorporate aromatherapy, mindfulness practices, and quiet spaces that promote mental clarity and emotional balance.<br><br><strong>5. Pain Management</strong><br><br>For those suffering from chronic pain, a spa visit can be transformative. Hydrotherapy, heat treatments, and therapeutic massages are effective at alleviating discomfort from conditions like arthritis, fibromyalgia, and sports injuries. Regular spa visits can complement medical treatments for pain relief.<br><br><strong>6. Detoxification</strong><br></p><p style=\"margin-left: 10px;\"><br></p><p style=\"margin-left: 10px;\"><br></p><p style=\"margin-left: 10px;\">Many spa treatments focus on detoxifying the body. From saunas that help you sweat out toxins to detox wraps that draw out impurities, these therapies can leave you feeling refreshed and renewed. Enhanced detoxification also boosts your immune system, making you more resilient to illness.<br><br><strong>7. Enhanced Sleep Quality</strong><br><br>Struggling with insomnia or poor sleep? Spa treatments help calm the nervous system, preparing your body for a restful night. Massages, in particular, increase serotonin levels, a precursor to melatonin—the hormone that regulates sleep.<br><br><strong>8. Boosted Confidence</strong><br><br>When you feel good on the inside, it shows on the outside. After a spa day, your relaxed demeanor and glowing skin can boost your self-esteem. Taking time for self-care reinforces a positive relationship with yourself, which reflects in your interactions with others.<br><br><strong>9. Social Connection</strong><br><br>Spas are not just for solo visits. Many spas offer packages for couples, friends, or groups, making them a great way to bond and create lasting memories. Sharing a spa experience can deepen your connections while enjoying mutual relaxation.<br><br><strong>10. A Gateway to Holistic Wellness</strong><br><br>Spas often provide more than just treatments. Many offer yoga classes, meditation sessions, and wellness workshops. These activities help you take a holistic approach to health and well-being, ensuring you leave with tools to maintain your wellness journey.<br><br><strong><em>Final Thoughts</em></strong><br><br>A spa day is more than a luxury—it’s an investment in your health and happiness. Whether you’re seeking stress relief, better skin, or simply some time to yourself, a visit to the spa can provide the rejuvenation you need. Treat yourself to a day of relaxation and experience the transformative benefits firsthand.<br><br><br></p>','2024-12-09 17:47:15.112','Rejuva Glow Beauty','DRAFT',0,'2024-12-09 17:47:15.124'),
(4,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733827353/yaeyrugln6fv1zi74med.png','The Ultimate Guide to Spa Beauty','beauty','<p>The Ultimate Guide to Spa Beauty</p><p><br></p><p>Inhale calm, exhale stress. A spa is more than just a luxury; it’s a sanctuary for rejuvenation, where beauty and well-being come together. Whether you’re looking to enhance your skin, unwind after a hectic week, or indulge in self-care, spa treatments offer countless benefits. Let’s explore the world of spa beauty and how it can transform your routine.<br><br>The Power of Self-Care<br>In our busy lives, we often overlook the importance of taking time for ourselves. Spa beauty isn\'t just about looking good; it’s about feeling good. A single massage can ease tension, while a deep-cleansing facial can leave you glowing inside and out. These rituals are a way to honor your body and mind.<br><br>Popular Spa Treatments<br>1. Facials: The Glow-Up You Deserve<br>Facials cleanse, exfoliate, and hydrate your skin. With options like hydrating masks, anti-aging treatments, or acne-targeting solutions, facials are customized to meet your skin\'s unique needs.<br><br>2. Massages: Relaxation Redefined<br>Whether it’s a Swedish massage to soothe your muscles or a deep tissue session for chronic pain, massages are a cornerstone of spa beauty. They improve circulation, reduce stress, and promote relaxation.<br><br>3. Body Wraps: Nourishment for Your Skin<br>From detoxifying clay wraps to hydrating seaweed treatments, body wraps cleanse and moisturize your skin, leaving it silky smooth.<br><br>Creating Your At-Home Spa Experience<br>If you can’t make it to a spa, create your own oasis at home! Light some candles, play soothing music, and pamper yourself with a DIY facial or warm bath. Incorporating small rituals into your routine can have a big impact on your well-being.<br><br>Embrace Spa Beauty<br>Spa beauty isn’t just about treating yourself; it’s about investing in your health and happiness. Whether you visit a luxurious spa or bring the experience home, taking time for self-care is always worth it.<br><br>So, when’s your next spa day? ✨</p>','2024-12-10 10:42:34.398','Rejuva Glow Beauty','DRAFT',0,'2024-12-10 10:42:34.399'),
(5,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733835537/adanz4c1sseve2k62dby.jpg','Get Ready','bea','','2024-12-10 12:58:57.622','Rejuva Glow Beauty','DRAFT',0,'2024-12-10 12:58:57.623'),
(6,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733836285/qftnsyvrpiev3qiscaah.jpg','ns','s','<p>s</p>','2024-12-10 13:11:25.927','Rejuva Glow Beauty','DRAFT',0,'2024-12-10 13:11:25.930'),
(7,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1734003987/svjouvdvk4oxhbssvqnr.png','NGAT result','education','<p>amnsmnmnsmnamda</p>','2024-12-12 11:46:28.100','Rejuva Glow Beauty','DRAFT',0,'2024-12-12 11:46:28.106'),
(8,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1734004116/ywuqf6uny5aagytgyzxz.png','','education','<p>asdas</p>','2024-12-12 11:48:37.448','Rejuva Glow Beauty','DRAFT',0,'2024-12-12 11:48:37.449');
/*!40000 ALTER TABLE `Blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`email`)),
  `location` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`location`)),
  `phone` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`phone`)),
  `workingDays` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`workingDays`)),
  `facebookUrl` varchar(191) DEFAULT NULL,
  `instagramUrl` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `emergencyContact` varchar(191) DEFAULT NULL,
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContactMessage`
--

DROP TABLE IF EXISTS `ContactMessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContactMessage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNo` varchar(20) DEFAULT '',
  `subject` varchar(255) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `response` text DEFAULT '',
  `respondedAt` datetime(3) DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContactMessage`
--

LOCK TABLES `ContactMessage` WRITE;
/*!40000 ALTER TABLE `ContactMessage` DISABLE KEYS */;
INSERT INTO `ContactMessage` VALUES
(1,'hello','Bereket Wolde','bereketsodeno@gmail.com','0903313002','Help','2024-12-06 12:11:12.846','2024-12-06 12:11:12.846','PENDING','','2024-12-06 12:11:12.846'),
(2,'hello','Aniyo Wolde Kobre','aniyo@gmail.com','0903313002','This a message from a customer who is satisified by your service and looking forward to bring some new clients and work together','2024-12-09 11:24:47.929','2024-12-09 11:24:47.929','PENDING','','2024-12-09 11:24:47.929'),
(3,'To the entire team, thank you for your dedication and hard work. Your collective efforts have resulted in outstanding accomplishments, and I am truly grateful to be a part of such an exceptional group of professionals.','Aniyo Wolde Kobre','aniyo@gmail.com','0903313002','hank you so much for your kindness and support. Your generosity means the world to me.','2024-12-09 11:46:02.636','2024-12-09 11:46:02.636','PENDING','','2024-12-09 11:46:02.636');
/*!40000 ALTER TABLE `ContactMessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CountAnimation`
--

DROP TABLE IF EXISTS `CountAnimation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CountAnimation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `animationDuration` int(11) DEFAULT NULL,
  `animationType` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CountAnimation`
--

LOCK TABLES `CountAnimation` WRITE;
/*!40000 ALTER TABLE `CountAnimation` DISABLE KEYS */;
/*!40000 ALTER TABLE `CountAnimation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image_url` text DEFAULT NULL,
  `phone_no` varchar(20) NOT NULL,
  `position` varchar(100) NOT NULL,
  `experience_years` int(11) NOT NULL,
  `personal_info` text DEFAULT NULL,
  `skills` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`skills`)),
  `employment_status` enum('Active','OnLeave','Terminated') NOT NULL DEFAULT 'Active',
  `role` enum('Admin','Stylist','Manager','Receptionist','ordinary') NOT NULL DEFAULT 'ordinary',
  `social_media` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`social_media`)),
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Employee_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES
(1,'David Green','david@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345441/qo1olklmrnhpwj2zqy8z.jpg','0900002121','massage expert',10,'David Green','[\"massage\"]','Active','Manager','[]','2024-12-04 20:50:41.641','2024-12-17 16:07:05.675'),
(2,'Amy Walker','amy@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345522/an6kxxbgilfw2t6jxlje.jpg','093023032322','spa manager',10,'Amy Walker','[\"manager\"]','Terminated','Manager','[]','2024-12-04 20:52:02.476','2024-12-17 16:07:01.161'),
(3,'Natalie Jones','natalie@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345588/svv20zeyxofppabm6xf6.jpg','093023032322','spa manager',10,'Natalie Jones','[\"massage\"]','Active','Receptionist','[]','2024-12-04 20:53:08.784','2024-12-12 13:34:45.319'),
(4,'Paula Deen','paula@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345646/ki1aybnb1ejpyo7upqbp.jpg','093023032322','massage expert',12,'Paula Deen','[\"manager\"]','Active','Manager','[]','2024-12-04 20:54:06.133','2024-12-04 20:54:06.133'),
(5,'Carla Hall','carla@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345689/mjdetsivtabmd9sg4f9a.jpg','093023032322','massage expert',10,'Carla Hall','[\"stylist\"]','Active','Stylist','[]','2024-12-04 20:54:49.519','2024-12-04 20:54:49.519'),
(6,'Bobby Flay','bobby@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733345746/kuujwwnhcdr6eyhw1g8u.jpg','093023032322','massage expert',10,'Bobby Flat','[\"stylist\"]','Active','Manager','[]','2024-12-04 20:55:47.326','2024-12-04 20:55:47.326'),
(7,'Abebila Admasu','abebila@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733838808/q2badwi2rcdzyju5vuzr.jpg','0903313002','Makeup Artist',10,'kajskjdka','[\"md\",\"d\",\"d\",\"d\"]','Terminated','Stylist','[]','2024-12-10 13:53:28.814','2024-12-17 16:07:10.828'),
(8,'Abebila Adimasu','bereketsodenoo@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1734004253/lhzdmda0tocghd9btwvf.jpg','0903313002','Makeup Artist',10,'sdads','[\"lsls\",\"slsl\"]','Terminated','Stylist','[]','2024-12-12 11:50:54.352','2024-12-12 12:56:47.618'),
(9,'Bereket Wolde','bereket@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1734005087/bg2nkdtdgducvmkjhfgb.jpg','0903313002','Stylist',10,'asdas','[\"stylist\",\"rapper\"]','Terminated','Stylist','[]','2024-12-12 12:04:48.469','2024-12-12 12:58:50.905'),
(10,'x','x@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1734006013/b3vxhyq0vfvydbliujip.jpg','c','c',20,'asdasd','[\"dasd\"]','Terminated','Admin','[]','2024-12-12 12:20:13.836','2024-12-12 12:40:49.558'),
(11,'Fitsum Tesfaye','fitsum@gmail.com','https://res.cloudinary.com/ducn9f7cl/image/upload/v1734006572/ajax9isoneqwmjewqf0j.png','0903313002','Doggy',10,'asda','[\"1000\"]','Terminated','Stylist','[]','2024-12-12 12:29:33.706','2024-12-12 12:40:54.669');
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FAQ`
--

DROP TABLE IF EXISTS `FAQ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FAQ` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(191) NOT NULL,
  `answer` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `category` varchar(191) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAQ`
--

LOCK TABLES `FAQ` WRITE;
/*!40000 ALTER TABLE `FAQ` DISABLE KEYS */;
/*!40000 ALTER TABLE `FAQ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pricing`
--

DROP TABLE IF EXISTS `Pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pricing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(191) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pricing`
--

LOCK TABLES `Pricing` WRITE;
/*!40000 ALTER TABLE `Pricing` DISABLE KEYS */;
INSERT INTO `Pricing` VALUES
(6,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1733346791/tmomgxzsvwqfx9eqht39.jpg',' Scrub Massage','Classic relaxation massage eases tension and promotes circulation.',190.00,'2024-12-04 21:13:12.370','2024-12-04 21:13:12.370'),
(7,'https://res.cloudinary.com/ducn9f7cl/image/upload/v1734456112/nznhw7ume7nhcjrymy1l.png','Waxing','<ul><li>Full Arm: $50</li><li>Half Arm: $40</li><li>Full Leg: $70</li><li>Half Leg: $40</li><li>Face: $50</li><li>Chin: $10</li><li>Lip: $10</li><li>Under Arms: $25</li><li>Bikini: $</li></ul><p><br></p><p><br></p>',10.00,'2024-12-17 17:21:53.090','2024-12-17 17:21:53.090');
/*!40000 ALTER TABLE `Pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `stockStatus` varchar(191) NOT NULL DEFAULT 'In Stock',
  `discount` double NOT NULL DEFAULT 0,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `category` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES
(2,'Laptop','<p>Circadia’s Anti-Aging Night Cream is a powerful formula designed to restore and rejuvenate skin while you sleep. Infused with peptides and antioxidants, it reduces fine lines, improves elasticity, and hydrates deeply, ensuring you wake up with a radiant, youthful glow. Ideal for all skin types looking for age-defying results.</p>',120,1,'In Stock',10,'[\"https://res.cloudinary.com/ducn9f7cl/image/upload/v1734471263/aq1hqliuh4ckhfdnfnfd.avif\",\"https://res.cloudinary.com/ducn9f7cl/image/upload/v1734471263/gq11zoue6qlcbtibgegb.avif\",\"https://res.cloudinary.com/ducn9f7cl/image/upload/v1734471263/rlvaikul5ntizbnexxly.avif\",\"https://res.cloudinary.com/ducn9f7cl/image/upload/v1734471263/pxcvsnb5rvqvyfauzn6b.avif\",\"https://res.cloudinary.com/ducn9f7cl/image/upload/v1734471263/k4tjza672xvanclwmvkn.avif\"]','laptop','2024-12-17 21:34:24.172','2024-12-17 21:34:24.172');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Testimonial`
--

DROP TABLE IF EXISTS `Testimonial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Testimonial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `priority` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Testimonial`
--

LOCK TABLES `Testimonial` WRITE;
/*!40000 ALTER TABLE `Testimonial` DISABLE KEYS */;
/*!40000 ALTER TABLE `Testimonial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Video`
--

DROP TABLE IF EXISTS `Video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `link` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Video`
--

LOCK TABLES `Video` WRITE;
/*!40000 ALTER TABLE `Video` DISABLE KEYS */;
/*!40000 ALTER TABLE `Video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES
('a4b1e7d9-b2e0-40c4-9d55-060f496452eb','497e8d392b1a4424bdd994e4fc7bd63dd356ea4c58ab2152ecd5a5cac05c606f','2024-12-17 19:43:12.807','20241217194312_nk',NULL,NULL,'2024-12-17 19:43:12.791',1),
('aa383263-4071-4500-93d7-5889aa3d7303','60a2591b205c8ecb1d568ddc3b58a3e215fca7765e8c92014f7f97c07692dd3f','2024-12-17 21:24:14.181','20241217212414_description',NULL,NULL,'2024-12-17 21:24:14.081',1),
('ab98d893-cbbb-49b0-bce0-02a96009bdb3','377583d432fc5f15e847bd095b951c695deb2973e7f626294e71921b1f9985e1','2024-12-17 17:21:44.025','20241217172143_d',NULL,NULL,'2024-12-17 17:21:43.992',1),
('d07862f9-fdb7-4e38-96fe-dd0ede4a4a4d','e1e2eada4dad34a1871570b2bb1668a54ab938d1cd2e149d0af940aa13cab38f','2024-12-04 19:19:52.208','20241204191952_',NULL,NULL,'2024-12-04 19:19:52.054',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES
(2,'Thai Massage','massage','https://res.cloudinary.com/ducn9f7cl/image/upload/v1733342138/rdrmvnzrukvlcq7ca75y.jpg','<p><strong>The Ultimate Guide to Thai Massage</strong><br><br>Thai massage is an ancient healing practice that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. Known for its rejuvenating effects, it’s a must-try experience for anyone visiting Thailand or looking for holistic wellness solutions. In this guide, we’ll explore what makes Thai massage unique and how you can make the most of it.<br><br><br><br> <strong>What is Thai Massage?</strong><br>Unlike Western massages that use oils and a massage table, traditional Thai massage is typically performed on a mat on the floor. The therapist uses their hands, elbows, knees, and feet to apply rhythmic pressure along energy lines (known as \"Sen lines\") and stretch the body into various yoga-like poses. This practice improves flexibility, circulation, and energy flow.<br><br><br><br>  <strong>Types of Thai Massage</strong> <br>1.  Traditional Thai Massage : Focuses on deep muscle stretching and pressure point stimulation.<br>2.  Oil Thai Massage : Incorporates aromatic oils for a more relaxing experience.<br>3.  Herbal Compress Massage : Uses heated herbal compresses to soothe sore muscles and enhance relaxation.<br><br><br><br>  Do’s and Don’ts for the Best Experience <br><br><strong>Do’s: </strong><br>-  Choose a Reputable Spa : Authentic Thai massages can vary greatly in quality. Research and pick a well-reviewed establishment.<br>-  Communicate Clearly : Inform your therapist about any injuries or pressure preferences.<br>-  Dress Comfortably : Most traditional massages are done fully clothed. Loose, breathable attire is ideal.<br>-  Relax Post-Massage : Allow your body time to absorb the benefits.<br><br>  <strong>Don’ts:</strong> <br>-  Avoid Heavy Meals : Eating before a session may cause discomfort.<br>-  Skip Hydration : Drink plenty of water to flush out toxins released during the massage.<br>-  Don’t Expect Instant Results : Some soreness is normal; the benefits often become evident the next day.<br><br><br><br>  <strong>Fun Facts About Thai Massage </strong><br>- Thai massage is believed to have been developed by Jivaka Kumar Bhaccha, a physician to the Buddha.<br>- It’s often referred to as “yoga for lazy people” due to its dynamic stretches.<br><br><br><br><br><br><br></p>','2024-12-04 19:55:39.464','2024-12-04 19:55:39.464',1);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `password` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'admin11@gmail.com','Admin',20,'2024-12-05 20:29:48.226','1234asas','user'),
(2,'admin@gmail.com','Admin',20,'2024-12-05 20:31:20.030','1234asas','user'),
(4,'admin1@gmail.com',NULL,21,'2024-12-05 20:46:19.999','$2b$10$mHiI1kVoCMqwHpxWFHZhVeFucfSjQRTnG.NBrSVWQpu16Zd1zswZ.','user'),
(5,'admin2@gmail.com',NULL,21,'2024-12-06 08:17:49.030','$2b$10$5UyCoGUSjLpPl/XkYGch5O6uGsfJ.7vy8ZwoPy13r3uGTHFv9NS/i','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-18  0:52:03
