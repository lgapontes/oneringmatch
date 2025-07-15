<?php

    $DEBUG = true;

    /* Conexao */

    ini_set("include_path", '/home2/linuc318/php');
    ini_set("include_path", '/opt/cpanel/ea-php74/root/usr/share/pear');

    if ($DEBUG) {
        ini_set('display_errors', '1');
        ini_set('display_startup_errors', '1');
        error_reporting(E_ALL);
    }

    function connect() {
        $LOCALHOST = false;

        if ($LOCALHOST) {
          // Conexao local
          $connection = mysqli_connect("localhost","root","123eja","oneringmatch");
        } else {
          // Conexao remota
          $connection = mysqli_connect("localhost","linuc318_oneringmatch_user","]VnA-Op9&N;C","linuc318_oneringmatch");
        }

        if (!$connection) {
            throw new Exception("Database error: " . mysqli_connect_error());
        }
        $connection->set_charset("utf8");
        return $connection;
    }

    function disconnect($connection) {
        mysqli_close($connection);
    }

    function getNumberCharactersCreated($connection,$uuid) {
        $records = array();

        $query = "select number_characters_created, update_date from character_creation_log where uuid = ?";

        $result = $connection->execute_query($query, [$uuid]);
        if (!$result) {
            throw new Exception("Database error: " . $connection->error);
        }

        if ($result->num_rows == 1) {
            while($record = $result->fetch_assoc()) {
                array_push($records,$record);
            }
            return $records[0];
        } else {
          throw new Exception("Number of characters not found");
        }
    }

    function addNumberCharactersCreated($connection,$uuid) {
        $query = 'update character_creation_log set number_characters_created = number_characters_created + 1 where uuid=?';

        $result = $connection->execute_query($query,[$uuid]);

        if (!$result) {
            throw new Exception("Database error: " . $connection->error);
        }

        return getNumberCharactersCreated($connection,$uuid);
    }
