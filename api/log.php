<?php

    include("database.php");

    try {

        $connection = connect();

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
            die();

        } else if ($_SERVER["REQUEST_METHOD"] === "POST") {

          header("HTTP/1.1 400");
          die();

        } else if ($_SERVER["REQUEST_METHOD"] === "PUT") {

          $json = addNumberCharactersCreated($connection,'bac370ea-dfca-4387-96d9-5fa7799e5088');
          header('Content-Type: application/json');
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          die();

        } else if ($_SERVER["REQUEST_METHOD"] === "GET") {

          $json = getNumberCharactersCreated($connection,'bac370ea-dfca-4387-96d9-5fa7799e5088');
          header('Content-Type: application/json');
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          die();

        } else if ($_SERVER["REQUEST_METHOD"] === "DELETE") {

          header("HTTP/1.1 400");
          die();

        } else {

            header("HTTP/1.1 405");
            die();

        }

        disconnect($connection);

    } catch (Exception $e) {
        echo $e;
        header("HTTP/1.1 500");
        die();
    }
