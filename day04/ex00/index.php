<?php

session_start();
echo "Welcome to PHP_Piscine";
if ($_GET['login'] && $_GET['passwd'] && $_GET['submit'] === "OK"){
$_SESSION['login'] = $_GET["login"];
$_SESSION['passwd'] = $_GET["passwd"];
}
?>

<html>
    <header>
    </header>
<body>

<form action='index.php' method='get' accept-charset='UTF-8'>
<fieldset >
<legend>Login</legend>
<input type='hidden' name='submitted' id='submitted' value='1'/>
<label for='login' >login:</label>
<input type='text' name='login' id='login' value = "<?php echo $_SESSION['login']; ?>" maxlength="50" />
<label for='passwd' >passwd:</label>
<input type='passwd' name='passwd' id='passwd' value="<?php echo $_SESSION['passwd']; ?>" maxlength="50" />
<input type='submit' name='submit' value='OK' />
</fieldset>
</form>

</body>
</html>