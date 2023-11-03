<?php
    $uri = $_SERVER['REQUEST_URI'];

    $uri = str_replace('index.php', '', $uri);
    $uri = rtrim($uri, '/');
    
    if ($uri == '/') {
        $uri = '/home';
    }

    $file = 'views' . $uri . '/index.php';
    $included = @include $file;

    if (!$included) {
        http_response_code(404);
        exit;
    }
?>