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
				var_dump(scandir($curPath));
				foreach (scandir($curPath) as $child) {
					if ($child === '.' || $child === '..') continue;
					$allChildPaths->array_push(getDirPaths($curPath . '/'. $child));
				}
			} else {
				echo "found file $curPath<br/>";
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
