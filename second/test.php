<?php
header('Content-Type: application/json');

// Получение данных из тела запроса
$input = json_decode(file_get_contents('php://input'), true);

// Проверка, получены ли данные
if (!empty($input)) {
    // Формирование ответа
    $response = [
        'status' => 'success',
        'received' => $input
    ];
    echo json_encode($response);
} else {
    // В случае ошибок
    $response = [
        'status' => 'error',
        'message' => 'No data received'
    ];
    echo json_encode($response);
}
?>