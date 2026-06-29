<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Feedback is required']);
    exit;
}

$entry = [
    'feedback' => $input,
    'timestamp' => date('c')
];

$file = __DIR__ . '/feedback.json';
$feedbacks = [];

if (file_exists($file)) {
    $content = file_get_contents($file);
    if (trim($content) !== '') {
        $decoded = json_decode($content, true);
        if (is_array($decoded)) {
            $feedbacks = $decoded;
        }
    }
}

$feedbacks[] = $entry;
file_put_contents($file, json_encode($feedbacks, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode(['success' => true]);
