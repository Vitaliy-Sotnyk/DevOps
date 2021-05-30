<?php 
    $path='good.txt';
    $fp=fopen($path, 'r');
    $c=fread($fp,2);
    fclose($fp);
    $fp=fopen($path,'w')
    fwrite($fp, $c+1);
    fclose($fp);
    ?>