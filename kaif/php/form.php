<?php
/* We carry out verification of input data and their protection from hostile scripts */
$email = htmlspecialchars($_POST["email"]);

/* Set the e-mail addressee */
$myemail = "kaif@dao.vc";

$to = "kaif@dao.vc";
$subject = "Form Join kaif white list";
$message = "\nEmail:$email";
mail($to, $subject, $message, "Content-Type: text/plain; charset=utf-8 \r\n") or print "not send a message.";
?>


<?php
/* If mistakes were made when filling out the form, the following code will work: */
function check_input($data, $problem = "")
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  if ($problem && strlen($data) == 0) {
    show_error($problem);
  }
  return $data;
}
function show_error($myError)
{
?>
  <html>

  <body>
    <p><span style='color:red; font: 15px Arial'>Please correct the following error:</span></p>
    <?php echo $myError; {
      echo "<a href=../index.html>Go back and fill out the form correctly</a>";
    }
    ?>
  </body>

  </html>
<?php
  exit();
}
?>