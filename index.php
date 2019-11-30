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
			$allChildPaths = [];

			if (is_dir($curPath)) {
				foreach (scandir($curPath) as $child) {
					if ($child === '.' || $child === '..') continue;
					array_push($allChildPaths, ...getDirPaths($curPath . '/' . $child));
				}
			} else {
				$allChildPaths[] = $curPath;
			}

			return $allChildPaths;
		}

		foreach (getDirPaths('learningMaterial') as $path) {
			$dir = dirname($path);
			$file = basename($path);
			$depth = substr_count($path, "/");
			$indent = str_repeat("&nbsp;&nbsp;", $depth);
			echo "<a href=\"$path\">$indent $file</a><br/>";
		}
		?>
    </body>
</html>
