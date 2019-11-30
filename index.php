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
		function renderIndex($curPath) {
			$file = basename($curPath);
			$indent = str_repeat("&nbsp;&nbsp;&nbsp;&nbsp;", substr_count($curPath, "/"));

			if (is_dir($curPath)) {
				foreach (scandir($curPath) as $child) {
					if ($child === '.' || $child === '..') continue;
					echo "$indent <strong>$file/</strong><br/>";
					renderIndex($curPath . '/' . $child);
				}
			} else {
				echo "$indent <a href=\"$curPath\">$file</a><br/>";
			}
		}

		renderIndex('learningMaterial');
		?>
    </body>
</html>
