<?php

print_r($_POST);

// define variables and set to empty values
$nameError = "";
$name = "";
$addressError = "";
$address = "";
$cityError = "";
$city = "";
$zipError = "";
$zip = "";
$emailError = "";
$email = "";
$phoneError = "";
$phone = "";
$messageError = "";
$message = "";

if($_SERVER["REQUEST_METHOD"] == "POST") {
  if(empty($_POST["name"])) {
    $nameError = "Please enter your name.";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
      $nameError = "Please enter a valid name";
    }
  }

  if(empty($_POST["email"])) {
    $emailError = "Please enter your email.";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailError = "Please enter a valid email";
    }
  }

  if(empty($_POST["phone"])) {
    $phoneError = "";
  } else {
    $phone = test_input($_POST["phone"]);
    if (!preg_match("/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/", $phone)) {
      $phoneError = "Please enter a valid phone number";
    }
  }

  if(empty($_POST["message"])) {
    $messageError = "Please include a message with your form submission";
  } else {
    $message = test_input($_POST["message"]);
  }
}

funtion test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $date = htmlspecialchars($data);
  return $data;
}

?>

