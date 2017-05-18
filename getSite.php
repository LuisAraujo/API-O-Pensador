<?php

$autor = $_GET['autor'];

$url = file_get_contents('https://pensador.uol.com.br/'.$autor.'/');

echo $url;

?>