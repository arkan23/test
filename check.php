<?php
//echo "I get email = ".$_REQUEST['email']." and password = ".$_REQUEST['password'];
if($_REQUEST['email']=='ark' && $_REQUEST['password']=='p'){

    header('Location:hello.php');
   // echo "<p class='bg-danger'>Вы ввели некоректные данные</p>";
}else{
echo "<p class='bg-danger'>Вы ввели некоректные данные<button type='button' class='close' aria-hidden='true' id='close_x'>&times;</button></p>";
}
?>