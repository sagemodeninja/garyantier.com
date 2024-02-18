<?php
    $uri = str_replace('index.php', '', $_SERVER['REQUEST_URI']);
    
    if ($uri == '/') {
        $uri = '/home';
    }

    $file = 'views' . $uri . '/index.php';
    $included = @include_once $file;

    if (!$included) {
        http_response_code(404);
        exit;
    }
?>