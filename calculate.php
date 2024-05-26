<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $pricesInput = $_POST['prices'];
    $pricesArray = array_map('intval', explode(',', $pricesInput));

    function calculateMaxProfit($prices) {
        $minPrice = PHP_INT_MAX;
        $maxProfit = 0;

        foreach ($prices as $price) {
            if ($price < $minPrice) {
                $minPrice = $price;
            } elseif ($price - $minPrice > $maxProfit) {
                $maxProfit = $price - $minPrice;
            }
        }

        return $maxProfit;
    }

    $maxProfit = calculateMaxProfit($pricesArray);
    header("Location: index.html?result=$maxProfit");
    exit();
} else {
    header('Location: index.html');
    exit();
}
