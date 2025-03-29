<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login - The Coders Club</title>
    <!-- Link to Stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Blue Container -->
    <div class="blue-container">
        <img src="MCE_tab.png" alt="Logo" class="favicon-logo">
        <div class="titles">
            <h1 class="college-name">Mangayarkarasi College of Engineering</h1>
            <h2 class="site-title">The Coders Club</h2>
        </div>
    </div>

    <!-- Secondary Menu -->
    <nav class="secondary-menu">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="learning-paths.html">Learning Paths</a>
        <a href="leaderboard.html">Leaderboard</a>
        <a href="login.html" class="active">Login</a>
    </nav>

    <!-- Main Content -->
    <section class="content">
        <h1>Student Login</h1>
        <form action="student-dashboard.html" method="POST">
            <label for="student-email">Email:</label>
            <input type="email" id="student-email" name="email" required>
            
            <label for="student-password">Password:</label>
            <input type="password" id="student-password" name="password" required>

            <button type="submit" class="interactive-button">Login</button>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>Created by The Coders Club</p>
    </footer>
</body>
</html>
