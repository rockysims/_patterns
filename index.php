<?php //include_once("home.html") ?>



<!DOCTYPE html>
<html>
    <head>
        <title>_patterns</title>
    </head>
    <body>
        Confused? See 
        <a href="https://github.com/rockysims/_patterns/blob/master/README.md">
            https://github.com/rockysims/_patterns/blob/master/README.md
        </a>
        <br/>
		<br/>
		<?php
		$dirPath = 'learningMaterial/code/vanilla';
		foreach (scandir($dirPath) as $file) {
			if ($file === '.' || $file === '..') continue;
			$path = $dirPath . '/' . $file;
		?>
			<a href="<?php echo $path ?>">
				<php echo $file; ?>
			</a><br/>
		<?php } ?>
    </body>
</html>
