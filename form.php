<?php include('form-process.php'); ?>

<link href="css/main.css" rel="stylesheet" type="text/css" />
<form id="contact" name="contact" method="post" action="<?=$_SERVER['PHP_SELF'];?>" enctype=”multipart/form-data”>
  <div class="form-column">
    <div class="form-input">
      <label for="fname">Name:*</label>
      <input type="text" id="name" name="name">
      <span class="error"><?php $nameError ?></span>
    </div>
  </div>
  <div class="form-column">
    <div class="form-input">
      <label for="address">Address:*</label>
      <input type="text" id="address" name="address">
    </div>
  </div>
  <div class="form-column">
    <div class="form-input">
      <label for="city">City:*</label>
      <input type="text" id="city" name="city">
    </div>
    <div class="form-input">
      <label for="address">Zip Code:*</label>
      <input type="text" id="zip" name="zip">
    </div>
  </div>
  <div class="form-column">
    <div class="form-input">
      <label for="email">Email:*</label>
      <input type="text" id="email" name="email" required>
    </div>
    <div class="form-input">
      <label for="phone">Phone:</label>
      <input type="text" id="phone" name="phone">
    </div>
  </div>
  <div class="form-column">
    <div class="form-input">
      <label for="message">Message:*</label>
      <br />
      <p>Be sure to answer following questions:
      <ol>
        <li>What is your project? (Virtual design services, whole home remodel, bathroom renovation, etc.)</li>
        <li>Where are you located?</li>
        <li>What are you looking to achieve?</li>
        <li>What is your desired budget?</li>
        <li>What is your desired timing?</li>
      </ol>
   </p>
    <textarea id="message" name="message" rows="7"></textarea>
    </div>
  </div>
  <div class="form-column">
    <div class="form-input">
      <input type="submit" class="btn btn-primary" id="submit" name="submit">
    </div>
  </div>
</form>