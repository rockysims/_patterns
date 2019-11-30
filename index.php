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
		function getDirPaths($curPath) {
			echo "curPath: $curPath<br/>";

			$allChildPaths = [];

			if (is_dir($curPath)) {
				foreach (scandir($curPath) as $childPath) {
					if ($childPath === '.' || $childPath === '..') continue;
					$allChildPaths->array_push(getDirPaths($childPath));
				}
			} else {
				$allChildPaths[] = $curPath;
			}

			return $allChildPaths;
		}

		foreach (getDirPaths('learningMaterial') as $path) {
			$file = basename($path);
			echo "<a href=\"$path\">$file</a><br/>";
		}
		?>
    </body>
</html>
