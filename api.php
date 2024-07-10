<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

error_reporting(E_ALL);
ini_set('display_errors', 1);
$mysqli = new mysqli("localhost", "root", "", "react_native_login");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $mysqli->real_escape_string($data['First_Name']);
    $lastname = $mysqli->real_escape_string($data['Last_Name']);
    $email = $mysqli->real_escape_string($data['Email']);
    $password = $mysqli->real_escape_string($data['password']);

    $query = "INSERT INTO users (First_Name, Last_Name, Email, password) VALUES ('$username', '$lastname', '$email', '$password')";

    if ($mysqli->query($query) === true) {
        echo json_encode(['message' => 'User created successfully']);
    } else {
        echo json_encode(['error' => 'Error creating user']);
    }
}

$mysqli->close();
?>
