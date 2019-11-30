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

		$files = array();
		foreach (scandir($dirPath) as $file) {
			if ($file === '.' || $file === '..') continue;
			$files[] = $file;
		}

		var_dump($files);





		// $path = "learningMaterial/code/vanilla";

		// if ($handle = opendir($path)) {
		// 	while (false !== ($file = readdir($handle))) {
		// 		if ('.' === $file) continue;
		// 		if ('..' === $file) continue;
		
		// 		//render link
		// 		echo $file->basename();
		// 	}
		// 	closedir($handle);
		// }



		// $dir = new DirectoryIterator('learningMaterial/code/vanilla');
		// foreach ($dir as $fileinfo) {
		// 	if (!$fileinfo->isDot()) {
		// 		var_dump($fileinfo->getFilename());
		// 	}
		// }
		?>
        <a href="learningMaterial/code/vanilla/_start.html">
            learningMaterial/code/vanilla/_start.html
        </a>
        <a href="learningMaterial/code/vanilla/zz_debugger.html">
            learningMaterial/code/vanilla/zz_debugger.html
        </a>
    </body>
</html>
