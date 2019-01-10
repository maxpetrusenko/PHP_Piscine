#!/usr/bin/php
<?php
while (1) {
	echo "Enter a number: ";
	$input = trim(fgets(STDIN));
	
	if (strlen($input) && is_numeric($input)) {
		echo "The number ".$input." is ".($input % 2 ? "odd" : "even")."\n";
	}
	else {
        if (feof(STDIN))
		{
			echo "\n";
			exit;
		}
		echo "'".$input."' is not a number\n";
	}
}