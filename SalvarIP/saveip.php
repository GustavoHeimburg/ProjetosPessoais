<?php
$servername = "3306";
$username = "user";
$password = "user";
$dbname = "meuip";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro de conexão com o banco de dados: " . $conn->connect_error);
}

$ip_address = $_POST['ip'];

$sql = "INSERT INTO ips (ip_address) VALUES ('$ip_address')";

if ($conn->query($sql) === TRUE) {
    echo "IP salvo com sucesso!";
} else {
    echo "Erro ao salvar o IP: " . $conn->error;
}

$conn->close();
?>
