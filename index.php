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
			if (!is_dir($curPath)) throw "Error: '$curPath' is not a directory.";
			
			$indent = str_repeat("&nbsp;&nbsp;&nbsp;&nbsp;", substr_count($curPath, "/"));
			$curDir = basename($curPath);

			echo "$indent <strong>$curDir/</strong><br/>";
			foreach (scandir($curPath) as $child) {
				if ($child === '.' || $child === '..') continue;

				$childPath = $curPath . '/' . $child;
				if (is_dir($childPath)) {
					renderIndex($childPath);
				} else {
					echo "$indent <a href=\"$childPath\">$child</a><br/>";
				}
			}
		}

		renderIndex('learningMaterial');
		?>
    </body>
</html>
