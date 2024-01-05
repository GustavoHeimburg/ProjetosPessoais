<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cep = $_POST['cep'];
    $url = "https://viacep.com.br/ws/$cep/json/";

    $response = file_get_contents($url);
    $data = json_decode($response, true);

    if (isset($data['erro']) && $data['erro']) {
        echo "CEP não encontrado.";
    } else {
        $cidade = $data['localidade'];
        echo "Cidade: $cidade";
    }
}
?>
